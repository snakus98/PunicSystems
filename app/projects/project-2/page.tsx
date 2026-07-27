import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Cog,
  Crosshair,
  FileText,
  Folder,
  Landmark,
  Link2,
  MapPin,
  MonitorCheck,
  RefreshCw,
  Search,
  Settings2,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  TrendingUp,
  UserRound,
  Users,
  UsersRound,
  BarChart3,
  Activity,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

export const metadata = {
  title: "Fairplay Digital GmbH — ISO 27001 Internal Audit | Punic Systems",
  description:
    "Case study: independent ISO/IEC 27001:2022 internal audit of Fairplay Digital GmbH's Information Security Management System.",
};

const ACCENT = "#4f35e0";
const NAVY = "#10122b";
const BODY = "#3f445f";
const GREEN = "#16a34a";
const CARD_BORDER = "#e4e6f2";

const META_ITEMS = [
  { icon: Landmark, label: "Industry", value: "Technology & Digital Services" },
  { icon: MapPin, label: "Location", value: "Germany" },
  { icon: ShieldCheck, label: "Service", value: "ISO 27001 Internal Audit" },
];

const GLANCE_ROWS = [
  { label: "Audit Standard", value: "ISO/IEC 27001:2022" },
  { label: "Audit Methodology", value: "Risk-based Internal Audit | ISO 19011" },
  { label: "Duration", value: "Four weeks (max)" },
  { label: "Areas Reviewed", value: "7" },
  { label: "Major Nonconformities", value: "0" },
  { label: "Minor Nonconformities", value: "0" },
  { label: "Observations", value: "2" },
  {
    label: "Overall Result",
    value: "Effective ISMS with continual conformity to ISO/IEC 27001:2022",
    highlight: true,
  },
];

const APPROACH_STEPS = [
  { num: "01", icon: FileText, label: "Review of ISMS documentation" },
  { num: "02", icon: Users, label: "Interviews with key personnel" },
  { num: "03", icon: Search, label: "Observation of operational practices" },
  { num: "04", icon: SlidersHorizontal, label: "Technical verification of selected controls" },
  { num: "05", icon: ShieldCheck, label: "Risk-based sampling of evidence" },
];

const ASSESSMENT_ITEMS = [
  { icon: Folder, label: "Asset\nManagement" },
  { icon: MonitorCheck, label: "Endpoint\nSecurity" },
  { icon: UserRound, label: "Access\nControl" },
  { icon: Link2, label: "Supplier\nManagement" },
  { icon: RefreshCw, label: "Business\nContinuity" },
  { icon: Shield, label: "Security\nAwareness" },
  { icon: BarChart3, label: "Organizational\nGovernance" },
];

const TESTING_ITEMS = [
  "Encrypted endpoints managed through Microsoft Intune",
  "Backup verification, Teams (calls & chats), and Outlook emails",
  "Supplier assessments and Data Protection Impact Assessments (DPIAs)",
  "Review of risk management processes",
];

const INSIGHT_CARDS = [
  {
    icon: Crosshair,
    title: "The Challenge",
    points: [
      "At capital market growth, maintaining an effective Information Security Management System remains more than a documentation exercise.",
      "Processes must remain aligned with business objectives, security controls must continue to evolve to meet emerging or recent threats, and improvements must be put into tangible and measurable practice.",
      "Fairplay Digital GmbH sought an independent assurance evaluation that would go beyond compliance and support long-term resilience.",
    ],
  },
  {
    icon: Shield,
    title: "Key Strengths Identified",
    points: [
      "The audit confirmed that Fairplay Digital GmbH operates a well-managed and operational Information Security Management System.",
      "The organization demonstrated strong maturity across security controls and governance.",
      "Effective access management, lifecycle practices, and incident response were observed consistently across all areas.",
      "The controls demonstrated a strong commitment to maintaining confidentiality, integrity, and availability of supporting continual compliance.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Opportunities for Improvement",
    points: [
      "While the overall control set was well verified, several opportunities were identified to further strengthen governance and documentation.",
      "Recommendations focused on enhancing tools consistency, incident handling efficiency, and clarifying specific disclosures in privacy impact reporting.",
      "Aligning the operational and theoretical documentation will support even greater compliance and assurance readiness.",
    ],
  },
  {
    icon: BarChart3,
    title: "Results",
    points: [
      "The internal audit concluded that the Information Security Management System meets the requirements of ISO/IEC 27001:2022 and supports the organization's efficiency and resilience.",
      "No major nonconformities were identified.",
      "Core security controls were operating effectively.",
      "Governance processes demonstrated ongoing maturity.",
      "Practical recommendations were provided to support continual improvement and future audit readiness.",
    ],
  },
];

const SERVICES_DELIVERED = [
  { icon: ShieldCheck, label: "ISO 27001 Internal Audit" },
  { icon: ClipboardCheck, label: "ISMS Effectiveness Assessment" },
  { icon: Activity, label: "Risk-Based Compliance Review" },
  { icon: UsersRound, label: "Governance Assessment" },
  { icon: Settings2, label: "Technical Control Verification" },
  { icon: FileText, label: "Corrective Action Recommendations" },
];

export default function ProjectTwoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3f4fb]">
      <TopBar />
      <Header />

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-[linear-gradient(115deg,#f7f8fd_0%,#eef0fb_55%,#e7eafa_100%)]">
        {/* Shield image (desktop) */}
        <div className="absolute inset-y-0 right-0 hidden w-[52%] overflow-hidden lg:block">
          <Image
            src="/olap.png"
            alt="Bouclier de sécurité avec coche bleue"
            fill
            priority
            quality={100}
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#eef0fb] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-[clamp(1.25rem,4vw,3.5rem)] pb-10 pt-8 sm:pt-10">
          <div className="lg:max-w-[52%]">
            <p className="text-[13px] font-extrabold uppercase tracking-[0.14em]" style={{ color: ACCENT }}>
              Case Study
            </p>

            {/* FairPlay Digital logo */}
            <div className="mt-5 flex items-baseline gap-2.5 text-[clamp(1.6rem,2.6vw,2.1rem)] font-extrabold tracking-[-0.02em]">
              <span style={{ color: "#2ea6f7" }}>FairPlay</span>
              <span style={{ color: "#16307c" }}>Digital</span>
            </div>

            <h1
              className="mt-5 text-[clamp(1.9rem,3.5vw,2.85rem)] font-extrabold leading-[1.12] tracking-[-0.03em]"
              style={{ color: NAVY }}
            >
              Fairplay Digital GmbH
            </h1>
            <p
              className="mt-1 text-[clamp(1.3rem,2.3vw,1.85rem)] font-bold tracking-[-0.01em]"
              style={{ color: "#4340e0" }}
            >
              ISO 27001 Internal Audit
            </p>

            {/* Meta row */}
            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-0">
              {META_ITEMS.map((item, i) => {
                const MetaIcon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex min-w-0 items-start gap-3.5 ${
                      i > 0 ? "sm:border-l sm:border-[#c9cde4] sm:pl-7" : ""
                    } ${i < META_ITEMS.length - 1 ? "sm:pr-7" : ""}`}
                  >
                    <span className="mt-0.5 shrink-0" style={{ color: "#5b3df0" }}>
                      <MetaIcon size={26} strokeWidth={1.7} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[14px] font-bold" style={{ color: ACCENT }}>
                        {item.label}
                      </p>
                      <p className="mt-1 max-w-[170px] text-[13.5px] font-semibold leading-[1.35]" style={{ color: NAVY }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Shield image (mobile) */}
        <div className="relative mx-[clamp(1.25rem,4vw,3.5rem)] mb-8 h-52 overflow-hidden rounded-2xl sm:h-72 lg:hidden">
          <Image
            src="/olap.png"
            alt="Bouclier de sécurité avec coche bleue"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1240px] px-[clamp(1.25rem,4vw,3.5rem)] pb-14">
        {/* ===== Intro + At a Glance ===== */}
        <section className="mt-9 grid gap-10 lg:grid-cols-[1fr_460px] lg:gap-14">
          <article>
            <h2 className="text-[clamp(1.2rem,1.9vw,1.5rem)] font-extrabold leading-[1.35]" style={{ color: ACCENT }}>
              Independent Assurance for a Mature
              <br className="hidden sm:block" /> Information Security Management System
            </h2>
            <span className="mt-4 block h-px w-full bg-[#dcdfee]" />

            <div className="mt-6 space-y-5 text-[14px] font-medium leading-[1.7]" style={{ color: BODY }}>
              <p>
                Fairplay Digital GmbH engaged us to perform a structured ISO 27001 internal
                audit of its Information Security Management System (ISMS) as part of its
                ongoing ISO/IEC 27001:2022 compliance journey.
              </p>
              <p>
                Using risk-focused and methodology-aligned with ISO 19011, we evaluated the
                effectiveness of security controls, governance processes, and documentation,
                and provided practical insights for optimization.
              </p>
              <p>
                The objective was not only to verify compliance but also to identify
                practical opportunities for continual improvement before future
                certification activities.
              </p>
            </div>
          </article>

          <aside>
            <h2 className="text-[19px] font-extrabold" style={{ color: ACCENT }}>
              At a Glance
            </h2>
            <div className="mt-3 overflow-hidden rounded-lg border bg-white" style={{ borderColor: CARD_BORDER }}>
              {GLANCE_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1fr_1.3fr] ${i > 0 ? "border-t" : ""}`}
                  style={{ borderColor: CARD_BORDER }}
                >
                  <p
                    className="border-r px-4 py-3 text-[13px] font-semibold"
                    style={{
                      borderColor: CARD_BORDER,
                      color: row.highlight ? ACCENT : "#454a66",
                    }}
                  >
                    {row.label}
                  </p>
                  <p
                    className="px-4 py-3 text-[13px] font-semibold leading-[1.45]"
                    style={{ color: row.highlight ? ACCENT : NAVY }}
                  >
                    {row.value}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        {/* ===== Our Approach ===== */}
        <section
          className="mt-12 rounded-xl border bg-white p-6 shadow-[0_4px_16px_rgba(30,35,80,0.05)] sm:p-8"
          style={{ borderColor: CARD_BORDER }}
        >
          <div className="flex items-center gap-3.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#efeafe]" style={{ color: ACCENT }}>
              <Cog size={24} strokeWidth={1.9} />
            </span>
            <h2 className="text-[20px] font-extrabold" style={{ color: ACCENT }}>
              Our Approach
            </h2>
          </div>
          <p className="mt-3 text-[13.5px] font-medium sm:pl-[58px]" style={{ color: BODY }}>
            Our audit followed a structured, risk-based methodology consistent with ISO 19011 guidance.
          </p>

          {/* Timeline */}
          <div className="mt-9 flex flex-col gap-7 sm:flex-row sm:items-start sm:gap-0">
            {APPROACH_STEPS.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div key={step.num} className="contents">
                  {i > 0 && (
                    <div className="hidden flex-1 items-center px-2 pt-[30px] sm:flex">
                      <span className="h-0 flex-1 border-t-2 border-dashed border-[#c3c9f2]" />
                      <span className="h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-[#8b93e8]" />
                    </div>
                  )}
                  <div className="flex items-center gap-4 sm:w-[130px] sm:flex-col sm:gap-0 sm:text-center">
                    <div className="relative shrink-0">
                      <span
                        className="flex h-16 w-16 items-center justify-center rounded-full border bg-white shadow-[0_4px_14px_rgba(52,48,190,0.12)]"
                        style={{ borderColor: "#e6e8f5", color: ACCENT }}
                      >
                        <StepIcon size={26} strokeWidth={1.8} />
                      </span>
                      <span
                        className="absolute -left-2.5 -top-1.5 flex h-[26px] w-[26px] items-center justify-center rounded-full text-[11px] font-extrabold text-white"
                        style={{ backgroundColor: ACCENT }}
                      >
                        {step.num}
                      </span>
                    </div>
                    <p className="text-[13px] font-bold leading-[1.35] sm:mt-3.5" style={{ color: NAVY }}>
                      {step.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sub-cards */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_1fr]">
            <div className="rounded-xl border p-5 sm:p-6" style={{ borderColor: CARD_BORDER }}>
              <h3 className="text-[15px] font-extrabold" style={{ color: ACCENT }}>
                The assessment covered:
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {ASSESSMENT_ITEMS.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex min-h-[62px] items-center gap-3 rounded-lg border bg-white py-2.5 pl-3.5 pr-4 shadow-[0_2px_8px_rgba(30,35,80,0.05)]"
                      style={{ borderColor: CARD_BORDER }}
                    >
                      <ItemIcon size={21} strokeWidth={1.8} className="shrink-0" style={{ color: "#5b3df0" }} />
                      <span
                        className="whitespace-pre-line text-[12.5px] font-bold leading-[1.35]"
                        style={{ color: NAVY }}
                      >
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl border bg-[#f7f8fd] p-5 sm:p-6" style={{ borderColor: CARD_BORDER }}>
              <h3 className="text-[15px] font-extrabold" style={{ color: ACCENT }}>
                Representative testing included:
              </h3>
              <ul className="mt-4 space-y-3.5">
                {TESTING_ITEMS.map((item) => (
                  <li key={item} className="grid grid-cols-[22px_1fr] items-start gap-2.5">
                    <CheckCircle2 size={18} strokeWidth={2.1} className="mt-[1px]" style={{ color: GREEN }} />
                    <span className="text-[13px] font-semibold leading-[1.5]" style={{ color: NAVY }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== Insight cards ===== */}
        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {INSIGHT_CARDS.map((card) => {
            const CardIcon = card.icon;
            return (
              <article
                key={card.title}
                className="rounded-xl border bg-white p-5 shadow-[0_4px_16px_rgba(30,35,80,0.05)] sm:p-6"
                style={{ borderColor: CARD_BORDER }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#efeafe]" style={{ color: ACCENT }}>
                    <CardIcon size={21} strokeWidth={1.9} />
                  </span>
                  <h2 className="text-[15.5px] font-extrabold leading-[1.25]" style={{ color: ACCENT }}>
                    {card.title}
                  </h2>
                </div>
                <ul className="mt-5 space-y-4">
                  {card.points.map((point) => (
                    <li key={point} className="grid grid-cols-[10px_1fr] gap-2.5">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#5b3df0" }} />
                      <span className="text-[12.5px] font-medium leading-[1.6]" style={{ color: BODY }}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </section>

        {/* ===== Services Delivered ===== */}
        <section className="mt-10">
          <h2 className="text-[17px] font-extrabold" style={{ color: ACCENT }}>
            Services Delivered
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-0 lg:divide-x lg:divide-[#dcdfee]">
            {SERVICES_DELIVERED.map((service, i) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.label}
                  className={`flex items-center gap-3 ${i > 0 ? "lg:pl-5" : ""} ${
                    i < SERVICES_DELIVERED.length - 1 ? "lg:pr-5" : ""
                  }`}
                >
                  <ServiceIcon size={26} strokeWidth={1.7} className="shrink-0" style={{ color: "#5b3df0" }} />
                  <p className="text-[12px] font-bold leading-[1.35]" style={{ color: NAVY }}>
                    {service.label}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== CTA banner ===== */}
        <section
          className="relative mt-10 overflow-hidden rounded-2xl px-7 py-8 sm:px-10"
          style={{ background: "linear-gradient(95deg, #4433e8 0%, #3f7cf7 100%)" }}
        >
          <div
            aria-hidden
            className="absolute right-10 top-1/2 hidden h-24 w-32 -translate-y-1/2 opacity-60 lg:block"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.55) 2px, transparent 2.5px)",
              backgroundSize: "16px 16px",
            }}
          />

          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-9">
            <span className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-full border-2 border-white/40 bg-white/10 text-white">
              <CalendarDays size={36} strokeWidth={1.6} />
            </span>

            <div className="flex-1">
              <h2 className="text-[clamp(1.25rem,2vw,1.55rem)] font-extrabold tracking-[-0.01em] text-white">
                Looking to Strengthen Your ISMS?
              </h2>
              <p className="mt-2.5 max-w-[560px] text-[13.5px] font-medium leading-[1.65] text-white/85">
                Whether you&apos;re preparing for certification, conducting your annual
                internal audit, or looking to optimize your security operations, we help
                organizations build Information Security Management Systems that are
                practical, auditable, and aligned with ISO/IEC 27001.
              </p>
            </div>

            <a
              href="/#lets-talk"
              className="inline-flex items-center gap-2.5 rounded-lg bg-white px-6 py-3 text-[14px] font-extrabold transition-transform hover:scale-[1.03]"
              style={{ color: "#4433e8" }}
            >
              Book a Consultation
              <ArrowRight size={17} strokeWidth={2.4} />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
