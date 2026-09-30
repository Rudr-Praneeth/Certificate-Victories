import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Check, Download, Share2, Star } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { certificateUrl } from "../data/users";

const CertificateView = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [copied, setCopied] = useState(false);

  if (!user) return <Navigate to="/" replace />;

  const course = user.completed.find((c) => c.id === id);
  if (!course) return <Navigate to="/my-learning" replace />;

  const src = certificateUrl(course.certificate);

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <h1 className="text-3xl font-semibold">{course.title}</h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_26rem]">
          <div>
            <div className="bg-[#00205b] p-8">
              <div className="flex items-center gap-8">
                <span className="relative grid size-24 shrink-0 place-items-center rounded-full bg-[#0b8de0] text-5xl font-semibold">
                  {user.fullName.charAt(0).toUpperCase()}
                  <span className="absolute -right-1 top-1 grid size-6 place-items-center rounded-full bg-black">
                    <Check size={14} />
                  </span>
                </span>
                <div>
                  <h2 className="text-xl font-bold">
                    Completed by {user.fullName}
                  </h2>
                  <p className="mt-3 font-bold">{course.completedOn}</p>
                  <p className="mt-2 font-bold">{course.hours}</p>
                  <p className="mt-2 font-bold">
                    Grade Achieved: {course.grade}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-md leading-snug">
                {user.fullName}'s account is verified. Coursera certifies their
                successful completion of{" "}
                <span className="underline">{course.title}</span>
              </p>
            </div>

            <div className="mt-6 flex items-start gap-4">
              <span
                className="grid size-16 shrink-0 place-items-center rounded-[4px] bg-white text-3xl font-bold"
                style={{ color: course.badge.color }}
              >
                {course.badge.letter}
              </span>
              <div>
                <Link
                  to={`/careers/${course.id}`}
                  className="font-bold underline"
                >
                  {course.title}
                </Link>
                <p className="mt-1 text-xs">{course.org}</p>
                <p className="mt-1 flex flex-wrap items-center gap-1 text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[#f59e0b] text-[#f59e0b]"
                    />
                  ))}
                  <span className="ml-1">
                    {course.rating} ({course.ratings} ratings) |{" "}
                    {course.enrolled} already enrolled
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div>
            {src ? (
              <img
                src={src}
                alt={`${course.title} certificate`}
                className="w-full border-8 border-white bg-white object-contain"
              />
            ) : (
              <div className="grid aspect-[4/3] place-items-center border-8 border-white bg-white/10 p-4 text-center text-sm text-white/70">
                Add {course.certificate} to src/data/certificates
              </div>
            )}
            <div className="mt-4 flex gap-4">
              <button
                type="button"
                onClick={share}
                className="flex h-12 flex-1 items-center justify-center gap-2 bg-[#2a73ff] text-sm font-semibold"
              >
                <Share2 size={18} />
                {copied ? "Link copied" : "Share Certificate"}
              </button>
              <a
                href={src || "#"}
                download={`${course.title} certificate`}
                className="flex h-12 flex-1 items-center justify-center gap-2 border border-[#2a73ff] text-sm font-semibold text-[#8ab4ff]"
              >
                <Download size={18} />
                Download Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateView;
