import Image from "next/image";

type Logo = { label: string; img?: string };

const LOGOS: Logo[] = [
  { label: "ISO 27001", img: "/logos/iso27001.png" },
  { label: "SOC 2", img: "/logos/soc2.svg" },
  { label: "NIS2", img: "/logos/nis2.svg" },
  { label: "GDPR", img: "/logos/gdpr.svg" },
  { label: "CREST" },
  { label: "NCSC" },
  { label: "Cyber Essentials" },
  { label: "Top MSSP" },
];

function Badge({ logo, index }: { logo: Logo; index: number }) {
  if (logo.img) {
    return (
      <div className="relative mx-7 h-20 w-48 shrink-0">
        <Image
          src={logo.img}
          alt={logo.label}
          fill
          sizes="192px"
          unoptimized
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div className="mx-6 flex h-20 shrink-0 items-center gap-2 whitespace-nowrap text-[12px] font-extrabold uppercase tracking-wide text-navy">
      <span
        className={`h-2 w-2 shrink-0 rounded-full ${
          index % 2 === 0 ? "bg-teal" : "bg-purple"
        }`}
      />
      {logo.label}
    </div>
  );
}

export default function AccreditationStrip() {
  return (
    <div className="relative z-20 -mt-32">
      <div className="container-x">
        <div className="flex flex-col items-stretch gap-5 rounded-lg border border-navy/10 bg-white px-6 py-5 shadow-2xl md:flex-row md:items-center md:gap-6">
          <p className="shrink-0 text-xs font-semibold uppercase leading-snug tracking-[0.16em] text-muted md:max-w-[180px]">
            Recognised by Leading Accreditation and Awarding Bodies
          </p>

          {/* Vertical divider */}
          <div className="hidden w-px self-stretch bg-navy/12 md:block" />

          {/* Cards scrolling right -> left */}
          <div className="marquee-mask marquee-pause relative w-full flex-1 overflow-hidden">
            <div className="marquee-track">
              {LOGOS.map((logo, i) => (
                <Badge key={`a-${logo.label}`} logo={logo} index={i} />
              ))}
              {LOGOS.map((logo, i) => (
                <Badge key={`b-${logo.label}`} logo={logo} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
