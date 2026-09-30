import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  Award,
  BookOpen,
  Bookmark,
  Check,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Sparkles,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { certificateUrl } from "../data/users";

const tabs = [
  "In Progress",
  "Completed",
  "Saved",
  "Certificates & Badges",
  "Skills",
];

const linkedIn = (c) =>
  `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(c.title)}&organizationName=${encodeURIComponent(c.org)}`;

const greeting = () => {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
};

const Badge = ({ badge }) => (
  <span
    className="grid size-8 shrink-0 place-items-center rounded-[4px] bg-white text-sm font-bold"
    style={{ color: badge.color }}
  >
    {badge.letter}
  </span>
);

const Empty = ({ icon: Icon, title, text, to, cta }) => (
  <div className="flex flex-col items-center px-4 py-16 text-center">
    <span className="grid size-24 place-items-center rounded-full bg-[#2a1a5e] text-[#b79cff]">
      <Icon size={44} />
    </span>
    <h2 className="mt-6 text-3xl font-bold">{title}</h2>
    <p className="mt-2 text-sm">{text}</p>
    {to && (
      <Link
        to={to}
        className="mt-5 inline-flex h-10 items-center rounded-control bg-[#8ab4ff] px-5 text-sm font-semibold text-black"
      >
        {cta}
      </Link>
    )}
  </div>
);

const CompletedCard = ({ c }) => (
  <article className="flex items-start gap-4 rounded-2xl border border-white/20 p-5">
    <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-[#2fb344]">
      <Check size={16} />
    </span>
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-2">
        <Badge badge={c.badge} />
        <div>
          <p className="text-sm font-semibold">{c.org}</p>
          <p className="text-xs text-white/60">Offered by Coursera</p>
        </div>
      </div>
      <h3 className="mt-2 text-md font-semibold">{c.title}</h3>
      <p className="mt-1 text-sm text-white/60">{c.type} · 100% complete</p>
      <div className="mt-3 flex items-center gap-5">
        <a
          href={linkedIn(c)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 items-center rounded-control bg-[#8ab4ff] px-4 text-sm font-semibold text-black"
        >
          Add to LinkedIn
        </a>
        <Link
          to={`/certificate/${c.id}`}
          className="text-sm font-semibold text-[#8ab4ff] hover:underline"
        >
          View certificate
        </Link>
      </div>
    </div>
    <button type="button" aria-label="More options" className="text-[#8ab4ff]">
      <MoreHorizontal size={20} />
    </button>
  </article>
);

const CertCard = ({ c }) => {
  const src = certificateUrl(c.thumbnail) || certificateUrl(c.certificate);
  return (
    <article className="w-full max-w-sm rounded-2xl border border-white/20 p-4">
      <Link to={`/certificate/${c.id}`}>
        {src ? (
          <img
            src={src}
            alt={`${c.title} certificate`}
            className="aspect-[4/3] w-full rounded-[4px] bg-white object-contain"
          />
        ) : (
          <div className="grid aspect-[4/3] w-full place-items-center rounded-[4px] bg-white/10 text-sm text-white/60">
            Certificate preview
          </div>
        )}
      </Link>
      <h3 className="mt-4 text-md font-semibold">{c.title}</h3>
      <div className="mt-2 flex gap-4 text-sm font-semibold text-[#8ab4ff]">
        <a
          href={linkedIn(c)}
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          Add to LinkedIn
        </a>
        <Link to={`/certificate/${c.id}`} className="hover:underline">
          View certificate
        </Link>
      </div>
      <p className="mt-2 text-sm text-[#9db4e5]">{c.org}</p>
      <p className="mt-1 text-sm text-[#9db4e5]">
        Completed {c.completedLabel}
      </p>
    </article>
  );
};

const Calendar = () => {
  const today = new Date();
  const [cursor, setCursor] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const lead = (cursor.getDay() + 6) % 7;
  const total = new Date(
    cursor.getFullYear(),
    cursor.getMonth() + 1,
    0,
  ).getDate();
  const cells = [
    ...Array(lead).fill(null),
    ...Array.from({ length: total }, (_, i) => i + 1),
  ];
  const shift = (n) =>
    setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + n, 1));
  const isToday = (d) =>
    d === today.getDate() &&
    cursor.getMonth() === today.getMonth() &&
    cursor.getFullYear() === today.getFullYear();

  return (
    <aside className="rounded-2xl border border-white/20 p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-md font-semibold">
          {cursor.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h3>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => shift(-1)}
            aria-label="Previous month"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => shift(1)}
            aria-label="Next month"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-y-2 text-center text-sm">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
          <span key={d} className="pb-2 font-semibold">
            {d}
          </span>
        ))}
        {cells.map((d, i) => (
          <span key={i} className="flex justify-center">
            {d && (
              <span
                className={`grid size-8 place-items-center rounded-full text-[#9db4e5] ${isToday(d) ? "border-2 border-[#8a5cf6] font-semibold text-white" : ""}`}
              >
                {d}
              </span>
            )}
          </span>
        ))}
      </div>
    </aside>
  );
};

const MyLearning = () => {
  const { user } = useAuth();
  const [tab, setTab] = useState(tabs[0]);

  if (!user) return <Navigate to="/" replace />;

  const types = [...new Set(user.completed.map((c) => c.type))];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="px-6 pt-8 sm:px-10">
        <span className="grid size-8 place-items-center rounded-full bg-[#dbe7ff] text-sm font-bold text-black">
          {user.name.charAt(0).toUpperCase()}
        </span>
        <h1 className="mt-6 text-4xl font-bold">
          {greeting()}, {user.name}
        </h1>

        <div
          className="mt-16 flex gap-7 overflow-x-auto border-b border-white/20"
          role="tablist"
        >
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`whitespace-nowrap pb-3 text-sm font-semibold ${tab === t ? "border-b-2 border-white text-white" : "text-[#9db4e5] hover:text-white"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 py-8 sm:px-10">
        {tab === "In Progress" && (
          <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
            <Empty
              icon={BookOpen}
              title="Nothing in progress"
              text="Start a course and it will show up here."
              to="/careers/artificial-intelligence"
              cta="Explore courses"
            />
            <Calendar />
          </div>
        )}

        {tab === "Completed" &&
          (user.completed.length ? (
            <div className="flex flex-col gap-4">
              {user.completed.map((c) => (
                <CompletedCard key={c.id} c={c} />
              ))}
            </div>
          ) : (
            <Empty
              icon={Check}
              title="No completed courses yet"
              text="Finish a course and it will show up here."
            />
          ))}

        {tab === "Saved" && (
          <Empty
            icon={Bookmark}
            title="Save courses to find them here"
            text="Browse the catalog and bookmark courses or specializations you are interested in."
          />
        )}

        {tab === "Certificates & Badges" &&
          (user.completed.length ? (
            types.map((type) => (
              <div key={type} className="mb-8">
                <h2 className="mb-5 text-xl font-semibold">{type}</h2>
                <div className="flex flex-wrap gap-6">
                  {user.completed
                    .filter((c) => c.type === type)
                    .map((c) => (
                      <CertCard key={c.id} c={c} />
                    ))}
                </div>
              </div>
            ))
          ) : (
            <Empty
              icon={Award}
              title="No certificates yet"
              text="Certificates you earn will appear here."
            />
          ))}

        {tab === "Skills" && (
          <Empty
            icon={Sparkles}
            title="No skills yet"
            text="Skills you earn from completed courses will appear here."
          />
        )}
      </section>
    </div>
  );
};

export default MyLearning;
