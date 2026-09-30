import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { popularColumns } from "../data/data";
import CourseItem from "./CourseItem";

const NewAndPopular = () => {
  return (
    <section className="page-wrap section">
      <h2 className="heading-section mb-4">New and popular</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {popularColumns.map((col) => (
          <div key={col.title} className="surface-tint p-4">
            <Link to={col.to} className="mb-3 flex items-center gap-1.5 text-md font-semibold hover:text-brand">
              {col.title}
              <ArrowRight size={16} />
            </Link>
            <div className="flex flex-col gap-2">
              {col.items.map((item) => (
                <CourseItem key={item.title} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewAndPopular;
