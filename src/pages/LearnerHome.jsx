import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { img, popularColumns } from "../data/data";
import CourseItem from "../components/CourseItem";

const LearnerHome = () => {
  const { user } = useAuth();
  const latest = user.completed[0];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="bg-[#00205b] px-6 pb-10 pt-10 sm:px-10">
        <h1 className="text-5xl font-bold">Learning Hub</h1>
        <p className="mt-16 text-sm font-semibold">
          {user.name}, welcome back to Coursera
        </p>
        <p className="mt-1 text-2xl font-semibold underline">
          {latest ? latest.title : "Find your next course"}
        </p>
        <div className="mt-3 flex items-center gap-3">
          <div className="h-1.5 w-56 overflow-hidden rounded-full bg-white/25">
            <div
              className="h-full rounded-full bg-[#2fb344]"
              style={{ width: latest ? "100%" : "0%" }}
            />
          </div>
          <span className="text-xs text-white/70">
            {latest ? "100% complete" : "Nothing in progress"}
          </span>
        </div>

        <div className="mt-8 grid overflow-hidden rounded-card border border-white/20 md:grid-cols-2">
          <div className="flex min-h-64 flex-col justify-between bg-black p-6">
            <div>
              <h2 className="text-xl font-semibold">
                {latest ? "You finished a course" : "Nothing in progress yet"}
              </h2>
              <p className="mt-1 text-sm text-white/60">
                {latest
                  ? `${latest.type} · ${latest.org}`
                  : "Browse the catalog to get started"}
              </p>
            </div>
            <Link
              to={
                latest
                  ? `/certificate/${latest.id}`
                  : "/careers/artificial-intelligence"
              }
              className="inline-flex h-10 w-fit items-center rounded-control bg-[#8ab4ff] px-5 text-sm font-semibold text-black"
            >
              {latest ? "View certificate" : "Explore courses"}
            </Link>
          </div>
          <img
            src={img("learning-hub", 900, 500)}
            alt=""
            className="h-full min-h-64 w-full object-cover"
          />
        </div>
      </section>

      <section className="px-6 py-10 sm:px-10">
        <h2 className="text-2xl font-semibold">Recommended for you</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {popularColumns[0].items.map((item) => (
            <div key={item.title} className="text-ink">
              <CourseItem item={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LearnerHome;
