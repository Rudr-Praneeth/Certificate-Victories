import React from "react";
import { audiences } from "../data/data";

const Header = () => {
  return (
    <div className="bg-night text-white">
      <nav className="page-wrap flex h-11 items-center gap-8" aria-label="Audience">
        {audiences.map((label, i) => (
          <a
            key={label}
            href="#"
            className={`relative flex h-full items-center text-sm ${
              i === 0 ? "font-semibold after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-white" : "text-white/90 hover:text-white"
            }`}
          >
            {label.replace("For ", "For ")}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Header;
