import { ArrowRight } from "lucide-react";

export default function MicrosoftPartner() {
  return (
    <section className="bg-skyblue pt-24">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-dark">
            Cloud security
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-snug text-navy sm:text-4xl">
            Built for modern Microsoft security estates
          </h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-muted">
            Our engineers help teams get more value from Microsoft Defender,
            Sentinel, Entra, and Purview while aligning detection, identity,
            compliance, and response workflows.
          </p>
          <a
            href="#"
            className="button-focus mt-7 inline-flex items-center gap-2 rounded-sm bg-purple px-6 py-3 text-sm font-semibold text-gallery transition-colors hover:bg-purple-dark"
          >
            Explore Microsoft Services
            <ArrowRight size={16} />
          </a>

          <div className="mt-8 inline-flex rounded-sm border border-navy/10 bg-gallery px-4 py-3 text-xs font-semibold text-navy shadow-sm">
            Member of the Microsoft Intelligent Security Association
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="rounded-sm bg-gallery p-7 shadow-sm">
            <p className="flex items-center gap-2 text-lg font-bold text-navy">
              <span className="grid grid-cols-2 gap-0.5">
                <span className="h-3 w-3 bg-purple" />
                <span className="h-3 w-3 bg-teal" />
                <span className="h-3 w-3 bg-gallery" />
                <span className="h-3 w-3 bg-navy" />
              </span>
              Microsoft
            </p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-muted">
              Solutions partner
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              <li>Security</li>
              <li>Cloud Security</li>
              <li>Identity and Access Management</li>
              <li>Threat Protection</li>
            </ul>
          </div>

          <div className="flex flex-col justify-between rounded-sm bg-navy p-7 text-gallery shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">
              Security adoption
            </p>
            <p className="mt-2 text-2xl font-bold leading-tight">
              Detection engineering,
              <br />
              tuned for action
            </p>
            <p className="mt-4 text-xs leading-5 text-gallery/70">
              Sentinel use cases, Defender hardening, identity controls, and
              executive reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
