import Image from "next/image";
import {
  UserRound,
  MessageSquareText,
  Landmark,
  TrendingUp,
  ShieldCheck,
  Lock,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type Reason = { icon: LucideIcon; wrap: string; text: string };
type ServiceCard = {
  icon: LucideIcon;
  gradient: string;
  title: string;
  badge: string;
  text: string;
};

const REASONS: Reason[] = [
  {
    icon: UserRound,
    wrap: "bg-[#01f6f7]/15 text-[#0891b2]",
    text: "A customer requires it.",
  },
  {
    icon: MessageSquareText,
    wrap: "bg-[#3b82f6]/12 text-[#2563eb]",
    text: "An enterprise prospect asks difficult security questions.",
  },
  {
    icon: Landmark,
    wrap: "bg-[#6e29f6]/12 text-[#6e29f6]",
    text: "A regulator expects accountability.",
  },
  {
    icon: TrendingUp,
    wrap: "bg-[#6e29f6]/12 text-[#6e29f6]",
    text: "Or leadership wants stronger governance before the business grows further.",
  },
];

const CARDS: ServiceCard[] = [
  {
    icon: ShieldCheck,
    gradient: "from-[#22d3ee] to-[#0e9aab]",
    title: "ISO 27001",
    badge: "Information Security",
    text: "Establish a robust Information Security Management System (ISMS) that protects your data and builds trust.",
  },
  {
    icon: Lock,
    gradient: "from-[#60a5fa] to-[#2563eb]",
    title: "GDPR",
    badge: "Data Protection",
    text: "Ensure privacy by design and demonstrate compliance with EU data protection requirements.",
  },
  {
    icon: ClipboardCheck,
    gradient: "from-[#a78bfa] to-[#6e29f6]",
    title: "Governance & Risk",
    badge: "IT Governance",
    text: "Strengthen governance, manage risk, and align security with business objectives.",
  },
];

const dots =
  "radial-gradient(circle, rgba(110,41,246,0.35) 1.5px, transparent 1.5px)";

export default function WhyCompliance() {
  return (
    <section className="relative overflow-hidden bg-[#f5f6f9] pb-24 pt-20">
      {/* decorative dot fields */}
      <div
        className="pointer-events-none absolute left-6 top-1/3 hidden h-40 w-24 opacity-30 lg:block"
        style={{ backgroundImage: dots, backgroundSize: "16px 16px" }}
      />

      <div className="container-x relative grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
        {/* LEFT COLUMN */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0891b2]">
            Why Compliance
          </p>
          <h2 className="mt-5 text-4xl font-bold leading-[1.08] text-navy sm:text-5xl">
            Compliance Should Help You Grow—
            <br />
            <span className="bg-gradient-to-r from-[#22d3ee] via-[#3b82f6] to-[#6e29f6] bg-clip-text text-transparent">
              Not Slow You Down.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-navy/70">
            Many organizations pursue ISO 27001 or GDPR compliance because they
            have to.
          </p>

          <ul className="mt-6 space-y-3">
            {REASONS.map((r) => (
              <li
                key={r.text}
                className="flex items-center gap-4 rounded-xl border border-navy/8 bg-white px-5 py-4 shadow-sm"
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${r.wrap}`}
                >
                  <r.icon size={20} />
                </span>
                <span className="text-sm font-medium leading-6 text-navy/90">
                  {r.text}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-7 max-w-md text-base leading-7 text-navy/70">
            Too often, compliance becomes a collection of generic templates,
            unnecessary paperwork, and processes nobody follows.
          </p>
          <p className="mt-6 text-base font-bold text-navy">
            We believe there is a better way.
          </p>
          <p className="mt-5 max-w-md text-base leading-7 text-navy/70">
            We help organizations build information security and privacy programs
            that are practical, auditable, and aligned with how their business
            actually operates.
          </p>
          <p className="mt-5 max-w-md text-base leading-7 text-navy/70">
            Whether you&apos;re preparing for ISO 27001 certification,
            strengthening GDPR compliance, or improving your information security
            governance, we work alongside your team from planning through
            implementation.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-5">
          {/* Hero image */}
          <div className="overflow-hidden rounded-2xl border border-navy/8 shadow-lg shadow-navy/10">
            <div className="relative aspect-[5/4] w-full">
              <Image
                src="/nab.png"
                alt="Security and compliance team in a strategy meeting"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Service cards */}
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-navy/8 bg-white p-6 shadow-lg shadow-navy/5"
            >
              <div className="flex items-start gap-4">
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white shadow-md ${c.gradient}`}
                >
                  <c.icon size={26} />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-navy">{c.title}</h3>
                    <span className="rounded-full bg-navy/5 px-2.5 py-0.5 text-[11px] font-semibold text-navy/55">
                      {c.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-navy/65">{c.text}</p>
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-purple transition-colors hover:text-purple-dark"
                  >
                    View service details <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width centered guarantees on a single line */}
      <div className="container-x relative mt-14">
        <div className="mx-auto mb-7 h-0.5 w-56 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#6e29f6]" />
        <ul className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-12">
          <li className="flex items-center gap-3">
            <CheckCircle2 size={22} className="shrink-0 text-[#0891b2]" />
            <span className="whitespace-nowrap font-bold text-navy">
              No unnecessary complexity.
            </span>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 size={22} className="shrink-0 text-[#2563eb]" />
            <span className="whitespace-nowrap font-bold text-navy">
              No generic documentation.
            </span>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 size={22} className="shrink-0 text-[#0891b2]" />
            <span className="whitespace-nowrap font-bold leading-6 text-navy">
              Just practical compliance that creates lasting value.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
