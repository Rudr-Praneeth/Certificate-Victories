import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { partners, slugify } from "../data/data";

const Partners = () => {
  return (
    <section className="page-wrap section">
      <h2 className="heading-section mb-4">Learn from 350+ leading universities and companies</h2>
      <div className="relative">
        <div className="scroll-x gap-3 pr-10">
          {partners.map((p) => (
            <Link key={p.name} to={`/careers/${slugify(p.name)}`} className="pill h-[3.25rem] gap-2 px-4 hover:bg-tint">
              <span className="grid size-6 place-items-center rounded-full text-[0.6875rem] font-bold text-white" style={{ background: p.color }}>
                {p.name.charAt(0)}
              </span>
              {p.name}
            </Link>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex w-14 items-center justify-end bg-gradient-to-l from-white via-white to-transparent">
          <ChevronRight size={18} />
        </div>
      </div>
    </section>
  );
};

export default Partners;
