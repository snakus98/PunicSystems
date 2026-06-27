import { ArrowRight, Award } from "lucide-react";

const AWARDS = [
  "Security operations excellence",
  "Cloud resilience finalist",
  "Incident response leader",
];

export default function Awards() {
  return (
    <section className="bg-skyblue pb-24 pt-16">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="grid grid-cols-3 gap-4">
          {AWARDS.map((label, index) => (
            <div
              key={label}
              className={`flex aspect-square flex-col items-center justify-center gap-3 rounded-sm p-4 text-center text-gallery shadow-sm ${
                index === 1 ? "bg-purple" : "bg-navy"
              }`}
            >
              <Award size={30} className={index === 1 ? "text-gallery" : "text-teal"} />
              <span className="text-[11px] font-semibold leading-tight text-gallery/84">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-dark">
            Recognition
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-snug text-navy sm:text-4xl">
            Award-winning Services and People
          </h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-muted">
            Our people are recognised for calm response leadership, rigorous
            assurance, and security programmes that stand up in live operations.
          </p>
          <a
            href="#"
            className="button-focus mt-7 inline-flex items-center gap-2 rounded-sm bg-purple px-6 py-3 text-sm font-semibold text-gallery transition-colors hover:bg-purple-dark"
          >
            View All Awards and Recognitions
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
