import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Pencil, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const providers = [
  {
    name: "Google",
    icon: (
      <svg viewBox="0 0 48 48" className="size-5">
        <path
          fill="#EA4335"
          d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.5 17.7 9.5 24 9.5z"
        />
        <path
          fill="#4285F4"
          d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.2 5.5-4.7 7.2l7.6 5.9c4.4-4.1 6.9-10.1 6.9-17.1z"
        />
        <path
          fill="#FBBC05"
          d="M10.5 28.7c-.5-1.5-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.5 0 20.1 0 24s.9 7.5 2.6 10.8l7.9-6.1z"
        />
        <path
          fill="#34A853"
          d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.9 2.3-8.3 2.3-6.3 0-11.6-4-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5">
        <rect width="24" height="24" rx="4" fill="#3b5998" />
        <path
          fill="#fff"
          d="M16.5 24v-9h3l.5-3.5h-3.5V9.3c0-1 .3-1.8 1.8-1.8H20V4.4c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.7H10V15h3v9z"
        />
      </svg>
    ),
  },
  {
    name: "Apple",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5">
        <path
          fill="#000"
          d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.9zM14.1 5.8c.6-.8 1.1-1.9.9-3-.9 0-2.1.6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1.1.1 2.2-.6 2.8-1.3z"
        />
      </svg>
    ),
  },
];

const LoginModal = ({ open, onClose }) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    setStep("email");
    setEmail("");
    setPassword("");
    setShow(false);
    setError("");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const submitEmail = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setStep("password");
  };

  const submitPassword = (e) => {
    e.preventDefault();
    if (!password) return;
    login(email);
    setPassword("");
    onClose();
    navigate("/");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        onMouseDown={(e) => e.stopPropagation()}
        className="relative max-h-full w-full max-w-[23.75rem] overflow-y-auto rounded-panel bg-white p-6 shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 text-ink hover:text-brand"
        >
          <X size={22} />
        </button>

        {step === "email" ? (
          <>
            <h2 id="login-title" className="pr-8 text-2xl font-semibold">
              Log in or create account
            </h2>
            <p className="mt-2 text-md text-muted">
              Learn on your own time from top universities and businesses.
            </p>

            <form onSubmit={submitEmail} className="mt-6" noValidate>
              <label
                htmlFor="login-email"
                className="mb-2 block text-md font-semibold"
              >
                Email <span className="text-red-600">*</span>
              </label>
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@email.com"
                autoFocus
                className={`h-11 w-full rounded-control border px-3 text-md outline-none placeholder:text-muted focus:border-brand ${error ? "border-red-600" : "border-line"}`}
              />
              {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
              <button
                type="submit"
                className="btn btn-primary btn-lg mt-4 w-full"
              >
                Continue
              </button>
            </form>

            <div className="my-4 flex items-center gap-3 text-xs text-muted">
              <span className="h-px flex-1 bg-line" />
              or
              <span className="h-px flex-1 bg-line" />
            </div>

            <div className="flex flex-col gap-3">
              {providers.map((p) => (
                <button
                  key={p.name}
                  type="button"
                  className="relative flex h-11 items-center justify-center rounded-control border border-ink text-sm font-semibold hover:bg-tint"
                >
                  <span className="absolute left-4">{p.icon}</span>
                  Continue with {p.name}
                </button>
              ))}
            </div>

            <a
              href="#"
              className="mt-4 inline-block text-sm text-brand underline"
            >
              Sign up with your organization
            </a>

            <p className="mt-4 text-xs leading-relaxed text-muted">
              I accept Coursera's{" "}
              <a href="#" className="underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Notice
              </a>
              . Having trouble logging in?{" "}
              <a href="#" className="underline">
                Learner help center
              </a>
            </p>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              This site is protected by reCAPTCHA Enterprise and the Google{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </>
        ) : (
          <>
            <h2 id="login-title" className="pr-8 text-2xl font-semibold">
              Welcome back
            </h2>

            <form onSubmit={submitPassword} className="mt-6">
              <label className="mb-2 block text-md font-semibold">
                Email <span className="text-red-600">*</span>
              </label>
              <div className="flex h-11 overflow-hidden rounded-control border border-line">
                <input
                  readOnly
                  value={email}
                  className="min-w-0 flex-1 bg-brand-soft px-3 text-md outline-none"
                />
                <button
                  type="button"
                  onClick={() => setStep("email")}
                  aria-label="Edit email"
                  className="grid w-11 place-items-center border-l border-line hover:bg-tint"
                >
                  <Pencil size={16} />
                </button>
              </div>

              <label
                htmlFor="login-password"
                className="mb-2 mt-4 block text-md font-semibold"
              >
                Password <span className="text-red-600">*</span>
              </label>
              <div className="flex h-11 items-center rounded-control border border-line px-3 focus-within:border-brand">
                <input
                  id="login-password"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                  autoComplete="off"
                  className="min-w-0 flex-1 bg-transparent text-md outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShow((v) => !v)}
                  aria-label={show ? "Hide password" : "Show password"}
                >
                  {show ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <a
                href="#"
                className="mt-2 inline-block text-xs text-brand underline"
              >
                Forgot password?
              </a>

              <button
                type="submit"
                disabled={!password}
                className={`btn btn-lg mt-6 w-full ${password ? "btn-primary" : "cursor-not-allowed bg-[#c3cde3] text-white"}`}
              >
                Next
              </button>
              <button
                type="button"
                className="btn btn-outline btn-lg mt-4 w-full"
              >
                Login with link
              </button>
            </form>

            <p className="mt-4 text-sm">
              New to Coursera?{" "}
              <button
                type="button"
                onClick={() => setStep("email")}
                className="text-brand underline"
              >
                Sign up
              </button>
            </p>
            <hr className="my-4 border-line" />
            <a href="#" className="text-sm text-brand underline">
              Log in with your organization
            </a>

            <p className="mt-6 text-xs leading-relaxed text-muted">
              Having trouble logging in?{" "}
              <a href="#" className="text-brand underline">
                Learner help center
              </a>
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              This site is protected by reCAPTCHA Enterprise and the Google{" "}
              <a href="#" className="text-brand underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-brand underline">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
