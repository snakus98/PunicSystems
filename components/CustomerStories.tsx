"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const STORIES = [
  {
    company: "MetroGrid Utilities",
    role: "Head of Cyber Resilience",
    quote:
      "Punic helped us turn a complex security programme into a clear operating model that our technical and executive teams could trust.",
  },
  {
    company: "Harbourline Transport",
    role: "Lead Security Operations Analyst",
    quote:
      "The engagement gave us daily visibility, practical remediation steps, and a better understanding of where attackers would move next.",
  },
  {
    company: "Northstar Health",
    role: "Director of Infrastructure",
    quote:
      "Their specialists combined technical depth with calm incident leadership when the business needed decisions quickly.",
  },
];

export default function CustomerStories() {
  const [i, setI] = useState(0);
  const story = STORIES[i];
  const prev = () => setI((v) => (v - 1 + STORIES.length) % STORIES.length);
  const next = () => setI((v) => (v + 1) % STORIES.length);

  return (
    <section className="bg-gallery py-24">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-dark">
              Client outcomes
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-snug text-navy sm:text-4xl">
              Trusted by organisations protecting what matters most
            </h2>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous"
                className="button-focus flex h-10 w-10 items-center justify-center rounded-sm border border-navy/20 text-navy transition-colors hover:border-purple hover:text-purple"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="button-focus flex h-10 w-10 items-center justify-center rounded-sm border border-navy/20 text-navy transition-colors hover:border-purple hover:text-purple"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <a
              href="#"
              className="flex items-center gap-1 text-sm font-semibold text-purple hover:underline"
            >
              All Customer Stories <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-sm border border-navy/10 shadow-xl shadow-navy/10 md:grid-cols-[1.05fr_0.95fr]">
          <div
            className="relative min-h-[320px] bg-navy"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(8,21,40,0.2), rgba(8,21,40,0.9)), radial-gradient(circle at 30% 40%, rgba(1,246,247,0.38), transparent 45%), radial-gradient(circle at 80% 70%, rgba(110,41,246,0.28), transparent 48%)",
            }}
          >
            <div className="absolute inset-x-8 bottom-8 rounded-sm border border-gallery/14 bg-gallery/10 p-5 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
                Case study
              </p>
              <p className="mt-2 max-w-sm text-2xl font-bold leading-tight text-gallery">
                Security maturity without slowing operations
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-gallery p-8 sm:p-10">
            <p className="text-2xl font-bold text-navy">{story.company}</p>
            {story.role && (
              <p className="mt-1 text-sm font-semibold text-teal-dark">
                {story.role}
              </p>
            )}
            <p className="mt-5 text-xl font-semibold leading-8 text-navy">
              "{story.quote}"
            </p>
            <a
              href="#"
              className="button-focus mt-8 inline-flex w-fit items-center gap-2 rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-gallery transition-colors hover:bg-navy-deep"
            >
              Read their story <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
