import type { ReactNode } from "react";

export type Framework = {
  name: string;
  subtitle: string;
  tile: string;
  mark: ReactNode;
};

/* Ring of twelve stars used by the EU instruments (GDPR, NIS2, DORA, AI Act). */
function EuStars({ r = 19, cx = 32, cy = 32 }: { r?: number; cx?: number; cy?: number }) {
  return (
    <g fill="#01f6f7">
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
        return (
          <circle key={i} cx={cx + r * Math.cos(a)} cy={cy + r * Math.sin(a)} r="1.9" />
        );
      })}
    </g>
  );
}

function EuLabel({ children }: { children: ReactNode }) {
  return (
    <text
      x="32"
      y="37"
      textAnchor="middle"
      fontSize="14"
      fontWeight="800"
      fill="#eaeaea"
      style={{ font: "800 14px var(--font-sans)" }}
    >
      {children}
    </text>
  );
}

const stroke = {
  fill: "none",
  stroke: "#eaeaea",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const FRAMEWORKS: Framework[] = [
  {
    name: "ISO/IEC 27001",
    subtitle: "Information Security",
    tile: "#081528",
    mark: (
      <>
        <path d="M32 15l13 5v11c0 8.6-5.5 15.2-13 18-7.5-2.8-13-9.4-13-18V20l13-5z" {...stroke} />
        <rect x="26.5" y="31" width="11" height="9" rx="1.8" {...stroke} />
        <path d="M28.8 31v-2.6a3.2 3.2 0 016.4 0V31" {...stroke} />
      </>
    ),
  },
  {
    name: "ISO/IEC 42001",
    subtitle: "AI Management",
    tile: "#6e29f6",
    mark: (
      <>
        <rect x="22" y="22" width="20" height="20" rx="4" {...stroke} />
        <path d="M27 18v4M32 18v4M37 18v4M27 42v4M32 42v4M37 42v4M18 27h4M18 32h4M18 37h4M42 27h4M42 32h4M42 37h4" {...stroke} />
        <path d="M29 37l3-10 3 10M30 33.6h4" {...stroke} strokeWidth={2.1} />
      </>
    ),
  },
  {
    name: "ISO/IEC 27701",
    subtitle: "Privacy Information",
    tile: "#6e29f6",
    mark: (
      <>
        <path d="M32 15l13 5v11c0 8.6-5.5 15.2-13 18-7.5-2.8-13-9.4-13-18V20l13-5z" {...stroke} />
        <circle cx="32" cy="29" r="4.1" {...stroke} />
        <path d="M24.6 41.5a7.8 7.8 0 0114.8 0" {...stroke} />
      </>
    ),
  },
  {
    name: "ISO 22301",
    subtitle: "Business Continuity",
    tile: "#081528",
    mark: (
      <>
        <path d="M46 32a14 14 0 11-4.3-10.1" {...stroke} />
        <path d="M42 14.5V22h-7.5" {...stroke} />
        <path d="M32 24v8.6l6 3.4" {...stroke} />
      </>
    ),
  },
  {
    name: "ISO 37301",
    subtitle: "Compliance Management",
    tile: "#6e29f6",
    mark: (
      <>
        <rect x="20" y="17" width="24" height="30" rx="3.6" {...stroke} />
        <path d="M26 26h12M26 32h12M26 38h7" {...stroke} />
        <circle cx="40.5" cy="40.5" r="7.5" fill="#6e29f6" stroke="#eaeaea" strokeWidth={2.4} />
        <path d="M37.2 40.6l2.4 2.4 4.4-4.6" {...stroke} strokeWidth={2.2} />
      </>
    ),
  },
  {
    name: "ISO 31000",
    subtitle: "Risk Management",
    tile: "#081528",
    mark: (
      <>
        <path d="M18 42a14 14 0 1128 0" {...stroke} />
        <path d="M32 42l8.5-9.5" {...stroke} />
        <circle cx="32" cy="42" r="2.6" fill="#01f6f7" stroke="none" />
        <path d="M18 42h4M42 42h4M21.5 30.5l2.6 2M42.5 30.5l-2.6 2" {...stroke} />
      </>
    ),
  },
  {
    name: "GDPR",
    subtitle: "Data Protection",
    tile: "#081528",
    mark: (
      <>
        <EuStars />
        <rect x="26" y="31" width="12" height="10" rx="2" fill="#eaeaea" />
        <path d="M28.6 31v-2.9a3.4 3.4 0 016.8 0V31" {...stroke} />
        <circle cx="32" cy="36" r="1.6" fill="#081528" />
      </>
    ),
  },
  {
    name: "NIS2",
    subtitle: "EU Directive",
    tile: "#081528",
    mark: (
      <>
        <EuStars />
        <EuLabel>N2</EuLabel>
      </>
    ),
  },
  {
    name: "DORA",
    subtitle: "Digital Resilience",
    tile: "#081528",
    mark: (
      <>
        <EuStars />
        <path d="M40 32a8 8 0 11-2.5-5.8" {...stroke} strokeWidth={2.6} />
        <path d="M38.4 22.6V27h-4.4" {...stroke} strokeWidth={2.6} />
      </>
    ),
  },
  {
    name: "EU AI Act",
    subtitle: "AI Regulation",
    tile: "#081528",
    mark: (
      <>
        <EuStars />
        <EuLabel>AI</EuLabel>
      </>
    ),
  },
];

export function FrameworkBadge({ framework }: { framework: Framework }) {
  return (
    <div className="flex shrink-0 items-center gap-3.5">
      <span
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
        style={{ backgroundColor: framework.tile }}
      >
        <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden>
          {framework.mark}
        </svg>
      </span>
      <span className="whitespace-nowrap">
        <span className="block text-[19px] font-bold leading-none tracking-[-0.01em] text-navy">
          {framework.name}
        </span>
        <span className="mt-1.5 block text-[9.5px] font-bold uppercase leading-none tracking-[0.14em] text-purple">
          {framework.subtitle}
        </span>
      </span>
    </div>
  );
}
