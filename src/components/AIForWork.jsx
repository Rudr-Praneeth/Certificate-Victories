import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { fields, img, slugify } from "../data/data";

const AIForWork = () => {
  const names = Object.keys(fields);
  const [active, setActive] = useState(names[0]);

  return (
    <section className="page-wrap section">
      <div className="rounded-panel bg-gradient-to-r from-[#7fb2ff] via-[#9ed0c8] to-[#7ed56f] p-4 sm:p-6">
        <Link to={`/careers/${slugify(active)}`} className="flex items-center gap-2 text-xl font-semibold hover:underline">
          AI for the work you do—and the career you want
          <ArrowRight size={18} />
        </Link>
        <p className="mt-1 text-md">Choose your field. Learn the workflows, judgment and tools reshaping it.</p>

        <div className="scroll-x mt-4 gap-3" role="tablist">
          {names.map((name) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={active === name}
              onClick={() => setActive(name)}
              className={`pill ${active === name ? "pill-active" : "hover:bg-tint"}`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fields[active].map((title) => (
            <Link key={title} to={`/careers/${slugify(active)}`} className="overflow-hidden rounded-card bg-white p-2 hover:shadow-lg">
              <img src={img(slugify(title), 480, 300)} alt="" className="h-40 w-full rounded-control object-cover" />
              <h3 className="px-2 pb-3 pt-3 text-md font-semibold">{title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIForWork;
