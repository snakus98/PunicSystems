import {
  Plane,
  Zap,
  Landmark,
  Building2,
  TrainFront,
  Droplets,
  ArrowRight,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

const INDUSTRIES: { icon: LucideIcon; name: string }[] = [
  { icon: Plane, name: "Aviation" },
  { icon: Zap, name: "Energy" },
  { icon: Landmark, name: "Finance" },
  { icon: Building2, name: "Government" },
  { icon: TrainFront, name: "Transport" },
  { icon: Droplets, name: "Water" },
];

export default function Industries() {
  return (
    <section className="bg-gallery pb-24">
      <div className="container-x">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-dark">
              Sectors
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Industries we Specialise in
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-muted">
              We support essential services and regulated organisations where
              resilience, compliance, and speed of response matter equally.
            </p>
          </div>
          <a
            href="#"
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-purple hover:underline"
          >
            View All Industries <ArrowRight size={15} />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map(({ icon: Icon, name }) => (
            <a
              key={name}
              href="#"
              className="group flex min-h-36 items-center justify-between rounded-sm border border-navy/10 bg-gallery p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-teal/50 hover:shadow-lg"
            >
              <div className="flex items-center gap-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-sm bg-teal/10 text-teal">
                  <Icon size={24} />
                </span>
                <span className="text-lg font-bold text-navy">{name}</span>
              </div>
              <ChevronRight
                size={18}
                className="text-teal transition-transform group-hover:translate-x-1"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
