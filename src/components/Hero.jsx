import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { heroSlides } from "../data/data";

const themes = {
  dark: "bg-night text-white",
  peach: "bg-peach text-ink",
  light: "bg-tint text-ink",
};

const Hero = () => {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = trackRef.current;
    const slide = el.firstElementChild.offsetWidth + 24;
    setActive(Math.round(el.scrollLeft / slide));
  };

  const next = () => {
    const el = trackRef.current;
    el.scrollBy({ left: el.firstElementChild.offsetWidth + 24, behavior: "smooth" });
  };

  const goTo = (i) => {
    const el = trackRef.current;
    el.scrollTo({ left: i * (el.firstElementChild.offsetWidth + 24), behavior: "smooth" });
  };

  return (
    <section className="page-wrap pt-3">
      <div className="relative">
        <div ref={trackRef} onScroll={onScroll} className="scroll-x gap-6">
          {heroSlides.map((s) => (
            <article key={s.id} className={`relative flex h-[17rem] basis-[92%] items-center overflow-hidden rounded-panel p-6 sm:h-[17.5rem] md:basis-[48%] ${themes[s.theme]}`}>
              <div className="z-10 max-w-[55%]">
                {s.brand && (
                  <p className="mb-3 flex items-center gap-2 text-md font-semibold">
                    <span className="grid size-5 grid-cols-2 gap-px">
                      <i className="bg-[#f25022]" /><i className="bg-[#7fba00]" /><i className="bg-[#00a4ef]" /><i className="bg-[#ffb900]" />
                    </span>
                    {s.brand}
                  </p>
                )}
                <h2 className="text-3xl font-bold leading-tight">{s.title}</h2>
                <p className={`mt-3 text-sm ${s.theme === "dark" ? "text-white" : "text-ink"}`}>{s.text}</p>
                <Link
                  to={s.to}
                  className={`btn mt-5 ${s.theme === "dark" ? "border border-brand bg-white text-brand hover:bg-tint" : "btn-primary"}`}
                >
                  {s.cta}
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="absolute inset-y-0 right-0 w-[45%]">
                <div className={`absolute -right-6 top-6 size-[17rem] rounded-full ${s.theme === "dark" ? "bg-gradient-to-br from-sun via-[#5b3fd0] to-brand" : "bg-white/60"}`} />
                <img src={s.image} alt="" className="absolute bottom-0 right-4 h-[88%] w-[78%] rounded-t-[8rem] object-cover" />
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white shadow"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="mt-3 flex gap-1.5" role="tablist">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full ${active === i ? "w-5 bg-ink" : "w-2 bg-muted/60"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
