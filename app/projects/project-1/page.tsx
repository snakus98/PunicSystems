import Image from "next/image";
import { ClipboardCheck, Crosshair, FileText, UsersRound } from "lucide-react";
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
    </main>
  );
}
