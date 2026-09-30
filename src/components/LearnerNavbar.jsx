import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Bell,
  ChevronDown,
  CircleHelp,
  Globe,
  LayoutGrid,
  Search,
} from "lucide-react";
import ExploreMenu from "./ExploreMenu";
import { useAuth } from "../context/AuthContext";
import { slugify } from "../data/data";

const LearnerNavbar = () => {
  const { user, logout } = useAuth();
  const [explore, setExplore] = useState(false);
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setExplore(false);
    setMenu(false);
  }, [pathname]);

  const submit = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/careers/${slugify(query)}`);
  };

  const signOut = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="relative z-40 border-b border-white/15 bg-black text-white">
      <div className="relative z-50 flex h-16 items-center gap-5 px-6">
        <button type="button" aria-label="Apps">
          <LayoutGrid size={22} />
        </button>

        <Link
          to="/"
          className="flex h-10 items-center rounded-control bg-white px-3 text-xl font-bold tracking-tight text-brand"
        >
          coursera
        </Link>

        <button
          type="button"
          onClick={() => setExplore((v) => !v)}
          aria-expanded={explore}
          className="flex items-center gap-1 text-sm font-semibold text-white/80 hover:text-white"
        >
          Explore
          <ChevronDown size={16} className={explore ? "rotate-180" : ""} />
        </button>

        <NavLink
          to="/my-learning"
          className={({ isActive }) =>
            `text-sm font-semibold ${isActive ? "text-white" : "text-white/80 hover:text-white"}`
          }
        >
          My Learning
        </NavLink>

        <form
          onSubmit={submit}
          className="mx-2 flex h-11 max-w-xl flex-1 items-center gap-3 rounded-pill border border-white/25 bg-black pl-1.5 pr-1 focus-within:border-white/60"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand text-sm font-bold text-white">
            C
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Coursera"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/60"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex size-9 items-center justify-center rounded-full bg-[#2a73ff] text-white"
          >
            <Search size={16} />
          </button>
        </form>

        <div className="ml-auto flex items-center gap-5">
          <button type="button" aria-label="Help">
            <CircleHelp size={22} />
          </button>
          <button type="button" aria-label="Language">
            <Globe size={22} />
          </button>
          <button type="button" aria-label="Notifications">
            <Bell size={22} />
          </button>
          <div className="relative">
            <button
              type="button"
              onClick={() => setMenu((v) => !v)}
              aria-label="Account"
              className="grid size-8 place-items-center rounded-full bg-[#dbe7ff] text-sm font-bold text-black"
            >
              {user.name.charAt(0).toUpperCase()}
            </button>
            {menu && (
              <div className="absolute right-0 top-11 w-60 rounded-card bg-white p-2 text-ink shadow-xl">
                <p className="truncate px-3 py-2 text-sm text-muted">
                  {user.email}
                </p>
                <Link
                  to="/my-learning"
                  className="block rounded-control px-3 py-2 text-sm hover:bg-tint"
                >
                  My Learning
                </Link>
                <button
                  type="button"
                  onClick={signOut}
                  className="block w-full rounded-control px-3 py-2 text-left text-sm hover:bg-tint"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <ExploreMenu open={explore} onClose={() => setExplore(false)} />
    </div>
  );
};

export default LearnerNavbar;
