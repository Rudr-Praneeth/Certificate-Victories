import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Search, Sparkles } from "lucide-react";
import { slugify } from "../data/data";
import ExploreMenu from "./ExploreMenu";

const Navbar = ({ onLogin }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const submit = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/careers/${slugify(query)}`);
  };

  return (
    <div className="relative z-40 border-b border-line bg-white">
      <div className="page-wrap relative z-50 flex h-16 items-center gap-6">
        <Link
          to="/"
          className="text-[1.75rem] font-bold tracking-tight text-brand"
          aria-label="Coursera home"
        >
          coursera
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className={`flex h-10 items-center gap-1 rounded-control px-3 text-sm font-semibold text-brand ${open ? "bg-brand-soft" : "hover:bg-tint"}`}
        >
          Explore
          <ChevronDown size={16} className={open ? "rotate-180" : ""} />
        </button>

        <Link
          to="/careers/online-degrees"
          className="text-sm font-semibold text-muted hover:text-ink"
        >
          Degrees
        </Link>

        <form
          onSubmit={submit}
          className="mx-2 flex h-11 max-w-md flex-1 items-center rounded-pill border border-line bg-white pl-4 pr-1 focus-within:border-brand"
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you want to learn?"
            className="min-w-0 flex-1 bg-transparent text-md outline-none placeholder:text-muted"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex size-9 items-center justify-center rounded-full bg-brand text-white hover:bg-brand-dark"
          >
            <Search size={18} />
          </button>
        </form>

        <div className="ml-auto flex items-center gap-5">
          <button
            type="button"
            aria-label="AI assistant"
            className="text-brand"
          >
            <Sparkles size={20} />
          </button>
          <button
            type="button"
            onClick={onLogin}
            className="text-sm font-semibold text-brand hover:underline"
          >
            Log In
          </button>
          <button type="button" onClick={onLogin} className="btn btn-outline">
            Join for Free
          </button>
        </div>
      </div>

      <ExploreMenu open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Navbar;
