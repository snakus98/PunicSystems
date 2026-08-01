import { FRAMEWORKS, FrameworkBadge } from "@/components/FrameworkLogos";

export default function AccreditationStrip() {
  return (
    <div className="relative z-20 -mt-32">
      <div className="container-x">
        <div className="flex flex-col items-stretch gap-5 rounded-lg border border-navy/10 bg-white px-6 py-6 shadow-2xl md:flex-row md:items-center md:gap-6">
          <p className="shrink-0 text-xs font-semibold uppercase leading-snug tracking-[0.16em] text-muted md:max-w-[150px]">
            Frameworks We Support
          </p>

          {/* Vertical divider */}
          <div className="hidden w-px self-stretch bg-navy/12 md:block" />

          {/* Cards scrolling right -> left */}
          <div className="marquee-mask marquee-pause relative w-full flex-1 overflow-hidden">
            <div className="marquee-track">
              {FRAMEWORKS.map((framework) => (
                <div key={`a-${framework.name}`} className="mx-7">
                  <FrameworkBadge framework={framework} />
                </div>
              ))}
              {FRAMEWORKS.map((framework) => (
                <div key={`b-${framework.name}`} className="mx-7">
                  <FrameworkBadge framework={framework} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
