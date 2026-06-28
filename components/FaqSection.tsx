import Image from "next/image";
import {
  CircleHelp,
  Headphones,
  Laptop,
  Rocket,
  type LucideIcon,
} from "lucide-react";

type Faq = {
  icon: LucideIcon;
  question: string;
  answer: React.ReactNode;
};

const FAQS: Faq[] = [
  {
    icon: CircleHelp,
    question: "Do you guarantee certification?",
    answer: (
      <>
        No consultant can ethically guarantee certification.
        <br />
        What we do guarantee is a structured implementation approach designed
        to prepare your organization thoroughly for certification.
      </>
    ),
  },
  {
    icon: Laptop,
    question: "Do you work remotely?",
    answer: (
      <>
        Yes.
        <br />
        We support organizations remotely as well as on-site when required.
      </>
    ),
  },
  {
    icon: Rocket,
    question: "Can you help if we are starting from scratch?",
    answer: (
      <>
        Absolutely.
        <br />
        Many organizations begin without a formal Information Security
        Management System.
        <br />
        We guide you through every stage of the journey.
      </>
    ),
  },
  {
    icon: Headphones,
    question: "Do you provide ongoing support?",
    answer: (
      <>
        Yes.
        <br />
        Security and compliance require continuous improvement.
        <br />
        We offer long-term advisory support, internal audits, and governance
        reviews after implementation.
      </>
    ),
  },
];

export default function FaqSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-[#fbfbff]"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[60%] bg-[radial-gradient(circle_at_30%_45%,rgba(120,96,238,0.055),transparent_58%)]" />

      <div className="mx-auto grid max-w-[1536px] lg:min-h-[900px] lg:grid-cols-[56%_44%] xl:min-h-[980px]">
        <div className="relative flex items-center px-6 py-16 sm:px-10 lg:px-12 lg:py-20 xl:px-[4.6rem]">
          <div className="w-full max-w-[715px]">
            <p className="text-sm font-extrabold uppercase tracking-[0.1em] text-[#5a38df] sm:text-base">
              Frequently Asked Questions
            </p>
            <span className="mt-5 block h-0.5 w-10 bg-[#6537ee]" />

            <h2
              id="faq-heading"
              className="mt-7 text-[2.6rem] font-bold leading-[1.08] tracking-[-0.04em] text-[#10194d] sm:text-5xl lg:text-[3.15rem]"
            >
              Clear <span className="text-[#5c38df]">answers.</span>
              <br />
              Real support.
            </h2>

            <div className="mt-10 divide-y divide-[#dcd9ef] sm:mt-12">
              {FAQS.map((faq) => (
                <article
                  key={faq.question}
                  className="grid gap-5 py-7 first:pt-0 sm:grid-cols-[7.4rem_minmax(0,1fr)] sm:gap-6 lg:py-8"
                >
                  <div className="flex items-start justify-start sm:justify-center">
                    <span className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#f0edff] to-[#faf9ff] text-[#6339e4]">
                      <faq.icon size={48} strokeWidth={1.65} />
                    </span>
                  </div>

                  <div className="border-l-2 border-[#6b3bea] pl-6">
                    <h3 className="text-xl font-bold leading-7 tracking-[-0.02em] text-[#5b36dd]">
                      {faq.question}
                    </h3>
                    <p className="mt-1 text-base font-medium leading-[1.68] text-[#111b4d]">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[500px] overflow-hidden rounded-tl-[3.5rem] lg:min-h-0 lg:rounded-bl-[3.5rem]">
          <Image
            src="/MFQ.png"
            alt="A compliance advisor answering a client's questions"
            fill
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
