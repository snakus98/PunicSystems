import Image from "next/image";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Crosshair,
  FileText,
  Flag,
  MapPin,
  Landmark,
  Route,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  TrendingUp,
  UserRound,
  Users,
  UsersRound,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

export const metadata = {
  title: "Iterise Consulting — ISO 27001 Certification Readiness | Punic Systems",
  description:
    "Case study: preparing Iterise Consulting's Information Security Management System for ISO/IEC 27001:2022 certification through an independent internal audit.",
};

const ACCENT = "#4f35e0";
const NAVY = "#10122b";
const BODY = "#3f445f";
const GREEN = "#16a34a";
const CARD_BORDER = "#e4e6f2";

const META_ITEMS = [
  { icon: Landmark, label: "Industry", value: "Consulting & Professional Services" },
  { icon: MapPin, label: "Location", value: "Tunisia" },
  {
    icon: ShieldCheck,
    label: "Service",
    value: "ISO/IEC 27001 Internal Audit & Certification Readiness Assessment",
  },
];

const GLANCE_ITEMS = [
  { icon: ShieldCheck, label: "Audit Standard", value: "ISO/IEC 27001:2022" },
  { icon: ClipboardCheck, label: "Audit Methodology", value: "Risk-Based Internal Audit (ISO 19011)" },
  { icon: CalendarDays, label: "Audit Duration", value: "Four audit days" },
  { icon: AlertTriangle, label: "Major Nonconformities", value: "2" },
  { icon: AlertCircle, label: "Minor Nonconformities", value: "6" },
  { icon: TrendingUp, label: "Opportunities for Improvement", value: "17" },
  {
    icon: Award,
    label: "Overall Assessment",
    value: "Strong ISMS foundation with targeted improvements required before certification",
  },
];

const APPROACH_STEPS = [
  { num: "01", icon: FileText, label: "Plan & Preparation" },
  { num: "02", icon: Users, label: "Interviews" },
  { num: "03", icon: Search, label: "Evidence Review" },
  { num: "04", icon: SlidersHorizontal, label: "Assessment & Testing" },
  { num: "05", icon: ShieldCheck, label: "Findings & Reporting" },
];

const ASSESSMENT_INCLUDED = [
  "Review of ISMS documentation",
  "Interviews with management and process owners",
  "Sampling of operational records and evidence",
  "Assessment of mandatory ISO/IEC 27001 clauses",
  "Evaluation of applicable Annex A controls",
];

const KEY_AREAS_COL1 = [
  "Organizational Context and Governance",
  "Risk Management",
  "Supplier Security",
  "Business Continuity",
  "Access Control",
  "Management Review and Continual Improvement",
];

const KEY_AREAS_COL2 = [
  "Information Security Operations",
  "Monitoring and Performance Measurement",
  "Vulnerability Management",
  "Incident Management",
  "Security Assessment",
];

const POSITIVE_OBSERVATIONS = [
  "Core ISMS documentation was in place.",
  "Governance processes had been established.",
  "Information security policies and procedures were largely aligned with ISO/IEC 27001 requirements.",
  "The organization demonstrated a clear commitment to information security and continual improvement.",
];

const PRIORITY_FINDINGS = [
  "Strengthening risk management traceability between assets, risks, treatments, and selected controls.",
  "Formalizing management review records to demonstrate leadership oversight and decision-making.",
];

const RESULTS_ROADMAP = [
  { icon: ShieldCheck, text: "Strengthen its risk management process" },
  { icon: UserRound, text: "Improve governance and management oversight" },
  { icon: ClipboardCheck, text: "Enhance operational evidence supporting ISO requirements" },
  { icon: BadgeCheck, text: "Increase confidence ahead of the external certification audit" },
];

const SERVICES_DELIVERED = [
  { icon: ShieldCheck, label: "ISO/IEC 27001 Internal Audit" },
  { icon: ClipboardCheck, label: "Certification Readiness Assessment" },
  { icon: Activity, label: "ISMS Gap Analysis" },
  { icon: AlertTriangle, label: "Risk Management Review" },
  { icon: UsersRound, label: "Governance Assessment" },
  { icon: SlidersHorizontal, label: "Annex A Control Evaluation" },
  { icon: Route, label: "Corrective Action Roadmap" },
];

export default function ProjectThreePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3f4fb]">
      <TopBar />
      <Header />

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-[linear-gradient(115deg,#f7f8fd_0%,#eef0fb_55%,#e7eafa_100%)]">
        {/* Shield image (desktop) */}
        <div className="absolute inset-y-0 right-0 hidden w-[46%] overflow-hidden lg:block">
          <Image
            src="/olap.png"
            alt="Bouclier de cybersécurité avec coche bleue"
            fill
            priority
            quality={100}
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#eef0fb] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-[clamp(1.25rem,4vw,3.5rem)] pb-10 pt-8 sm:pt-10">
          <div className="lg:max-w-[56%]">
            <p className="text-[13px] font-extrabold uppercase tracking-[0.14em]" style={{ color: ACCENT }}>
              Case Study
            </p>
            <span className="mt-2.5 block h-[3px] w-9 rounded-full" style={{ backgroundColor: ACCENT }} />

            <p className="mt-5 text-[clamp(1.55rem,2.5vw,2rem)] font-extrabold tracking-[-0.02em]" style={{ color: "#2ea6f7" }}>
              Iterise Consulting
            </p>

            <h1
              className="mt-4 text-[clamp(1.7rem,3vw,2.45rem)] font-extrabold leading-[1.18] tracking-[-0.03em]"
              style={{ color: NAVY }}
            >
              Preparing an Information
              <br className="hidden sm:block" /> Security Management System
              <br className="hidden sm:block" /> for ISO 27001 Certification
            </h1>

            {/* Meta row */}
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-0">
              {META_ITEMS.map((item, i) => {
                const MetaIcon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex min-w-0 items-start gap-3 ${
                      i > 0 ? "sm:border-l sm:border-[#c9cde4] sm:pl-6" : ""
                    } ${i < META_ITEMS.length - 1 ? "sm:pr-6" : ""}`}
                  >
                    <span className="mt-0.5 shrink-0" style={{ color: "#5b3df0" }}>
                      <MetaIcon size={25} strokeWidth={1.7} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13.5px] font-bold" style={{ color: ACCENT }}>
                        {item.label}
                      </p>
                      <p
                        className="mt-1 max-w-[210px] text-[12.5px] font-semibold leading-[1.4]"
                        style={{ color: NAVY }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Intro */}
            <h2 className="mt-9 text-[15.5px] font-extrabold" style={{ color: ACCENT }}>
              Helping an Organization Prepare for ISO 27001 Certification
            </h2>
            <div className="mt-3 space-y-3.5 text-[13.5px] font-medium leading-[1.65]" style={{ color: BODY }}>
              <p>
                Iterise Consulting engaged us to perform an independent internal audit of its
                Information Security Management System (ISMS) to assess its readiness for
                ISO/IEC 27001:2022 certification.
              </p>
              <p>
                The objective was to evaluate the effectiveness of the organization&apos;s ISMS,
                verify alignment with the standard, identify nonconformities, and provide a
                clear roadmap for achieving certification.
              </p>
            </div>
          </div>
        </div>

        {/* Shield image (mobile) */}
        <div className="relative mx-[clamp(1.25rem,4vw,3.5rem)] mb-8 h-52 overflow-hidden rounded-2xl sm:h-72 lg:hidden">
          <Image
            src="/olap.png"
            alt="Bouclier de cybersécurité avec coche bleue"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1240px] px-[clamp(1.25rem,4vw,3.5rem)] pb-14">
        {/* ===== At a Glance ===== */}
        <section
          className="mt-8 rounded-xl border bg-white p-6 shadow-[0_4px_16px_rgba(30,35,80,0.05)] sm:p-7"
          style={{ borderColor: CARD_BORDER }}
        >
          <h2 className="text-[17px] font-extrabold" style={{ color: ACCENT }}>
            At a Glance
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4 lg:grid-cols-7 lg:gap-x-0 lg:divide-x lg:divide-[#e4e6f2]">
            {GLANCE_ITEMS.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex flex-col items-center text-center ${i > 0 ? "lg:px-3" : "lg:pr-3"}`}
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-lg border bg-white"
                    style={{ borderColor: "#ddd8f8", color: "#5b3df0" }}
                  >
                    <ItemIcon size={24} strokeWidth={1.8} />
                  </span>
                  <p className="mt-3 text-[12.5px] font-extrabold leading-[1.3]" style={{ color: ACCENT }}>
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-[12px] font-semibold leading-[1.4]" style={{ color: NAVY }}>
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== Challenge + Approach ===== */}
        <section className="mt-6 grid gap-6 lg:grid-cols-[0.37fr_0.63fr]">
          <article
            className="rounded-xl border bg-white p-6 shadow-[0_4px_16px_rgba(30,35,80,0.05)] sm:p-7"
            style={{ borderColor: CARD_BORDER }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#efeafe]" style={{ color: ACCENT }}>
                <Flag size={22} strokeWidth={1.9} />
              </span>
              <h2 className="text-[18px] font-extrabold" style={{ color: ACCENT }}>
                The Challenge
              </h2>
            </div>

            <div className="mt-5 space-y-4 text-[13.5px] font-medium leading-[1.7]" style={{ color: BODY }}>
              <p>
                Iterise Consulting had established the core components of an Information
                Security Management System and sought an independent assessment before
                progressing toward ISO/IEC 27001 certification.
              </p>
              <p>
                The organization wanted assurance that its management system aligned with
                the standard while identifying any gaps that could affect a successful
                certification audit.
              </p>
              <p>
                The review focused on both governance and operational controls to ensure
                the ISMS was not only documented but also effectively implemented.
              </p>
            </div>
          </article>

          <article
            className="rounded-xl border bg-white p-6 shadow-[0_4px_16px_rgba(30,35,80,0.05)] sm:p-7"
            style={{ borderColor: CARD_BORDER }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#efeafe]" style={{ color: ACCENT }}>
                <Crosshair size={22} strokeWidth={1.9} />
              </span>
              <h2 className="text-[18px] font-extrabold" style={{ color: ACCENT }}>
                Our Approach
              </h2>
            </div>
            <p className="mt-3 text-[13px] font-medium leading-[1.6]" style={{ color: BODY }}>
              The engagement followed a structured, risk-based audit methodology aligned
              with ISO 19011 and ISO/IEC 27001:2022.
            </p>

            {/* Timeline */}
            <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-0">
              {APPROACH_STEPS.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <div key={step.num} className="contents">
                    {i > 0 && (
                      <div className="hidden flex-1 items-center px-1.5 pt-[24px] sm:flex">
                        <span className="h-0 flex-1 border-t-2 border-dashed border-[#c3c9f2]" />
                        <span className="h-0 w-0 border-y-[4px] border-l-[7px] border-y-transparent border-l-[#8b93e8]" />
                      </div>
                    )}
                    <div className="flex items-center gap-4 sm:w-[86px] sm:flex-col sm:gap-0 sm:text-center">
                      <div className="relative shrink-0">
                        <span
                          className="flex h-[52px] w-[52px] items-center justify-center rounded-full border bg-white shadow-[0_4px_14px_rgba(52,48,190,0.12)]"
                          style={{ borderColor: "#e6e8f5", color: ACCENT }}
                        >
                          <StepIcon size={22} strokeWidth={1.8} />
                        </span>
                        <span
                          className="absolute -left-2 -top-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full text-[10px] font-extrabold text-white"
                          style={{ backgroundColor: ACCENT }}
                        >
                          {step.num}
                        </span>
                      </div>
                      <p className="text-[11.5px] font-bold leading-[1.3] sm:mt-2.5" style={{ color: NAVY }}>
                        {step.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Assessment columns */}
            <div className="mt-8 grid gap-7 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h3 className="text-[13.5px] font-extrabold" style={{ color: ACCENT }}>
                  Our assessment included:
                </h3>
                <ul className="mt-3.5 space-y-3">
                  {ASSESSMENT_INCLUDED.map((item) => (
                    <li key={item} className="grid grid-cols-[20px_1fr] items-start gap-2">
                      <CheckCircle2 size={16} strokeWidth={2.1} className="mt-[1px]" style={{ color: "#5b3df0" }} />
                      <span className="text-[12px] font-semibold leading-[1.45]" style={{ color: NAVY }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[13.5px] font-extrabold" style={{ color: ACCENT }}>
                  Key areas reviewed included:
                </h3>
                <div className="mt-3.5 grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
                  <ul className="space-y-3">
                    {KEY_AREAS_COL1.map((item) => (
                      <li key={item} className="grid grid-cols-[20px_1fr] items-start gap-2">
                        <CheckCircle2 size={16} strokeWidth={2.1} className="mt-[1px]" style={{ color: "#5b3df0" }} />
                        <span className="text-[12px] font-semibold leading-[1.45]" style={{ color: NAVY }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3">
                    {KEY_AREAS_COL2.map((item) => (
                      <li key={item} className="grid grid-cols-[20px_1fr] items-start gap-2">
                        <CheckCircle2 size={16} strokeWidth={2.1} className="mt-[1px]" style={{ color: "#5b3df0" }} />
                        <span className="text-[12px] font-semibold leading-[1.45]" style={{ color: NAVY }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* ===== Key Findings + Results ===== */}
        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <article
            className="rounded-xl border bg-white p-6 shadow-[0_4px_16px_rgba(30,35,80,0.05)] sm:p-7"
            style={{ borderColor: CARD_BORDER }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#efeafe]" style={{ color: ACCENT }}>
                <Activity size={22} strokeWidth={1.9} />
              </span>
              <h2 className="text-[18px] font-extrabold" style={{ color: ACCENT }}>
                Key Findings
              </h2>
            </div>

            <p className="mt-4 text-[13px] font-medium leading-[1.65]" style={{ color: BODY }}>
              The audit confirmed that the organization had established a solid foundation
              for an effective Information Security Management System.
            </p>

            <h3 className="mt-5 text-[13.5px] font-extrabold" style={{ color: ACCENT }}>
              Positive observations included:
            </h3>
            <ul className="mt-3.5 space-y-3">
              {POSITIVE_OBSERVATIONS.map((item) => (
                <li key={item} className="grid grid-cols-[20px_1fr] items-start gap-2.5">
                  <CheckCircle2 size={16} strokeWidth={2.1} className="mt-[1px]" style={{ color: GREEN }} />
                  <span className="text-[12.5px] font-semibold leading-[1.5]" style={{ color: NAVY }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border bg-[#f2f0fd] p-5" style={{ borderColor: "#ddd8f8" }}>
              <div className="grid grid-cols-[30px_1fr] items-start gap-2.5">
                <span
                  className="flex h-[26px] w-[26px] items-center justify-center rounded-full border-2"
                  style={{ borderColor: ACCENT, color: ACCENT }}
                >
                  <AlertCircle size={16} strokeWidth={2.2} />
                </span>
                <p className="text-[13px] font-extrabold leading-[1.45]" style={{ color: ACCENT }}>
                  The assessment also identified several areas requiring attention before
                  certification.
                </p>
              </div>
              <p className="mt-3 pl-[40px] text-[12.5px] font-extrabold" style={{ color: ACCENT }}>
                The highest-priority findings related to:
              </p>
              <ul className="mt-2.5 space-y-2.5 pl-[40px]">
                {PRIORITY_FINDINGS.map((item) => (
                  <li key={item} className="grid grid-cols-[20px_1fr] items-start gap-2">
                    <CheckCircle2 size={15} strokeWidth={2.1} className="mt-[2px]" style={{ color: "#5b3df0" }} />
                    <span className="text-[12px] font-semibold leading-[1.5]" style={{ color: NAVY }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-5 text-[12.5px] font-medium leading-[1.65]" style={{ color: BODY }}>
              Additional recommendations focused on improving operational evidence, business
              continuity testing, supplier governance, monitoring activities, and
              documentation supporting Annex A controls.
            </p>
          </article>

          <article
            className="rounded-xl border bg-white p-6 shadow-[0_4px_16px_rgba(30,35,80,0.05)] sm:p-7"
            style={{ borderColor: CARD_BORDER }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#efeafe]" style={{ color: ACCENT }}>
                <BarChart3 size={22} strokeWidth={1.9} />
              </span>
              <h2 className="text-[18px] font-extrabold" style={{ color: ACCENT }}>
                Results
              </h2>
            </div>

            <div className="mt-4 space-y-3.5 text-[13px] font-medium leading-[1.65]" style={{ color: BODY }}>
              <p>
                The internal audit concluded that Iterise Consulting&apos;s ISMS provides a
                strong foundation for ISO/IEC 27001 certification.
              </p>
              <p>
                While corrective actions were required before certification, the identified
                findings were clear, actionable, and prioritized according to business risk.
              </p>
              <p>
                The audit delivered a structured improvement roadmap that enables the
                organization to:
              </p>
            </div>

            {/* Roadmap */}
            <div className="relative mt-5 space-y-3.5">
              <span
                aria-hidden
                className="absolute bottom-6 left-[23px] top-6 border-l-2 border-dashed border-[#c3c9f2]"
              />
              {RESULTS_ROADMAP.map((row) => {
                const RowIcon = row.icon;
                return (
                  <div key={row.text} className="relative grid grid-cols-[46px_1fr] items-center gap-3">
                    <span
                      className="flex h-[46px] w-[46px] items-center justify-center rounded-lg border bg-white shadow-[0_2px_8px_rgba(30,35,80,0.06)]"
                      style={{ borderColor: "#ddd8f8", color: "#5b3df0" }}
                    >
                      <RowIcon size={21} strokeWidth={1.8} />
                    </span>
                    <p
                      className="rounded-lg bg-[#eef0fb] px-4 py-3 text-[12.5px] font-bold leading-[1.4]"
                      style={{ color: NAVY }}
                    >
                      {row.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="mt-5 text-[12.5px] font-medium leading-[1.65]" style={{ color: BODY }}>
              Rather than simply identifying gaps, the engagement provided practical
              recommendations designed to improve both compliance and the long-term
              effectiveness of the ISMS.
            </p>
          </article>
        </section>

        {/* ===== Services Delivered ===== */}
        <section className="mt-8">
          <h2 className="text-[17px] font-extrabold" style={{ color: ACCENT }}>
            Services Delivered
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 lg:grid-cols-7 lg:gap-x-0 lg:divide-x lg:divide-[#dcdfee]">
            {SERVICES_DELIVERED.map((service, i) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.label}
                  className={`flex items-center gap-2.5 ${i > 0 ? "lg:pl-4" : ""} ${
                    i < SERVICES_DELIVERED.length - 1 ? "lg:pr-4" : ""
                  }`}
                >
                  <ServiceIcon size={24} strokeWidth={1.7} className="shrink-0" style={{ color: "#5b3df0" }} />
                  <p className="text-[11.5px] font-bold leading-[1.35]" style={{ color: NAVY }}>
                    {service.label}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== Business Impact ===== */}
        <section
          className="relative mt-8 overflow-hidden rounded-2xl px-7 py-8 sm:px-10"
          style={{ background: "linear-gradient(95deg, #4433e8 0%, #3f7cf7 100%)" }}
        >
          {/* Bar chart illustration */}
          <div aria-hidden className="absolute bottom-0 right-10 hidden items-end gap-2.5 opacity-80 lg:flex">
            <span className="h-10 w-6 rounded-t-md bg-white/25" />
            <span className="h-16 w-6 rounded-t-md bg-white/35" />
            <span className="h-24 w-6 rounded-t-md bg-white/45" />
            <span className="h-32 w-6 rounded-t-md bg-white/55" />
            <TrendingUp size={40} strokeWidth={2} className="mb-24 -ml-1 text-white/80" />
          </div>
          <div
            aria-hidden
            className="absolute right-64 top-6 hidden h-16 w-24 opacity-50 lg:block"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.55) 2px, transparent 2.5px)",
              backgroundSize: "16px 16px",
            }}
          />

          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-9 lg:pr-64">
            <span className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-full border-2 border-white/40 bg-white/10 text-white">
              <Target size={38} strokeWidth={1.5} />
            </span>

            <div className="flex-1">
              <h2 className="text-[clamp(1.25rem,2vw,1.5rem)] font-extrabold tracking-[-0.01em] text-white">
                Business Impact
              </h2>
              <div className="mt-2.5 space-y-3 text-[13.5px] font-medium leading-[1.65] text-white/85">
                <p>
                  The engagement provided management with an independent view of the maturity
                  of its Information Security Management System and a clear path toward
                  certification readiness.
                </p>
                <p>
                  By addressing the identified findings, Iterise Consulting is positioned to
                  strengthen its governance framework, improve audit evidence, and move
                  confidently toward ISO/IEC 27001 certification while establishing a more
                  resilient and sustainable information security program.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA banner ===== */}
        <section
          className="relative mt-6 overflow-hidden rounded-2xl px-7 py-8 sm:px-10"
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
                Looking to Prepare for ISO 27001 Certification?
              </h2>
              <p className="mt-2.5 max-w-[600px] text-[13.5px] font-medium leading-[1.65] text-white/85">
                Whether your organization is implementing an ISMS for the first time or
                preparing for an external certification audit, we help you identify gaps,
                strengthen security governance, and build management systems that are
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
