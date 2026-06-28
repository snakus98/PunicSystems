import Image from "next/image";
import {
  ChartNoAxesCombined,
  FileText,
  MessagesSquare,
  ShieldCheck,
  Target,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

type Reason = {
  number: number;
  text: string;
  icon: LucideIcon;
  color: string;
  softColor: string;
};

const REASONS: Reason[] = [
  {
    number: 1,
    text: "Senior consultants on every engagement",
    icon: UserCheck,
    color: "text-[#5b2ce5]",
    softColor: "from-[#eee8ff] to-white",
  },
  {
    number: 2,
    text: "Tailored documentation instead of copied templates",
    icon: FileText,
    color: "text-[#6331e8]",
    softColor: "from-[#eee8ff] to-white",
  },
  {
    number: 3,
    text: "Clear communication with technical and executive teams",
    icon: MessagesSquare,
    color: "text-[#5340e9]",
    softColor: "from-[#edeaff] to-white",
  },
  {
    number: 4,
    text: "Practical recommendations your organization can actually implement",
    icon: ChartNoAxesCombined,
    color: "text-[#3b56df]",
    softColor: "from-[#e7eeff] to-white",
  },
  {
    number: 5,
    text: "A focus on long-term resilience rather than short-term certification",
    icon: Target,
    color: "text-[#0faaa9]",
    softColor: "from-[#e2fbf8] to-white",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-16 lg:pb-24 lg:pt-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(76,102,170,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(76,102,170,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="pointer-events-none absolute right-4 top-3 h-20 w-28 opacity-35"
        style={{
          backgroundImage: "radial-gradient(#8569f2 2px, transparent 2px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-32 left-1 h-20 w-28 opacity-25"
        style={{
          backgroundImage: "radial-gradient(#8569f2 2px, transparent 2px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="pointer-events-none absolute -bottom-80 -left-52 h-[520px] w-[520px] rounded-full border border-[#b8a7ff]/30 shadow-[0_0_0_22px_rgba(184,167,255,0.05),0_0_0_44px_rgba(184,167,255,0.045),0_0_0_66px_rgba(184,167,255,0.04)]" />
      <div className="pointer-events-none absolute -bottom-80 -right-52 h-[520px] w-[520px] rounded-full border border-[#61d9df]/25 shadow-[0_0_0_22px_rgba(97,217,223,0.04),0_0_0_44px_rgba(97,217,223,0.035),0_0_0_66px_rgba(97,217,223,0.03)]" />

      <div className="container-x relative !max-w-[1440px]">
        <div className="relative min-h-[500px] lg:min-h-[520px]">
          <div className="relative z-10 max-w-[650px] pt-3 lg:pt-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6535dc] sm:text-base">
              Why Organizations Choose Us
            </p>
            <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#6331e8] to-[#8b5cf6]" />

            <h2 className="mt-8 text-[2.65rem] font-bold leading-[1.08] tracking-[-0.035em] text-navy sm:text-5xl lg:text-[3.75rem]">
              Because they want{" "}
              <span className="text-[#653be2]">experienced advisors—</span>
              <br />
              not template sellers.
            </h2>

            <p className="mt-9 max-w-[530px] text-lg font-medium leading-8 text-navy/70 sm:text-xl">
              We believe every organization deserves a security program built
              around its own risks, culture, and business objectives.
            </p>
            <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-[#6233e9] to-[#8b5cf6]" />
          </div>

          <div className="relative mt-10 h-[310px] overflow-hidden rounded-[1.75rem] lg:absolute lg:-right-5 lg:top-0 lg:mt-0 lg:h-[520px] lg:w-[61%] lg:overflow-visible lg:rounded-none">
            <Image
              src="/ceazceazea.png"
              alt="Experienced security advisors meeting with a client"
              fill
              sizes="(max-width: 1024px) 100vw, 61vw"
              className="object-cover object-center lg:object-[52%_center]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/35 to-transparent lg:via-white/10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/75 to-transparent" />
          </div>
        </div>

        <div className="relative mt-12 lg:-mt-8 lg:pt-36">
          <div className="absolute left-1/2 top-0 z-20 hidden -translate-x-1/2 rounded-full bg-white/95 p-3 shadow-[0_18px_45px_rgba(71,56,180,0.16)] ring-1 ring-[#d4cdfb] lg:block">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#f4f0ff] to-white text-[#5b2ce5] ring-1 ring-[#d9d1fa]">
              <ShieldCheck size={62} strokeWidth={1.8} />
            </div>
          </div>

          <svg
            aria-hidden="true"
            viewBox="0 0 1000 220"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-[5%] right-[5%] top-0 hidden h-[220px] w-[90%] lg:block"
          >
            <defs>
              <linearGradient id="reason-line" x1="0" x2="1">
                <stop offset="0" stopColor="#8b5cf6" stopOpacity="0.45" />
                <stop offset="0.5" stopColor="#6953e9" stopOpacity="0.5" />
                <stop offset="1" stopColor="#25b8c3" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path d="M500 122 Q395 125 56 192" fill="none" stroke="url(#reason-line)" strokeWidth="1.4" />
            <path d="M500 122 Q440 132 278 192" fill="none" stroke="url(#reason-line)" strokeWidth="1.4" />
            <path d="M500 122 L500 192" fill="none" stroke="url(#reason-line)" strokeWidth="1.4" />
            <path d="M500 122 Q560 132 722 192" fill="none" stroke="url(#reason-line)" strokeWidth="1.4" />
            <path d="M500 122 Q605 125 944 192" fill="none" stroke="url(#reason-line)" strokeWidth="1.4" />
          </svg>

          <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {REASONS.map((reason) => (
              <article
                key={reason.number}
                className="flex flex-col items-center text-center"
              >
                <div className="rounded-full bg-white p-2 shadow-[0_12px_30px_rgba(61,71,155,0.14)] ring-1 ring-[#d7def2]">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${reason.softColor} ${reason.color} ring-1 ring-[#e2e6f3]`}
                  >
                    <reason.icon size={39} strokeWidth={1.9} />
                  </div>
                </div>
                <span
                  className={`mt-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-current bg-white text-base font-bold ${reason.color}`}
                >
                  {reason.number}
                </span>
                <p className="mt-4 max-w-[235px] text-base font-semibold leading-6 text-navy lg:text-[1.02rem]">
                  {reason.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
