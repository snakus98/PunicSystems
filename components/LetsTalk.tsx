import Image from "next/image";
import {
  ArrowRight,
  Handshake,
  MessageCircleMore,
  MessageSquareText,
  Target,
  type LucideIcon,
} from "lucide-react";

type Step = {
  number: string;
  title: React.ReactNode;
  icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: (
      <>
        Understand
        <br />
        your objectives
      </>
    ),
    icon: Target,
  },
  {
    number: "02",
    title: (
      <>
        Provide tailored
        <br />
        guidance
      </>
    ),
    icon: MessageSquareText,
  },
  {
    number: "03",
    title: (
      <>
        Build long-term
        <br />
        partnership
      </>
    ),
    icon: Handshake,
  },
];

export default function LetsTalk() {
  return (
    <section
      id="lets-talk"
      aria-labelledby="lets-talk-heading"
      className="relative isolate overflow-hidden bg-[#f8fdff]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_37%_33%,rgba(49,224,244,0.12),transparent_26%),radial-gradient(circle_at_87%_82%,rgba(111,53,244,0.13),transparent_25%),linear-gradient(135deg,#ffffff_8%,#f6fbff_56%,#eafdff_100%)]" />
      <div className="pointer-events-none absolute -left-16 bottom-0 -z-10 h-72 w-72 rotate-[32deg] bg-white/80" />
      <div className="pointer-events-none absolute left-[38%] top-0 -z-10 hidden h-48 w-44 -skew-x-[32deg] bg-[#ddecfa]/65 lg:block" />

      <div className="mx-auto max-w-[1680px]">
        <div className="grid lg:min-h-[680px] lg:grid-cols-[43%_57%]">
          <div className="relative z-10 flex items-center px-6 py-16 sm:px-10 lg:px-16 lg:py-20 xl:px-[5.6rem]">
            <div className="max-w-[590px]">
              <p className="flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.22em] text-[#592cf1] sm:text-base">
                <span className="h-6 w-[3px] rounded-full bg-[#0ccbea]" />
                Let&apos;s Talk
              </p>

              <div className="mt-7 flex items-center gap-5 sm:mt-8">
                <h2
                  id="lets-talk-heading"
                  className="text-[3.25rem] font-bold leading-none tracking-[-0.055em] text-[#06153f] sm:text-[4.4rem] xl:text-[5rem]"
                >
                  Let&apos;s Talk
                </h2>
                <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-[#6840f3] shadow-[0_0_22px_rgba(83,222,240,0.6)] sm:flex">
                  <MessageCircleMore size={35} strokeWidth={1.8} />
                </span>
              </div>

              <div className="mt-8 h-[3px] w-[315px] max-w-[75%] bg-gradient-to-r from-[#05d8df] via-[#5787ff] to-[#6229f3]" />

              <div className="mt-9 space-y-7 text-[1.05rem] font-medium leading-[1.45] text-[#101942] sm:text-[1.18rem]">
                <p>
                  Whether you&apos;re preparing for ISO 27001 certification,
                  strengthening GDPR compliance, or improving your information
                  security governance, we&apos;d be happy to discuss your
                  objectives.
                </p>
                <p>
                  Our first conversation is focused on understanding your
                  organization—not selling a predefined solution.
                </p>
                <p>Let&apos;s build a security program your business can rely on.</p>
              </div>

              <a
                href="#contact"
                className="button-focus group mt-9 inline-flex min-w-[300px] items-center justify-between rounded-lg border-r-4 border-[#10d4e9] bg-[#5520f4] px-8 py-4 text-base font-bold text-white shadow-[0_14px_28px_rgba(83,32,244,0.18)] transition-transform hover:-translate-y-0.5 sm:text-lg"
              >
                Book a Consultation
                <ArrowRight
                  size={24}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden lg:min-h-0">
            <div
              className="absolute inset-0 lg:-left-20"
              style={{
                clipPath:
                  "polygon(17% 0, 100% 0, 100% 84%, 89% 100%, 29% 100%, 0 76%)",
              }}
            >
              <Image
                src="/talk.png"
                alt="A security consultant discussing a client's objectives"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 62vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/20 via-transparent to-transparent" />
            </div>

            <div className="pointer-events-none absolute bottom-7 left-[12%] h-4 w-[95%] -rotate-3 rounded-full bg-[#05ecf5]/55 blur-[8px]" />
            <div className="pointer-events-none absolute bottom-2 left-[31%] h-3 w-[78%] -rotate-6 rounded-full bg-[#6739f5]/55 blur-[9px]" />
          </div>
        </div>

        <div className="relative z-20 grid gap-4 px-6 pb-16 sm:px-10 lg:-mt-1 lg:grid-cols-3 lg:gap-0 lg:px-8 lg:pb-0 xl:px-10">
          {STEPS.map((step, index) => (
            <article
              key={step.number}
              className="relative flex min-h-[205px] items-center gap-6 overflow-visible border border-white/85 bg-white/70 px-7 py-8 shadow-[0_10px_45px_rgba(44,112,145,0.07)] backdrop-blur-sm sm:px-10 lg:border-b-0 lg:px-7 xl:gap-8 xl:px-12"
              style={
                index === 0
                  ? { clipPath: "polygon(12% 0, 91% 0, 100% 100%, 0 100%)" }
                  : index === 1
                    ? { clipPath: "polygon(0 0, 87% 0, 100% 100%, 10% 100%)" }
                    : { clipPath: "polygon(0 0, 100% 0, 91% 100%, 10% 100%)" }
              }
            >
              <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-[3px] border-white bg-white/90 text-[#5626f2] shadow-[0_0_0_3px_rgba(94,228,240,0.24),0_8px_24px_rgba(56,58,162,0.08)]">
                <step.icon size={45} strokeWidth={1.8} />
              </span>

              <div>
                <p className="text-xl font-medium text-[#5828f0]">
                  {step.number}
                </p>
                <h3 className="mt-3 text-lg font-bold leading-[1.35] tracking-[-0.02em] text-[#081641] sm:text-xl">
                  {step.title}
                </h3>
              </div>

              {index < STEPS.length - 1 && (
                <span className="pointer-events-none absolute -right-4 top-1/2 z-30 hidden w-12 -translate-y-1/2 border-t-2 border-dashed border-[#18c6eb] lg:block">
                  <span className="absolute -right-0.5 -top-[5px] h-2 w-2 rotate-45 border-r-2 border-t-2 border-[#18c6eb]" />
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
