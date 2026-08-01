import Image from "next/image";
import {
  CircleX,
  ClipboardCheck,
  ClipboardList,
  Crosshair,
  Database,
  FileText,
  IdCard,
  Lock,
  LockKeyhole,
  MessageSquareMore,
  ShieldCheck,
  SquarePen,
  TriangleAlert,
  UserRound,
  UsersRound,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

export const metadata = {
  title: "Strengthening Data Protection Governance | Punic Systems",
  description:
    "How Punic Systems helped strengthen data protection governance for an organization supporting women in Tunisia.",
};

const APPROACH_CARDS = [
  {
    number: "01",
    title: "Data Protection Training",
    description:
      "We designed and delivered practical workshops for both civil society organizations and public sector stakeholders, covering:",
    bullets: [
      "GDPR principles and obligations",
      "Tunisian Organic Law No. 2004-63",
      "Roles and responsibilities when processing personal data",
      "Practical guidance for handling sensitive information securely",
    ],
    footer:
      "The objective was to translate legal requirements into day-to-day operational practices.",
    accent: "#5b32f2",
    soft: "#f0ecff",
    icon: UsersRound,
  },
  {
    number: "02",
    title: "Compliance Assessment",
    description:
      "We conducted a structured assessment of the organization’s existing data protection framework to evaluate:",
    bullets: [
      "Governance arrangements",
      "Data processing activities",
      "Internal procedures",
      "Organizational responsibilities",
      "Compliance gaps",
    ],
    footer:
      "Based on our findings, we developed prioritized recommendations tailored to the operational realities of the civil society sector.",
    accent: "#365ad9",
    soft: "#edf2ff",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Data Governance Framework",
    description:
      "To support long-term compliance, we developed a comprehensive data protection procedures manual covering:",
    bullets: [
      "Personal data lifecycle management",
      "Access control responsibilities",
      "Confidentiality requirements",
      "Incident reporting",
      "Data retention",
      "Secure handling of sensitive information",
      "Internal governance processes",
    ],
    footer:
      "The framework was designed to be practical, sustainable, and adaptable as the organization evolves.",
    accent: "#0096a4",
    soft: "#e9f8f8",
    icon: FileText,
  },
];

/* ===== DPIA sections (Article 35) ===== */

const DP = {
  purple: "#7c3aed",
  label: "#6d28f0",
  indigo: "#4f46e5",
  teal: "#0ea5a9",
  blue: "#2f6bff",
  title: "#16192e",
  body: "#4a4f68",
  purpleBg: "#efeafe",
  indigoBg: "#e9edfd",
  tealBg: "#dff4f4",
  border: "#e7e9f2",
};

const DPIA_STEPS = [
  {
    badge: "01 / Context",
    icon: ClipboardList,
    color: DP.purple,
    bg: DP.purpleBg,
    title: "Map the processing",
    text: "Catalogue every category of personal data collected — identity, health, violence accounts, perpetrator data — who accesses it, and how it moves through intake, casework, and referral.",
  },
  {
    badge: "02 / Principles",
    icon: ShieldCheck,
    color: DP.teal,
    bg: DP.tealBg,
    title: "Test against GDPR",
    text: "Evaluate legal basis, necessity, proportionality, minimization, and retention for each processing activity against Articles 5, 6, and 9.",
  },
  {
    badge: "03 / Rights",
    icon: UserRound,
    color: DP.purple,
    bg: DP.purpleBg,
    lockOverlay: true,
    title: "Check data subject rights",
    text: "Assess whether consent, access, rectification, erasure, restriction, objection, and portability can actually be exercised — plus subprocessor terms under Article 28.",
  },
  {
    badge: "04 / Security",
    icon: LockKeyhole,
    color: DP.teal,
    bg: DP.tealBg,
    title: "Model the risk",
    text: "Score realistic threat scenarios — illegitimate access, unauthorized modification, data loss — for severity and likelihood, before and after mitigation.",
  },
];

const CASE_FLOW = [
  {
    num: "01",
    icon: IdCard,
    color: DP.purple,
    bg: DP.purpleBg,
    title: "Intake",
    text: "Identity, contact, initial situation",
  },
  {
    num: "02",
    icon: MessageSquareMore,
    color: DP.purple,
    bg: DP.purpleBg,
    title: "Listening & assessment",
    text: "Sensitive detail intake",
  },
  {
    num: "03",
    icon: FileText,
    color: DP.purple,
    bg: DP.purpleBg,
    title: "Case reports",
    text: "Social, legal & psychological notes",
  },
  {
    num: "04",
    icon: UsersRound,
    color: DP.teal,
    bg: DP.tealBg,
    title: "Referral",
    text: "To legal, medical & institutional partners",
  },
];

const MATRIX_CELLS = [
  ["#ffdfae", "#ffd39b", "#ffb3a6", "#ffb3a6"],
  ["#c9ecd2", "#ffe9ad", "#ffd39b", "#ffb3a6"],
  ["#b9e7c8", "#e3f0b6", "#ffe9ad", "#ffd39b"],
  ["#b9e7c8", "#c9ecd2", "#e3f0b6", "#ffd39b"],
];

const RISK_ROWS = [
  { num: 1, name: "Illegitimate access to case files", before: "Maximal", after: "Important" },
  { num: 2, name: "Loss or destruction of records", before: "Maximal", after: "Important" },
  { num: 3, name: "Unauthorized data modification", before: "Important", after: "Limited" },
];

const RISK_LEGEND = [
  { color: DP.purple, label: "Illegitimate access — before → after" },
  { color: DP.teal, label: "Data loss — before → after" },
  { color: DP.blue, label: "Unauthorized modification — before → after" },
];

const ROADMAP_TRACKS = [
  {
    icon: ShieldCheck,
    color: DP.purple,
    bg: DP.purpleBg,
    title: "Governance & compliance",
    items: [
      "Register of processing activities",
      "Internal data protection policy",
      "Defined retention schedules",
      "Signed confidentiality charter",
    ],
  },
  {
    icon: UsersRound,
    color: DP.indigo,
    bg: DP.indigoBg,
    title: "Organizational measures",
    items: [
      "Written, signed consent forms",
      "Plain-language privacy notice",
      "Data-subject-rights process",
      "Annual staff training",
    ],
  },
  {
    icon: LockKeyhole,
    color: DP.teal,
    bg: DP.tealBg,
    title: "Technical measures",
    items: [
      "Role-based access + MFA",
      "Encryption & pseudonymization",
      "Local + encrypted cloud backups",
      "Locked storage, secure disposal",
    ],
  },
  {
    icon: TriangleAlert,
    color: DP.teal,
    bg: DP.tealBg,
    title: "Risk & incident management",
    items: [
      "72-hour breach response plan",
      "Annual compliance audit",
      "Privacy by design for new tools",
      "Yearly DPIA re-assessment",
    ],
  },
];

const OUTCOME_BARS = [
  {
    icon: Lock,
    color: DP.purple,
    bg: DP.purpleBg,
    xOverlay: false,
    title: "Illegitimate access",
    purple: 50,
    teal: 16,
    from: "Maximal",
    to: "Important",
  },
  {
    icon: Database,
    color: DP.purple,
    bg: DP.purpleBg,
    xOverlay: true,
    title: "Data loss",
    purple: 50,
    teal: 16,
    from: "Maximal",
    to: "Important",
  },
  {
    icon: SquarePen,
    color: DP.teal,
    bg: DP.tealBg,
    xOverlay: false,
    title: "Unauthorized modification",
    purple: 34,
    teal: 16,
    from: "Important",
    to: "Limited",
  },
];

function DotGrid({ className }: { className: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      style={{
        backgroundImage: "radial-gradient(circle, #c9cdde 2px, transparent 2.5px)",
        backgroundSize: "18px 18px",
      }}
    />
  );
}

function DpiaHeader({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <p className="text-[13px] font-extrabold uppercase tracking-[0.2em]" style={{ color: DP.label }}>
        {label}
      </p>
      <span className="mt-2.5 block h-[3px] w-11 rounded-full" style={{ backgroundColor: DP.label }} />
      <h2
        className="mt-6 text-[clamp(1.75rem,3.4vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.03em]"
        style={{ color: DP.title }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function ProjectOnePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f9faff]">
      <TopBar />
      <Header />

      <section className="relative isolate min-h-[calc(100vh-7.5rem)] overflow-hidden">
        <div className="project-image-halo absolute inset-y-0 right-0 -z-20 hidden w-[58%] bg-[#dfe9f1]/70 lg:block" />
        <div className="project-image-mask absolute inset-y-0 right-0 -z-10 hidden w-[56%] lg:block">
          <Image
            src="/banban.png"
            alt="Three women overlooking a Tunisian city"
            fill
            priority
            sizes="56vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple/30" />
        </div>

        <div className="project-purple-glow absolute -bottom-[22rem] -right-[14rem] -z-10 hidden h-[52rem] w-[52rem] rounded-full lg:block" />
        <div className="project-orbit absolute -right-[12.5rem] top-[8.5rem] -z-[5] hidden h-[34rem] w-[34rem] rounded-full lg:block" />
        <div className="project-dot-grid absolute right-[14%] top-5 hidden h-16 w-20 opacity-70 lg:block" />
        <div className="project-image-fade-dots absolute bottom-[7%] right-[39%] -z-[5] hidden h-44 w-32 opacity-45 lg:block" />

        <div className="relative h-64 w-full lg:hidden sm:h-80">
          <Image
            src="/banban.png"
            alt="Three women overlooking a Tunisian city"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f9faff] via-transparent to-transparent" />
        </div>

        <div className="w-full px-[clamp(1.25rem,4.4vw,3.75rem)] py-12 sm:py-16 lg:py-11">
          <div className="max-w-[762px]">
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-purple sm:text-base">
              Case Study
            </p>
            <span className="mt-5 block h-[3px] w-10 rounded-full bg-purple" />

            <h1 className="mt-8 text-[2rem] font-extrabold leading-[1.1] tracking-[-0.035em] text-navy sm:text-[2.7rem] xl:text-[2.88rem]">
              Strengthening Data Protection
              <br className="hidden sm:block" /> Governance for an Organization
              <span className="block text-purple">Supporting Women in Tunisia</span>
            </h1>

            <article className="mt-7 rounded-2xl border border-purple/10 bg-white/92 px-5 py-7 shadow-[0_10px_35px_rgba(31,42,91,0.08)] backdrop-blur-sm sm:px-7 lg:px-6 lg:py-8">
              <div className="grid gap-5 sm:grid-cols-[72px_1fr]">
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#f0edff] text-purple">
                  <Crosshair size={43} strokeWidth={1.8} />
                </div>

                <div className="border-r-[3px] border-purple pr-5 sm:pr-6">
                  <h2 className="text-xl font-extrabold text-purple sm:text-2xl">
                    The Challenge
                  </h2>
                  <div className="mt-3 space-y-5 text-[15px] font-medium leading-[1.55] text-navy sm:text-base">
                    <p>
                      An organization dedicated to the social and economic empowerment
                      of women was processing highly sensitive personal data, including
                      information relating to vulnerable individuals. As the organization
                      expanded its activities with institutional partners, it needed to
                      strengthen its data protection practices, align with applicable legal
                      requirements, and establish a governance framework that protected
                      the rights and privacy of the people it serves.
                    </p>
                    <p>
                      The initiative brought together civil society organizations and
                      representatives from the Ministry of Social Affairs, requiring a
                      common understanding of data protection responsibilities across
                      multiple stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <div className="mt-7">
              <h2 className="text-sm font-extrabold uppercase tracking-[0.08em] text-purple sm:text-base">
                Our Approach
              </h2>
              <span className="mt-3 block h-0.5 w-7 rounded-full bg-purple" />
              <p className="mt-4 max-w-[690px] text-base font-medium leading-7 text-navy sm:text-lg">
                We delivered a comprehensive data protection program combining legal
                expertise, governance, and operational implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[linear-gradient(180deg,#fbfcff_0%,#ffffff_100%)] px-[clamp(1.25rem,3.6vw,3rem)] pb-16 pt-20 lg:pb-20 lg:pt-24">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-3 lg:gap-4">
          {APPROACH_CARDS.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.number}
                className="approach-card relative flex min-h-[500px] flex-col rounded-xl border border-[#e5e8f2] bg-white px-5 pb-2 pt-10 shadow-[0_8px_28px_rgba(44,55,104,0.08)] sm:px-7 lg:min-h-[510px]"
              >
                <div
                  className="absolute -top-7 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-white text-xl font-extrabold"
                  style={{
                    color: card.accent,
                    boxShadow: `0 0 0 6px ${card.soft}`,
                  }}
                >
                  {card.number}
                </div>

                <h2
                  className="text-center text-lg font-extrabold tracking-[-0.02em]"
                  style={{ color: card.accent }}
                >
                  {card.title}
                </h2>
                <span
                  className="mx-auto mt-3 block h-0.5 w-9 rounded-full"
                  style={{ backgroundColor: card.accent }}
                />

                <p className="mt-5 text-[14px] font-medium leading-[1.5] text-navy">
                  {card.description}
                </p>
                <ul className="mt-3 space-y-1.5 text-[14px] font-medium leading-[1.38] text-navy">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="grid grid-cols-[10px_1fr] gap-2.5">
                      <span className="mt-[0.42rem] h-1 w-1 rounded-full" style={{ backgroundColor: card.accent }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-auto grid min-h-[88px] grid-cols-[42px_1fr] items-center gap-3 rounded-lg px-4 py-3"
                  style={{ backgroundColor: card.soft }}
                >
                  <Icon size={35} strokeWidth={1.8} style={{ color: card.accent }} />
                  <p className="text-[12px] font-semibold leading-[1.35] text-navy">
                    {card.footer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ===== DPIA sections ===== */}
      <div className="bg-[#f1f2f8]">
        {/* --- Our Approach : four-part assessment --- */}
        <section className="relative overflow-hidden px-[clamp(1.25rem,4vw,3.5rem)] py-16 lg:py-20">
          <DotGrid className="right-[6%] top-10 hidden h-20 w-24 opacity-70 lg:block" />
          <DotGrid className="bottom-8 left-[3%] hidden h-20 w-28 opacity-60 lg:block" />

          <div className="mx-auto max-w-[1240px]">
            <DpiaHeader label="Our Approach" title="A four-part assessment, per Article 35" />

            <div className="relative mt-20">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  aria-hidden
                  className="absolute top-0 z-20 hidden -translate-y-1/2 items-center xl:flex"
                  style={{
                    left: `calc(${12.5 + i * 25}% + 68px)`,
                    width: "calc(25% - 136px)",
                  }}
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#7c3aed]" />
                  <span className="mx-1.5 flex-1 border-t-2 border-dashed border-[#7c3aed]" />
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#7c3aed]" />
                </div>
              ))}

              <div className="grid gap-x-6 gap-y-16 md:grid-cols-2 xl:grid-cols-4">
                {DPIA_STEPS.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <article
                      key={step.badge}
                      className="relative rounded-2xl bg-white px-6 pb-8 pt-16 text-center shadow-[0_10px_30px_rgba(30,35,80,0.07)]"
                    >
                      <span
                        className="absolute -top-12 left-1/2 z-10 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: step.bg,
                          color: step.color,
                          boxShadow: "0 0 0 10px rgba(255,255,255,0.6)",
                        }}
                      >
                        {step.lockOverlay ? (
                          <span className="relative">
                            <StepIcon size={40} strokeWidth={1.8} />
                            <span
                              className="absolute -bottom-1 -right-2 rounded-full p-[2px]"
                              style={{ backgroundColor: step.bg, color: DP.teal }}
                            >
                              <LockKeyhole size={17} strokeWidth={2.3} />
                            </span>
                          </span>
                        ) : (
                          <StepIcon size={40} strokeWidth={1.8} />
                        )}
                      </span>

                      <span
                        className="inline-block rounded-full px-4 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.08em]"
                        style={{ backgroundColor: "#ece4fd", color: DP.label }}
                      >
                        {step.badge}
                      </span>
                      <span className="mx-auto mt-4 block h-[3px] w-10 rounded-full" style={{ backgroundColor: DP.purple }} />

                      <h3 className="mt-4 text-[21px] font-extrabold tracking-[-0.02em]" style={{ color: DP.title }}>
                        {step.title}
                      </h3>
                      <p className="mt-4 text-[14px] font-medium leading-[1.65]" style={{ color: DP.body }}>
                        {step.text}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* --- Process mapped --- */}
        <section className="relative overflow-hidden px-[clamp(1.25rem,4vw,3.5rem)] py-16 lg:py-20">
          <DotGrid className="right-[4%] top-8 hidden h-16 w-24 opacity-70 lg:block" />
          <DotGrid className="bottom-10 left-[4%] hidden h-16 w-24 opacity-60 lg:block" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-1/3 hidden h-96 w-96 rounded-full border border-dashed border-[#0ea5a9]/25 lg:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 top-[45%] hidden h-56 w-56 rounded-full border border-dashed border-[#7c3aed]/20 lg:block"
          />

          <div className="mx-auto max-w-[1240px]">
            <DpiaHeader label="Process Mapped" title="How a case moves through the center" />
            <p className="mt-5 max-w-[560px] text-[16px] font-medium leading-[1.65]" style={{ color: DP.body }}>
              Every stage where personal data is created, discussed, or shared — the backbone
              of the risk assessment.
            </p>

            <div className="mt-10 rounded-3xl bg-white px-7 py-12 shadow-[0_10px_30px_rgba(30,35,80,0.07)] sm:px-10">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
                {CASE_FLOW.map((stage, i) => {
                  const StageIcon = stage.icon;
                  return (
                    <div key={stage.num} className="contents">
                      {i > 0 && (
                        <div className="hidden flex-1 items-center px-3 pt-[44px] lg:flex">
                          <span className="h-0 flex-1 border-t-[3px] border-dotted border-[#6d28f0]" />
                          <span className="h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-[#6d28f0]" />
                        </div>
                      )}
                      <div className="flex flex-col items-center text-center lg:w-[190px]">
                        <div className="relative">
                          <span
                            className="flex h-24 w-24 items-center justify-center rounded-full"
                            style={{ backgroundColor: stage.bg, color: stage.color }}
                          >
                            <StageIcon size={38} strokeWidth={1.8} />
                          </span>
                          <span
                            className="absolute -bottom-3 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-white text-[13px] font-extrabold shadow-[0_3px_10px_rgba(30,35,80,0.14)]"
                            style={{ color: stage.color }}
                          >
                            {stage.num}
                          </span>
                        </div>
                        <span className="mt-7 h-2 w-2 rounded-full" style={{ backgroundColor: stage.color }} />
                        <h3 className="mt-4 text-[19px] font-extrabold leading-[1.25]" style={{ color: stage.color }}>
                          {stage.title}
                        </h3>
                        <p className="mt-2 text-[14.5px] font-medium leading-[1.55]" style={{ color: DP.body }}>
                          {stage.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* --- Risk matrix --- */}
        <section className="relative overflow-hidden px-[clamp(1.25rem,4vw,3.5rem)] py-16 lg:py-20">
          <DotGrid className="right-[5%] top-8 hidden h-20 w-20 opacity-70 lg:block" />
          <DotGrid className="bottom-16 left-[45%] hidden h-14 w-32 opacity-50 lg:block" />

          <div className="mx-auto max-w-[1240px]">
            <DpiaHeader label="What We Found" title="Three risks, mapped and moved" />
            <p className="mt-4 text-[15.5px] font-medium leading-[1.6]" style={{ color: DP.body }}>
              Severity × likelihood, before mitigation (outlined) and after the proposed
              measures (filled).
            </p>

            <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_1.12fr]">
              {/* Matrix card */}
              <div className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(30,35,80,0.07)] sm:p-7">
                <p
                  className="pl-16 text-[12px] font-extrabold uppercase tracking-[0.18em]"
                  style={{ color: DP.label }}
                >
                  Severity →
                </p>
                <div className="mt-3 flex items-stretch gap-2">
                  <div
                    className="flex items-center text-[11px] font-extrabold uppercase tracking-[0.16em]"
                    style={{ color: DP.label, writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    Likelihood ↑
                  </div>
                  <div className="flex flex-col justify-between py-1 text-right text-[12.5px] font-semibold" style={{ color: "#3f445f" }}>
                    {["MAX", "IMP.", "LIM.", "NEG."].map((l) => (
                      <span key={l} className="flex h-1/4 items-center justify-end pr-1">
                        {l}
                      </span>
                    ))}
                  </div>
                  <div className="relative flex-1">
                    <div className="grid grid-cols-4 gap-1">
                      {MATRIX_CELLS.flat().map((color, i) => (
                        <div key={i} className="aspect-[10/9] rounded-[4px]" style={{ backgroundColor: color }} />
                      ))}
                    </div>
                    <svg
                      aria-hidden
                      viewBox="0 0 400 360"
                      preserveAspectRatio="none"
                      className="absolute inset-0 h-full w-full"
                    >
                      <defs>
                        <marker id="ah-p" markerWidth="9" markerHeight="9" refX="6" refY="4" orient="auto">
                          <path d="M0,0 L8,4 L0,8 z" fill={DP.purple} />
                        </marker>
                        <marker id="ah-t" markerWidth="9" markerHeight="9" refX="6" refY="4" orient="auto">
                          <path d="M0,0 L8,4 L0,8 z" fill={DP.teal} />
                        </marker>
                        <marker id="ah-b" markerWidth="9" markerHeight="9" refX="6" refY="4" orient="auto">
                          <path d="M0,0 L8,4 L0,8 z" fill={DP.blue} />
                        </marker>
                      </defs>
                      <line x1="322" y1="52" x2="264" y2="119" stroke={DP.purple} strokeWidth="2.5" markerEnd="url(#ah-p)" />
                      <line x1="368" y1="44" x2="338" y2="118" stroke={DP.teal} strokeWidth="2.5" markerEnd="url(#ah-t)" />
                      <line x1="240" y1="234" x2="166" y2="269" stroke={DP.blue} strokeWidth="2.5" markerEnd="url(#ah-b)" />

                      <circle cx="330" cy="42" r="11" fill="#ffffff" stroke={DP.purple} strokeWidth="3" />
                      <circle cx="374" cy="34" r="11" fill="#ffffff" stroke={DP.teal} strokeWidth="3" />
                      <circle cx="250" cy="225" r="11" fill="#ffffff" stroke={DP.blue} strokeWidth="3" />
                      <circle cx="250" cy="135" r="12" fill={DP.purple} />
                      <circle cx="330" cy="135" r="12" fill={DP.teal} />
                      <circle cx="150" cy="280" r="12" fill={DP.blue} />
                    </svg>
                    <div className="mt-2 grid grid-cols-4 text-center text-[12.5px] font-semibold" style={{ color: "#3f445f" }}>
                      {["NEG.", "LIM.", "IMP.", "MAX"].map((l) => (
                        <span key={l}>{l}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-7 space-y-3 border-t pt-5" style={{ borderColor: DP.border }}>
                  {RISK_LEGEND.map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5">
                      <span className="h-4 w-4 shrink-0 rounded-full border-[2.5px] bg-white" style={{ borderColor: item.color }} />
                      <span className="relative h-[2px] w-7 shrink-0" style={{ backgroundColor: item.color }}>
                        <span
                          className="absolute -right-1 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[4px] border-l-[6px] border-y-transparent"
                          style={{ borderLeftColor: item.color }}
                        />
                      </span>
                      <span className="h-4 w-4 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-[13.5px] font-semibold" style={{ color: "#3f445f" }}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Before / After table */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(30,35,80,0.07)]">
                <div className="grid h-full grid-cols-[1fr_110px_110px] grid-rows-[auto_1fr_1fr_1fr] sm:grid-cols-[1fr_140px_140px]">
                  <div className="bg-[#f7f8fc] px-6 py-5" />
                  <div className="border-l bg-[#f7f8fc] px-2 py-5 text-center text-[16px] font-extrabold" style={{ borderColor: DP.border, color: DP.purple }}>
                    Before
                  </div>
                  <div className="border-l bg-[#f7f8fc] px-2 py-5 text-center text-[16px] font-extrabold" style={{ borderColor: DP.border, color: DP.teal }}>
                    After
                  </div>

                  {RISK_ROWS.map((row) => (
                    <div key={row.num} className="contents">
                      <div className="flex items-center gap-3.5 border-t px-6 py-8" style={{ borderColor: DP.border }}>
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[14px] font-extrabold"
                          style={{ backgroundColor: DP.purpleBg, color: DP.purple }}
                        >
                          {row.num}
                        </span>
                        <span className="text-[15px] font-extrabold leading-[1.35]" style={{ color: DP.title }}>
                          {row.name}
                        </span>
                      </div>
                      <div className="flex items-center justify-center border-l border-t px-2 py-8 text-[15px] font-bold" style={{ borderColor: DP.border, color: DP.purple }}>
                        {row.before}
                      </div>
                      <div className="flex items-center justify-center border-l border-t px-2 py-8 text-[15px] font-bold" style={{ borderColor: DP.border, color: DP.teal }}>
                        {row.after}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Roadmap --- */}
        <section className="relative overflow-hidden px-[clamp(1.25rem,4vw,3.5rem)] py-16 lg:py-20">
          <DotGrid className="right-[14%] top-10 hidden h-16 w-24 opacity-70 lg:block" />
          <DotGrid className="bottom-10 left-[4%] hidden h-16 w-24 opacity-60 lg:block" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-28 bottom-0 hidden h-80 w-80 rounded-full border border-dashed border-[#9aa2c0]/40 lg:block"
          />

          <div className="mx-auto max-w-[1240px]">
            <DpiaHeader label="The Roadmap" title="A plan across four tracks" />

            <div className="mt-11 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {ROADMAP_TRACKS.map((track) => {
                const TrackIcon = track.icon;
                return (
                  <article
                    key={track.title}
                    className="rounded-2xl bg-white px-7 py-9 shadow-[0_10px_30px_rgba(30,35,80,0.07)]"
                  >
                    <span
                      className="mx-auto flex h-20 w-20 items-center justify-center rounded-full"
                      style={{ backgroundColor: track.bg, color: track.color }}
                    >
                      <TrackIcon size={32} strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-6 text-center text-[19px] font-extrabold tracking-[-0.01em]" style={{ color: track.color }}>
                      {track.title}
                    </h3>
                    <span className="mx-auto mt-3.5 block h-[3px] w-10 rounded-full" style={{ backgroundColor: track.color }} />

                    <ul className="mt-7 space-y-3.5">
                      {track.items.map((item) => (
                        <li key={item} className="grid grid-cols-[12px_1fr] items-start gap-2.5">
                          <span className="mt-[0.5rem] h-[7px] w-[7px] rounded-full" style={{ backgroundColor: track.color }} />
                          <span className="text-[14.5px] font-semibold leading-[1.5]" style={{ color: "#333850" }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Outcome --- */}
        <section className="relative overflow-hidden px-[clamp(1.25rem,4vw,3.5rem)] pb-14 pt-4 lg:pb-16 lg:pt-6">
          <div className="mx-auto max-w-[1240px]">
            <div className="relative overflow-hidden rounded-3xl bg-white px-7 py-10 shadow-[0_10px_30px_rgba(30,35,80,0.07)] sm:px-10 sm:py-12">
              <DotGrid className="right-8 top-8 hidden h-16 w-20 opacity-70 lg:block" />

              <DpiaHeader label="Outcome" title="Every risk out of the red zone" />

              <div className="mt-9 grid gap-9 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-5">
                  {OUTCOME_BARS.map((bar) => {
                    const BarIcon = bar.icon;
                    return (
                      <div
                        key={bar.title}
                        className="rounded-xl border p-5"
                        style={{ borderColor: DP.border }}
                      >
                        <div className="flex items-center gap-4">
                          <span
                            className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                            style={{ backgroundColor: bar.bg, color: bar.color }}
                          >
                            <BarIcon size={24} strokeWidth={1.9} />
                            {bar.xOverlay && (
                              <span
                                className="absolute bottom-1.5 right-1 rounded-full"
                                style={{ backgroundColor: bar.bg, color: bar.color }}
                              >
                                <CircleX size={13} strokeWidth={2.5} />
                              </span>
                            )}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="text-[16px] font-extrabold" style={{ color: DP.title }}>
                              {bar.title}
                            </p>
                            <div className="mt-2.5 flex h-[9px] overflow-hidden rounded-full bg-[#e8eaf2]">
                              <span className="rounded-l-full" style={{ width: `${bar.purple}%`, backgroundColor: DP.purple }} />
                              <span className="rounded-r-full" style={{ width: `${bar.teal}%`, backgroundColor: DP.teal }} />
                            </div>
                            <p className="mt-2.5 text-[15px] font-extrabold">
                              <span style={{ color: DP.purple }}>{bar.from}</span>
                              <span className="mx-1.5 font-bold" style={{ color: "#8a8fa8" }}>
                                →
                              </span>
                              <span style={{ color: DP.teal }}>{bar.to}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div
                  className="space-y-5 text-[15.5px] font-medium leading-[1.75] lg:border-l-[3px] lg:pl-9"
                  style={{ color: "#3f445f", borderColor: DP.purple }}
                >
                  <p>No risk retained a maximal rating after the proposed measures were modeled.</p>
                  <p>
                    The two risks with the highest inherent impact — illegitimate access and
                    data loss — settled at a moderate residual severity, an honest reflection
                    of scenarios where the potential harm stays significant even once
                    mitigations are in place. The rest moved into the{" "}
                    <strong style={{ color: DP.title }}>low-risk range</strong>.
                  </p>
                  <p>
                    More importantly, the organization now has an owner-assigned, sequenced
                    plan for turning protective intent into durable practice.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-center text-[14px] font-semibold" style={{ color: "#3f445f" }}>
              Data Protection Impact Assessment
              <span className="mx-2.5" style={{ color: DP.purple }}>
                •
              </span>
              Conducted under Article 35 of the GDPR
              <span className="mx-2.5" style={{ color: DP.purple }}>
                •
              </span>
              Client details withheld for confidentiality
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
