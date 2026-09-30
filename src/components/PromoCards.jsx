import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { img } from "../data/data";

const PromoCards = () => {
  return (
    <section className="page-wrap section">
      <div className="grid gap-6 md:grid-cols-2">
        <article className="relative flex h-44 overflow-hidden rounded-panel bg-brand p-6 text-white">
          <div className="z-10 max-w-[55%]">
            <p className="text-2xl font-bold tracking-tight">
              coursera <span className="rounded-[3px] bg-white px-1.5 text-xs font-bold text-brand">PLUS</span>
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-snug">Unlock 10,000+ courses with a subscription</h3>
            <Link to="/careers/coursera-plus" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline">
              Start 7-day free trial
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 w-[42%]">
            <div className="absolute -top-2 right-16 h-[9rem] w-[7rem] rotate-12 rounded-tl-[3rem] bg-gradient-to-br from-[#ff6fb5] to-sun" />
            <img src={img("plus-learner", 300, 320)} alt="" className="absolute bottom-0 right-4 h-[85%] w-[70%] rounded-t-[6rem] object-cover" />
          </div>
        </article>

        <article className="relative flex h-44 overflow-hidden rounded-panel bg-navy p-6 text-white">
          <div className="z-10 max-w-[55%]">
            <p className="text-xl">
              <span className="font-bold">coursera</span> <span className="font-light">for business</span>
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-snug">Drive your business forward and empower your teams</h3>
            <Link to="/careers/coursera-for-business" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline">
              Try Coursera for Business
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 w-[45%]">
            <div className="absolute inset-y-0 right-0 w-[80%] bg-white/95 [clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)]" />
            <img src={img("business-team", 300, 320)} alt="" className="absolute bottom-0 right-4 h-[90%] w-[65%] rounded-t-[6rem] object-cover" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default PromoCards;
