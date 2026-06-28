import Image from "next/image";
import {
  Landmark,
  LockKeyhole,
  MessageSquareText,
  TrendingUp,
  UserRound,
  type LucideIcon,
} from "lucide-react";

type Reason = {
  icon: LucideIcon;
  number: string;
  text: string;
  color: string;
  background: string;
};

const REASONS: Reason[] = [
  {
    icon: UserRound,
    number: "01",
    text: "A customer requires it.",
    color: "text-[#0bbbd4]",
    background: "bg-[#dcf8fc]",
  },
  {
    icon: MessageSquareText,
    number: "02",
    text: "An enterprise prospect asks difficult security questions.",
    color: "text-[#377cf5]",
    background: "bg-[#edf2ff]",
  },
  {
    icon: Landmark,
    number: "03",
    text: "A regulator expects accountability.",
    color: "text-[#7847f4]",
    background: "bg-[#f1ebff]",
  },
  {
    icon: TrendingUp,
    number: "04",
    text: "Or leadership wants stronger governance before the business grows further.",
    color: "text-[#7847f4]",
    background: "bg-[#f1ebff]",
  },
];

const dots =
  "radial-gradient(circle, rgba(27,102,173,0.58) 1.5px, transparent 1.7px)";

export default function WhyCompliance() {
  return (
    <section
      id="why-compliance"
      className="relative overflow-hidden bg-[#f8faff] py-16 sm:py-20 lg:py-24"
    >
      <div className="fine-grid pointer-events-none absolute right-0 top-0 h-full w-[24%] opacity-50" />
      <div className="pointer-events-none absolute right-[-12rem] top-[7rem] hidden h-[48rem] w-[48rem] rounded-full border border-[#7658ff]/25 xl:block" />
      <div className="pointer-events-none absolute right-[-6rem] top-[9.5rem] hidden h-[42rem] w-[42rem] rounded-full border border-[#1fc7df]/25 xl:block" />

      <div className="container-x relative !max-w-[1420px]">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
          <div className="relative z-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#11adcf]">
              Why Compliance
            </p>
            <h2 className="mt-5 max-w-[650px] text-[2.2rem] font-bold leading-[1.03] tracking-[-0.035em] text-navy min-[430px]:text-[2.65rem] sm:text-5xl xl:text-[3.65rem]">
              Compliance Should
              <br className="hidden sm:block" /> Help You Grow—
              <br />
              <span className="bg-gradient-to-r from-[#12c7d9] via-[#358af0] to-[#7146f5] bg-clip-text text-transparent">
                Not Slow You Down.
              </span>
            </h2>

            <p className="mt-6 max-w-[520px] text-base leading-7 text-navy/68 sm:text-lg">
              Many organizations pursue ISO 27001 or GDPR compliance because
              they have to.
            </p>

            <ol className="relative mt-7 space-y-3 pl-7 sm:pl-8">
              <span
                aria-hidden="true"
                className="absolute bottom-8 left-[7px] top-8 border-l border-dashed border-[#8fb5dc]/55 sm:left-[8px]"
              />
              {REASONS.map((reason) => (
                <li key={reason.number} className="relative">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[1.75rem] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-current bg-[#f8faff] sm:-left-8 ${reason.color}`}
                  />
                  <div className="grid min-h-[76px] grid-cols-[3rem_1.7rem_minmax(0,1fr)] items-center gap-2.5 rounded-2xl border border-[#d9e0eb] bg-white px-3 py-3 shadow-[0_8px_20px_rgba(22,46,80,0.07)] min-[430px]:grid-cols-[3.25rem_2.2rem_minmax(0,1fr)] min-[430px]:gap-3 min-[430px]:px-4 sm:grid-cols-[3.25rem_2.6rem_minmax(0,1fr)] sm:gap-4">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${reason.background} ${reason.color}`}
                    >
                      <reason.icon size={24} strokeWidth={2.2} />
                    </span>
                    <span className={`text-base font-bold ${reason.color}`}>
                      {reason.number}
                    </span>
                    <span className="min-w-0 text-[0.78rem] font-semibold leading-5 text-navy/88 min-[430px]:text-sm sm:text-base sm:leading-6">
                      {reason.text}
                    </span>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-7 max-w-[570px] space-y-4 text-base leading-7 text-navy/68">
              <p>
                Too often, compliance becomes a collection of generic
                templates, unnecessary paperwork, and processes nobody follows.
              </p>
              <p className="font-bold text-navy">
                We believe there is a better way.
              </p>
              <p>
                We help organizations build information security and privacy
                programs that are practical, auditable, and aligned with how
                their business actually operates.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[760px] lg:mt-16">
            <div
              aria-hidden="true"
              className="absolute -left-3 -top-20 hidden h-20 w-20 opacity-80 sm:block"
              style={{ backgroundImage: dots, backgroundSize: "18px 18px" }}
            />
            <div className="relative min-h-[510px] overflow-hidden rounded-[1.6rem] border border-white/80 bg-[#d9e8f3] shadow-[0_24px_60px_rgba(14,42,78,0.16)] sm:min-h-[640px] lg:min-h-[680px] xl:min-h-[720px]">
              <Image
                src="/nab.png"
                alt="Security and compliance specialists in a strategy meeting"
                fill
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05172a]/10 via-transparent to-white/5" />
              <div
                aria-hidden="true"
                className="absolute bottom-5 left-4 h-40 w-20 opacity-90"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(22,213,231,0.9) 2px, transparent 2.3px)",
                  backgroundSize: "15px 15px",
                }}
              />
            </div>

            <div className="relative z-10 mx-auto -mt-16 flex w-[88%] max-w-[390px] items-center gap-4 rounded-3xl border border-white bg-white/95 p-5 shadow-[0_20px_45px_rgba(20,42,82,0.18)] backdrop-blur sm:absolute sm:-bottom-12 sm:left-1/2 sm:mt-0 sm:-translate-x-1/2 sm:p-6 xl:-bottom-16">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1bcce4] via-[#397ff3] to-[#7643f5] text-white shadow-lg shadow-[#4b70ef]/20">
                <LockKeyhole size={29} />
              </span>
              <div>
                <p className="font-bold text-navy">Security. Trust. Growth.</p>
                <p className="mt-1 text-sm leading-6 text-navy/62">
                  Build compliance into your business advantage.
                </p>
                <div className="mt-3 h-0.5 w-full rounded-full bg-gradient-to-r from-[#17cddd] to-[#7147f7]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
