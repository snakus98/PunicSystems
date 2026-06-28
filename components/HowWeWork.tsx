import Image from "next/image";
import {
  ChartNoAxesCombined,
  ClipboardCheck,
  Handshake,
  Search,
  Settings,
  ShieldCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

type PhilosophyPoint = {
  icon: LucideIcon;
  text: React.ReactNode;
};

type WorkPrinciple = {
  icon: LucideIcon;
  title: string;
  description: React.ReactNode;
  accent: "purple" | "teal";
};

const PHILOSOPHY_POINTS: PhilosophyPoint[] = [
  {
    icon: UsersRound,
    text: (
      <>
        A management system only creates value if{" "}
        <strong>people use it.</strong>
      </>
    ),
  },
  {
    icon: Handshake,
    text: (
      <>
        Our objective is to help you <strong>build trust</strong>—with
        customers, partners, regulators, and your own employees.
      </>
    ),
  },
  {
    icon: ClipboardCheck,
    text: (
      <>
        Our objective is not simply to help you <strong>pass an audit.</strong>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    text: (
      <>
        Certification becomes the <strong>natural outcome</strong> of a
        well-managed security program.
      </>
    ),
  },
];

const WORK_PRINCIPLES: WorkPrinciple[] = [
  {
    icon: UsersRound,
    title: "Practical over theoretical",
    description: (
      <>
        We focus on what works in your <strong>real environment.</strong>
      </>
    ),
    accent: "purple",
  },
  {
    icon: Search,
    title: "Context over checklists",
    description: (
      <>
        We tailor to <strong>your risks</strong>, operations, and business
        reality.
      </>
    ),
    accent: "teal",
  },
  {
    icon: Settings,
    title: "People over process",
    description: (
      <>
        We make systems <strong>easy to adopt</strong> and sustainable for your
        teams.
      </>
    ),
    accent: "purple",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Improvement over compliance",
    description: (
      <>
        We drive <strong>continuous improvement</strong>, not one-time
        projects.
      </>
    ),
    accent: "teal",
  },
  {
    icon: ShieldCheck,
    title: "Trust over certification",
    description: (
      <>
        We help you <strong>earn trust</strong> every day—certification follows
        naturally.
      </>
    ),
    accent: "purple",
  },
];

function PhilosophyPoint({ point }: { point: PhilosophyPoint }) {
  return (
    <div className="grid grid-cols-[3.75rem_minmax(0,1fr)] items-start gap-4">
      <span className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full border border-[#ddd9fb] bg-gradient-to-br from-[#f7f5ff] to-white text-[#5b31ea] shadow-[0_10px_25px_rgba(76,50,196,0.08)]">
        <point.icon size={29} strokeWidth={1.8} />
      </span>
      <p className="pt-1 text-[0.95rem] font-medium leading-6 text-[#10194a] sm:text-base">
        {point.text}
      </p>
    </div>
  );
}

export default function HowWeWork() {
  return (
    <section
      aria-labelledby="philosophy-heading"
      className="relative overflow-hidden bg-[#fbfbff] pb-12 lg:pb-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-6rem] top-14 h-44 w-56 opacity-35"
        style={{
          backgroundImage:
            "repeating-radial-gradient(ellipse at center, transparent 0 14px, #b7a7ff 15px 16px, transparent 17px 29px)",
        }}
      />
      <div className="pointer-events-none absolute -right-48 top-[22rem] h-[31rem] w-[31rem] rounded-full border border-[#d9d1ff] opacity-65 shadow-[0_0_0_32px_rgba(221,215,255,0.28)]" />

      <div className="mx-auto grid max-w-[1536px] lg:min-h-[565px] lg:grid-cols-[47%_53%]">
        <div className="relative min-h-[390px] sm:min-h-[490px] lg:min-h-0">
          <div className="absolute -right-5 inset-y-0 w-[93%] rounded-r-[48%] bg-[#e8e5ff]" />
          <div className="absolute inset-0 overflow-hidden rounded-br-[9rem] sm:rounded-br-[13rem] lg:rounded-br-[18rem] lg:rounded-tr-[10rem]">
            <Image
              src="/bawer.png"
              alt="A team discussing trust, security, and compliance"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 47vw"
              className="object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09152b]/10 via-transparent to-white/5" />
          </div>

          <div className="absolute -bottom-7 right-[12%] z-10 rounded-full bg-white p-3 shadow-[0_16px_36px_rgba(76,45,220,0.22)] ring-1 ring-[#ded9ff] sm:-bottom-9 sm:p-4">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#5730e9] ring-1 ring-[#e4e0ff] sm:h-24 sm:w-24">
              <ShieldCheck size={52} strokeWidth={1.8} />
            </span>
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-7 left-12 h-20 w-24 opacity-45"
            style={{
              backgroundImage:
                "radial-gradient(circle, #8f7cf4 2px, transparent 2.4px)",
              backgroundSize: "16px 16px",
            }}
          />
        </div>

        <div className="relative flex items-center px-6 pb-14 pt-20 sm:px-10 lg:px-12 lg:py-16 xl:px-16">
          <div className="w-full max-w-[700px]">
            <p className="text-sm font-extrabold uppercase tracking-[0.04em] text-[#5130e6] sm:text-base">
              Our Philosophy
            </p>
            <span className="mt-4 block h-0.5 w-10 bg-[#5c35ed]" />
            <h2
              id="philosophy-heading"
              className="mt-6 text-[2.35rem] font-bold leading-[1.06] tracking-[-0.035em] text-[#0e194b] sm:text-5xl xl:text-[3.25rem]"
            >
              Compliance should
              <br />
              never become
              <br />
              <span className="text-[#5a32ea]">shelfware.</span>
            </h2>

            <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 sm:[&>*:nth-child(even)]:border-l sm:[&>*:nth-child(even)]:border-[#e1def3] sm:[&>*:nth-child(even)]:pl-8">
              {PHILOSOPHY_POINTS.map((point, index) => (
                <PhilosophyPoint key={index} point={point} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-x relative z-20 mt-12 !max-w-[1425px] lg:mt-9">
        <div className="rounded-xl border border-white bg-white/95 px-5 pb-10 pt-7 shadow-[0_16px_50px_rgba(43,43,121,0.08)] sm:px-8 lg:min-h-[370px] lg:px-12 lg:pb-11">
          <div className="text-center">
            <p className="text-base font-extrabold uppercase tracking-[0.02em] text-[#5130e6] sm:text-lg">
              How We Work
            </p>
            <span className="mx-auto mt-3 block h-0.5 w-10 bg-[#5b35ed]" />
          </div>

          <div className="relative mt-7">
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-[2.65rem] hidden h-px bg-gradient-to-r from-[#7960ed]/45 via-[#5fcfd9]/55 to-[#7960ed]/45 lg:block" />
            <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {WORK_PRINCIPLES.map((principle, index) => {
                const isPurple = principle.accent === "purple";
                return (
                  <article
                    key={principle.title}
                    className="relative flex flex-col items-center text-center"
                  >
                    <div
                      className={`relative z-10 rounded-full bg-white p-2 shadow-[0_8px_24px_rgba(60,41,164,0.18)] ring-1 ${
                        isPurple ? "ring-[#d8d0ff]" : "ring-[#c9eff2]"
                      }`}
                    >
                      <span
                        className={`flex h-[4.85rem] w-[4.85rem] items-center justify-center rounded-full ${
                          isPurple
                            ? "bg-gradient-to-br from-[#7040ef] to-[#4f23df] text-white"
                            : "bg-[#f5ffff] text-[#08adbd] ring-1 ring-[#bceaf0]"
                        }`}
                      >
                        <principle.icon size={39} strokeWidth={1.8} />
                      </span>
                    </div>

                    {index < WORK_PRINCIPLES.length - 1 && (
                      <span
                        aria-hidden="true"
                        className={`absolute -right-1.5 top-9 z-20 hidden h-3 w-3 rounded-full lg:block ${
                          isPurple ? "bg-[#6135e8]" : "bg-[#0eb3c2]"
                        }`}
                      />
                    )}

                    <h3 className="mt-4 max-w-[190px] text-lg font-bold leading-6 text-[#0c1548]">
                      {principle.title}
                    </h3>
                    <p
                      className={`mt-3 max-w-[215px] text-[0.94rem] font-medium leading-6 text-[#10194a]/88 [&_strong]:font-bold ${
                        isPurple
                          ? "[&_strong]:text-[#5531e8]"
                          : "[&_strong]:text-[#08aebd]"
                      }`}
                    >
                      {principle.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
