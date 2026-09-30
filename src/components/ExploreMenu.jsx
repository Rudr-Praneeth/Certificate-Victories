import React from "react";
import { Link } from "react-router-dom";
import { exploreColumns, slugify } from "../data/data";

const ExploreMenu = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <button
        type="button"
        aria-label="Close menu"
        className="fixed inset-0 z-30 cursor-default bg-black/20"
        onClick={onClose}
      />
      <div className="absolute inset-x-0 top-full z-40 border-b border-line bg-white text-ink shadow-lg">
        <div className="page-wrap grid grid-cols-4 gap-10 py-8">
          {exploreColumns.map((column, ci) => (
            <div key={ci} className="flex flex-col gap-8">
              {column.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-3 text-md font-semibold">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {section.items.map((item) => (
                      <li key={item}>
                        <Link
                          to={`/careers/${slugify(item)}`}
                          className="text-sm hover:text-brand hover:underline"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {section.viewAll && (
                    <Link
                      to={`/careers/${slugify(section.viewAll)}`}
                      className="link-quiet mt-3 inline-block text-sm"
                    >
                      View all
                    </Link>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="page-wrap border-t border-line py-4 text-sm">
          Not sure where to begin?{" "}
          <Link to="/careers/free-courses" className="link-quiet">
            Browse free courses
          </Link>{" "}
          or{" "}
          <Link to="/careers/coursera-plus" className="link-quiet">
            Learn more about{" "}
            <span className="font-bold text-brand">Coursera</span>
            <span className="ml-1 rounded-[2px] bg-brand px-1 text-[0.625rem] font-bold text-white">
              PLUS
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ExploreMenu;
