import React from "react";
import { Star } from "lucide-react";
import { img } from "../data/data";

const CourseItem = ({ item }) => {
  return (
    <a href="#" className="surface-card flex gap-3 p-2 hover:shadow-md">
      <img src={img(item.seed, 120, 120)} alt="" className="size-[4.5rem] shrink-0 rounded-control object-cover" />
      <div className="flex min-w-0 flex-col justify-center gap-0.5">
        <p className="flex items-center gap-1.5 text-sm text-muted">
          <span className="grid size-4 place-items-center rounded-[3px] bg-brand-soft text-[0.625rem] font-bold text-brand">
            {item.org.charAt(0)}
          </span>
          <span className="truncate">{item.org}</span>
        </p>
        <h4 className="line-clamp-1 text-sm font-semibold">{item.title}</h4>
        <p className="flex items-center gap-1 text-xs text-muted">
          {item.type}
          {item.rating && (
            <>
              <span>·</span>
              <Star size={12} className="fill-ink text-ink" />
              <span>{item.rating}</span>
            </>
          )}
        </p>
      </div>
    </a>
  );
};

export default CourseItem;
