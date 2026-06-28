import {
  ChartNoAxesCombined,
  ClipboardCheck,
  FileCheck,
  Handshake,
  MessageSquare,
  Settings,
  type LucideIcon,
} from "lucide-react";

type WorkStep = {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
};

const STEPS: WorkStep[] = [
  {
    number: 1,
    title: "Understand",
    description:
      "We begin by learning about your business, your objectives, and the regulatory or customer requirements driving your project.",
    icon: MessageSquare,
    gradient: "from-[#22c5f3] via-[#1687ef] to-[#1646ce]",
  },
  {
    number: 2,
    title: "Assess",
    description:
      "We evaluate your current controls, documentation, and governance to identify strengths, gaps, and priorities.",
    icon: ClipboardCheck,
    gradient: "from-[#34d4f4] via-[#168fec] to-[#1260da]",
  },
  {
    number: 3,
    title: "Build",
    description:
      "Together we develop the processes, documentation, and controls needed to establish an effective management system.",
    icon: Settings,
    gradient: "from-[#9b5cf6] via-[#6d28ed] to-[#3320c7]",
  },
  {
    number: 4,
    title: "Prepare",
    description:
      "We conduct internal audits, support management reviews, and prepare your organization for external assessments.",
    icon: FileCheck,
    gradient: "from-[#3b82f6] via-[#235ae3] to-[#173bc7]",
  },
  {
    number: 5,
    title: "Improve",
    description:
      "Compliance is not a one-time project. We help organizations continuously improve their security and governance over time.",
    icon: ChartNoAxesCombined,
    gradient: "from-[#a855f7] via-[#7040ec] to-[#3336d6]",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-[#f8f9ff] py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(70,106,190,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(70,106,190,0.035) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="pointer-events-none absolute -right-40 -top-72 h-[640px] w-[640px] rounded-full border border-[#9dbbfb]/30 shadow-[0_0_0_38px_rgba(157,187,251,0.08),0_0_0_76px_rgba(157,187,251,0.06),0_0_0_114px_rgba(157,187,251,0.04)]" />
      <div className="pointer-events-none absolute -bottom-56 -left-56 h-[430px] w-[430px] rounded-full border border-[#9dbbfb]/30 shadow-[0_0_0_32px_rgba(157,187,251,0.08),0_0_0_64px_rgba(157,187,251,0.06)]" />
      <div
        className="pointer-events-none absolute left-7 top-5 h-16 w-32 opacity-50"
        style={{
          backgroundImage: "radial-gradient(#69a3ff 2px, transparent 2px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-7 right-8 h-24 w-32 opacity-35"
        style={{
          backgroundImage: "radial-gradient(#6e8df2 2px, transparent 2px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="container-x relative !max-w-[1440px]">
        <div className="max-w-[760px]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#1768db]">
            How We Work
          </p>
          <div className="mt-3 h-1 w-44 rounded-full bg-gradient-to-r from-[#19bff0] via-[#2563eb] to-[#7c3aed]" />
          <h2 className="mt-5 text-4xl font-bold leading-none tracking-[-0.04em] text-navy sm:text-5xl lg:text-[4rem]">
            How <span className="text-[#1755d9]">We Work</span>
          </h2>
          <p className="mt-6 max-w-[710px] text-lg font-medium leading-8 text-navy/80 sm:text-xl">
            Every engagement follows a structured methodology designed to
            reduce uncertainty and keep projects moving forward.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-14">
          <div
            aria-hidden="true"
            className="absolute left-[7%] right-[7%] top-[4.15rem] hidden h-0.5 bg-gradient-to-r from-[#168eef] via-[#7136f1] to-[#168eef] xl:block"
          >
            <span className="absolute left-0 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#168eef] shadow" />
            <span className="absolute left-1/4 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#2879ef] shadow" />
            <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#7136f1] shadow" />
            <span className="absolute left-3/4 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#4d5ceb] shadow" />
            <span className="absolute right-0 top-1/2 h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#7136f1] shadow" />
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-5">
            {STEPS.map((step) => (
              <article key={step.number} className="relative pt-[4.6rem]">
                <div className="flex min-h-[292px] flex-col rounded-[1.35rem] border border-[#c8d8f5] bg-white/95 px-6 pb-7 pt-[4.65rem] shadow-[0_16px_38px_rgba(38,74,145,0.13)]">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-lg font-bold text-white shadow-md ${step.gradient}`}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-[#174fd0]">
                      {step.title}
                    </h3>
                  </div>
                  <div className="mx-auto mt-4 flex gap-1.5" aria-hidden="true">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <span
                        key={i}
                        className="h-1 w-1 rounded-full bg-[#4e8df4]"
                      />
                    ))}
                  </div>
                  <p className="mt-5 text-[0.94rem] font-medium leading-[1.55] text-navy/85">
                    {step.description}
                  </p>
                </div>

                <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-full bg-white/95 p-2 shadow-[0_12px_28px_rgba(30,77,170,0.22)] ring-1 ring-[#b9cff8]">
                  <div
                    className={`flex h-[7.15rem] w-[7.15rem] items-center justify-center rounded-full bg-gradient-to-br text-white shadow-inner ring-4 ring-white ${step.gradient}`}
                  >
                    <step.icon size={54} strokeWidth={1.8} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-[900px] items-center gap-5 rounded-[2rem] border border-[#a9c3f5] bg-white/90 px-7 py-4 shadow-[0_14px_35px_rgba(38,74,145,0.12)] sm:px-10">
          <span className="hidden shrink-0 rounded-full bg-white p-2 text-[#2757da] shadow-md ring-1 ring-[#bfd1f5] sm:flex">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#dff2ff] to-[#eee8ff]">
              <Handshake size={34} strokeWidth={2.2} />
            </span>
          </span>
          <span className="hidden h-14 border-l border-dashed border-[#8eb0ed] sm:block" />
          <div>
            <p className="text-lg font-bold text-[#174fd0] sm:text-xl">
              Structured. Collaborative. Built for lasting compliance.
            </p>
            <p className="mt-1 text-sm font-medium leading-6 text-navy/75 sm:text-base">
              We partner with you at every step to deliver clarity, confidence,
              and continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
