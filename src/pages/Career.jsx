import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, Home as HomeIcon, Star } from "lucide-react";
import { getCareer, img } from "../data/data";

const Career = () => {
  const { slug } = useParams();
  const career = getCareer(slug);
  const [level, setLevel] = useState("Beginner");
  const cred = career.levels[level];
  const salary = career.salary.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="page-wrap grid min-h-[17.5rem] items-center gap-8 py-8 md:grid-cols-[1fr_28rem]">
          <div className="max-w-xl">
            <nav className="mb-6 flex items-center gap-2 text-xs" aria-label="Breadcrumb">
              <Link to="/" aria-label="Home"><HomeIcon size={14} /></Link>
              <ChevronRight size={12} />
              <span>Careers</span>
              <ChevronRight size={12} />
              <span>{career.title}</span>
            </nav>
            <h1 className="heading-page text-3xl">{career.title}</h1>
            <p className="mt-2 text-md font-semibold leading-snug">{career.pitch}</p>
            <p className="mt-3 text-sm text-muted">{career.desc}</p>
            <p className="mt-3 text-sm">
              <span className="font-semibold">Skills you'll need</span>: {career.skills}
            </p>
          </div>

          <div className="relative hidden h-[17.5rem] md:block">
            <div className="absolute -top-16 right-10 h-[26rem] w-[22rem] rounded-full bg-sun [clip-path:polygon(0_0,100%_0,100%_60%,30%_100%,0_100%)]" />
            <img src={img(`person-${career.slug}`, 360, 420)} alt="" className="absolute bottom-0 right-16 h-full w-56 rounded-t-[7rem] object-cover" />
            <div className="absolute bottom-3 left-0 z-10 rounded-pill border-2 border-sun bg-white px-4 py-1.5 text-sm shadow">
              <span className="font-semibold">₹{salary}</span> median salary · <span className="font-semibold">{career.jobs.toLocaleString("en-US")}</span> jobs available¹
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrap section">
        <h2 className="heading-section text-3xl">Recommended credentials</h2>
        <div className="mt-3 flex gap-2" role="tablist">
          {Object.keys(career.levels).map((name) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={level === name}
              onClick={() => setLevel(name)}
              className={`pill min-h-8 text-xs ${level === name ? "pill-active" : "hover:bg-tint"}`}
            >
              {name}
            </button>
          ))}
        </div>

        <article className="mt-4 grid overflow-hidden rounded-card border border-line lg:grid-cols-[22rem_1fr]">
          <div className="p-6">
            <span className="grid size-6 place-items-center rounded-[3px] border border-line text-[0.625rem] font-bold text-brand">
              {cred.org.charAt(0)}
            </span>
            <h3 className="mt-3 text-2xl font-semibold leading-snug">{cred.title}</h3>
            <p className="mt-3 line-clamp-3 text-xs">
              <span className="font-semibold">Skills you'll gain:</span> {career.skills}
            </p>
            <p className="mt-3 flex items-center gap-1 text-xs">
              <Star size={13} className="fill-brand text-brand" />
              <span className="font-semibold">{cred.rating}</span>
              <span className="text-muted">({cred.reviews.toLocaleString("en-US")} reviews)</span>
            </p>
            <p className="mt-1 text-xs text-muted">{level} · {cred.duration} · Earn degree credit</p>
            <Link to={`/careers/${career.slug}`} className="btn btn-primary mt-4">Enroll for free</Link>
          </div>

          <div className="scroll-x items-start gap-0 bg-white px-4 py-5">
            {cred.courses.map((course, i) => (
              <div key={course} className="relative w-44 shrink-0 pr-4">
                <img src={img(`${career.slug}-${level}-${i}`, 240, 160)} alt="" className="h-[5.5rem] w-full rounded-control object-cover" />
                {i < cred.courses.length - 1 && <span className="absolute left-[calc(100%-1rem)] top-[2.75rem] h-0.5 w-4 bg-line" />}
                <h4 className="mt-3 line-clamp-3 text-xs font-semibold">{course}</h4>
                <p className="mt-2 text-xs text-muted">Course {i + 1} of {cred.courses.length}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
};

export default Career;
