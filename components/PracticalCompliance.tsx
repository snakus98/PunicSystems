import {
  ArrowRight,
  Box,
  FileText,
  Landmark,
  LockKeyhole,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";

type ServiceCard = {
  icon: LucideIcon;
  title: string;
  badge: string;
  text: string;
  href: string;
  accent: string;
  iconBackground: string;
};

const SERVICES: ServiceCard[] = [
  {
    icon: ShieldCheck,
    title: "ISO 27001",
    badge: "Information Security",
    text: "Establish a robust Information Security Management System (ISMS) that protects your data and builds trust.",
    href: "/services/iso-27001",
    accent: "text-[#087bf1]",
    iconBackground: "from-[#21cbdc]/15 to-[#2e83f4]/20",
  },
  {
    icon: LockKeyhole,
    title: "GDPR",
    badge: "Data Protection",
    text: "Ensure privacy by design and demonstrate compliance with EU data protection requirements.",
    href: "/services/gdpr-gap-analysis",
    accent: "text-[#7140f3]",
    iconBackground: "from-[#6689ff]/15 to-[#7843f5]/22",
  },
  {
    icon: Landmark,
    title: "Governance & Risk",
    badge: "IT Governance",
    text: "Strengthen governance, manage risk, and align security with business objectives.",
    href: "/services/risk-management",
    accent: "text-[#7140f3]",
    iconBackground: "from-[#8857f6]/15 to-[#7541ef]/22",
  },
];

const PROMISES = [
  {
    icon: Box,
    text: "No unnecessary complexity.",
    color: "text-[#10bdd7]",
    border: "border-[#31c7df]",
  },
  {
    icon: FileText,
    text: "No generic documentation.",
    color: "text-[#407cf3]",
    border: "border-[#658df6]",
  },
  {
    icon: Target,
    text: "Just practical compliance that creates lasting value.",
    color: "text-[#7b48f4]",
    border: "border-[#9a6ef6]",
  },
];

const dots =
  "radial-gradient(circle, rgba(77,116,178,0.34) 1.4px, transparent 1.6px)";

export default function PracticalCompliance() {
  return (
    <section className="relative overflow-hidden bg-[#f8faff] pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28">
      <div className="fine-grid pointer-events-none absolute right-0 top-0 h-[42%] w-[28%] opacity-45" />
      <div className="pointer-events-none absolute left-[31%] top-[12.5rem] h-[31rem] w-[52rem] rounded-[50%] border border-[#1fc7df]/35" />
      <div className="pointer-events-none absolute left-[37%] top-[18rem] h-[25rem] w-[44rem] rounded-[50%] border border-[#734bfa]/35" />

      <div className="container-x relative !max-w-[1420px]">
        <div className="max-w-[780px]">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#11adcf]">
            Practical Compliance
          </p>
          <h2 className="mt-5 text-[2.2rem] font-bold leading-[1.03] tracking-[-0.04em] text-navy min-[430px]:text-[2.65rem] sm:text-5xl xl:text-[3.65rem]">
            Built around how your
            <br />
            <span className="bg-gradient-to-r from-[#13c5da] via-[#3689ef] to-[#7643f3] bg-clip-text text-transparent">
              business actually operates.
            </span>
          </h2>
          <p className="mt-6 max-w-[720px] text-base leading-7 text-navy/68 sm:text-lg sm:leading-8">
            Whether you&apos;re preparing for ISO 27001 certification,
            strengthening GDPR compliance, or improving your information
            security governance, we work alongside your team from planning
            through implementation.
          </p>
        </div>

        <div className="relative mt-14 grid items-center gap-6 lg:mt-20 lg:grid-cols-[1fr_1.12fr_1fr] lg:gap-8">
          <div
            aria-hidden="true"
            className="absolute -left-16 top-16 hidden h-36 w-20 lg:block"
            style={{ backgroundImage: dots, backgroundSize: "18px 18px" }}
          />
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              className={`relative flex flex-col items-center rounded-[1.55rem] border bg-white/95 px-7 py-9 text-center shadow-[0_18px_45px_rgba(22,50,90,0.10)] backdrop-blur sm:px-10 ${
                index === 1
                  ? "border-[#6a60f4] lg:min-h-[470px] lg:-translate-y-5 lg:justify-center lg:border-t-[#27bddf]"
                  : "border-[#dce3ee] lg:min-h-[390px] lg:justify-center"
              }`}
            >
              <div
                className={`flex h-24 w-24 items-center justify-center rounded-full border border-white bg-gradient-to-br shadow-[0_10px_26px_rgba(43,91,168,0.15)] ${service.iconBackground} ${service.accent}`}
              >
                <service.icon size={46} strokeWidth={1.9} />
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em] text-navy">
                {service.title}
              </h3>
              <span
                className={`mt-2 rounded-full bg-current/10 px-4 py-1 text-sm font-semibold ${service.accent}`}
              >
                {service.badge}
              </span>
              <p className="mt-6 max-w-[310px] text-base leading-7 text-navy/65">
                {service.text}
              </p>
              <a
                href={service.href}
                className={`button-focus mt-7 inline-flex items-center gap-3 font-bold ${service.accent} transition hover:gap-4`}
              >
                View service details <ArrowRight size={19} />
              </a>
            </article>
          ))}
        </div>

        <div className="relative mt-16 rounded-[1.6rem] border border-[#e0e6ef] bg-white/88 px-6 py-7 shadow-[0_16px_42px_rgba(29,55,91,0.08)] backdrop-blur sm:px-8 lg:mt-10 lg:px-10">
          <div
            aria-hidden="true"
            className="absolute left-4 top-1/2 hidden h-20 w-12 -translate-y-1/2 opacity-55 sm:block"
            style={{ backgroundImage: dots, backgroundSize: "15px 15px" }}
          />
          <div className="grid gap-7 sm:pl-14 lg:grid-cols-3 lg:gap-0 lg:pl-0">
            {PROMISES.map((promise, index) => (
              <div
                key={promise.text}
                className={`relative flex items-center gap-5 lg:px-8 ${
                  index < PROMISES.length - 1
                    ? "lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:h-px lg:after:w-10 lg:after:bg-gradient-to-r lg:after:from-[#61a2e5] lg:after:to-[#7644f4]"
                    : ""
                }`}
              >
                <span
                  className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full border bg-white ${promise.border} ${promise.color}`}
                >
                  <promise.icon size={37} strokeWidth={1.8} />
                </span>
                <p className="max-w-[250px] font-bold leading-6 text-navy">
                  {promise.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
