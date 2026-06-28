const FAQS = [
  {
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
      id="faq"
      aria-labelledby="faq-heading"
      className="relative isolate min-h-[880px] overflow-hidden bg-[#fbfaff] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.96)_0%,rgba(248,247,255,0.93)_52%,rgba(239,236,255,0.92)_100%)]" />

      <div className="pointer-events-none absolute -right-[155px] -top-[170px] -z-10 h-[470px] w-[470px] rounded-full border-2 border-[#b8a9ff]/75 sm:-right-[105px] sm:-top-[155px] sm:h-[520px] sm:w-[520px]">
        <span className="absolute inset-[54px] rounded-full bg-[#e9e4ff]/70" />
      </div>
      <div className="pointer-events-none absolute -bottom-[210px] -left-[160px] -z-10 h-[420px] w-[420px] rounded-full bg-[#e8e3ff]/85 sm:-bottom-[230px] sm:-left-[120px] sm:h-[480px] sm:w-[480px]" />

      <DotGrid className="left-8 top-10 sm:left-12" />
      <DotGrid className="bottom-10 right-8 sm:right-12" />

      <div className="mx-auto max-w-[930px]">
        <header className="text-center">
          <h2
            id="faq-heading"
            className="text-[2.45rem] font-bold leading-tight tracking-[-0.045em] text-[#17104f] sm:text-5xl lg:text-[3.45rem]"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-5 text-base font-medium leading-7 text-[#64708f] sm:text-lg">
            Answers to the most common questions about our ISO 27001 service.
          </p>
        </header>

        <div className="mt-10 space-y-3.5 sm:mt-11">
          {FAQS.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group overflow-hidden rounded-2xl border border-transparent bg-white/95 shadow-[0_8px_24px_rgba(45,35,105,0.055)] open:border-[#c8bcff] open:shadow-[0_12px_32px_rgba(76,50,180,0.08)]"
            >
              <summary className="flex min-h-[82px] cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-left marker:hidden sm:min-h-[86px] sm:px-8 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-6">
                  <span className="relative hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#6c4bff] text-[#6847f5] group-open:flex group-open:border-transparent group-open:bg-[#6847f5] group-open:text-white sm:flex">
                    <span className="h-[2px] w-3.5 rounded-full bg-current" />
                    <span className="absolute h-3.5 w-[2px] rounded-full bg-current group-open:hidden" />
                  </span>
                  <span className="text-lg font-bold leading-snug tracking-[-0.02em] text-[#101848] sm:text-[1.3rem]">
                    {faq.question}
                  </span>
                </span>

                <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#6c4bff] text-[#6847f5] group-open:border-transparent group-open:bg-[#6847f5] group-open:text-white sm:hidden">
                  <span className="h-[2px] w-3.5 rounded-full bg-current" />
                  <span className="absolute h-3.5 w-[2px] rounded-full bg-current group-open:hidden" />
                </span>
              </summary>

              <div className="border-t border-[#d8d1fa] px-6 py-7 sm:px-10 sm:py-8">
                <p className="text-[0.98rem] font-medium leading-[1.72] text-[#333b57] sm:text-[1.05rem]">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function DotGrid({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 grid grid-cols-6 gap-5 ${className}`}
    >
      {Array.from({ length: 30 }).map((_, index) => (
        <span
          key={index}
          className="h-1 w-1 rounded-full bg-[#8b76f5]/65"
        />
      ))}
    </div>
  );
}
