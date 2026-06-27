import { ArrowRight, RadioTower, Users } from "lucide-react";

export default function SpeakToTeam() {
  return (
    <section className="bg-gallery pb-24 pt-20">
      <div className="container-x">
        <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center py-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-dark">
              Contact
            </p>
            <h2 className="mt-3 text-4xl font-bold text-navy sm:text-5xl">
              Speak to our Team
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-muted">
              Start with a focused conversation about your cyber resilience,
              response readiness, compliance pressure, or security operations
              maturity.
            </p>
            <a
              href="#"
              className="button-focus mt-8 inline-flex w-fit items-center gap-2 rounded-sm bg-navy px-8 py-4 text-sm font-semibold text-gallery transition-colors hover:bg-navy-deep"
            >
              Speak to us <ArrowRight size={16} />
            </a>
          </div>

          <div
            className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-sm bg-navy"
            style={{
              backgroundImage:
                "linear-gradient(145deg, rgba(8,21,40,0.2), rgba(8,21,40,0.86)), radial-gradient(circle at 25% 20%, rgba(1,246,247,0.32), transparent 50%), radial-gradient(circle at 80% 85%, rgba(110,41,246,0.48), transparent 55%)",
            }}
          >
            <div className="absolute inset-8 rounded-sm border border-gallery/12" />
            <div className="relative flex flex-col items-center gap-4 text-gallery/75">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-teal/40 bg-teal/10">
                <Users size={34} className="text-teal" />
              </div>
              <div className="flex items-center gap-2 rounded-sm bg-gallery/10 px-4 py-2 text-sm font-semibold">
                <RadioTower size={16} className="text-purple" />
                Response desk online
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
