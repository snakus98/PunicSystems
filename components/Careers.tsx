import { ArrowRight } from "lucide-react";

export default function Careers() {
  return (
    <section
      className="relative overflow-hidden bg-navy text-gallery"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(8,21,40,0.94), rgba(8,21,40,0.72)), radial-gradient(circle at 85% 50%, rgba(110,41,246,0.42), transparent 42%), radial-gradient(circle at 62% 92%, rgba(1,246,247,0.24), transparent 48%)",
      }}
    >
      <div className="tech-grid absolute inset-0 opacity-45" />
      <div className="container-x relative z-10 grid grid-cols-1 items-center gap-10 py-24 lg:grid-cols-[0.72fr_0.28fr]">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
            Careers
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gallery sm:text-4xl">
            Be a Critical Part of our Team
          </h2>
          <p className="mt-5 text-base leading-8 text-gallery/78">
            Join a team that protects essential services, supports calm incident
            response, and turns security complexity into work people can act on.
          </p>
          <a
            href="#"
            className="button-focus mt-8 inline-flex items-center gap-2 rounded-sm bg-purple px-6 py-3 text-sm font-semibold text-gallery transition-colors hover:bg-purple-dark"
          >
            Learn More About our Careers
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="hidden rounded-sm border border-gallery/14 bg-gallery/8 p-6 lg:block">
          <p className="text-5xl font-bold text-teal">85%</p>
          <p className="mt-3 text-sm leading-6 text-gallery/70">
            of our consultants work across more than one technical discipline.
          </p>
        </div>
      </div>
    </section>
  );
}
