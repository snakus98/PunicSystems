import Image from "next/image";
import {
  Bell,
  Building2,
  Car,
  ClipboardCheck,
  CloudCog,
  Database,
  Factory,
  FileCheck2,
  FileSearch,
  HeartPulse,
  Route,
  ShieldCheck,
  Target,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

type IconItem = {
  icon: LucideIcon;
  label: string;
};

const industries: IconItem[] = [
  { icon: Building2, label: "Banking & Financial Services" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Car, label: "Automotive" },
  { icon: CloudCog, label: "Technology & SaaS" },
  { icon: UsersRound, label: "Professional Services" },
  { icon: Factory, label: "Manufacturing" },
];

const deliverables: IconItem[] = [
  { icon: FileCheck2, label: "Information Security Policies" },
  { icon: ClipboardCheck, label: "Risk Register" },
  { icon: Database, label: "Asset Inventory" },
  { icon: ClipboardCheck, label: "Statement of Applicability" },
  { icon: ShieldCheck, label: "Risk Treatment Plan" },
  { icon: Bell, label: "Incident Response Procedures" },
  { icon: UsersRound, label: "Supplier Security Processes" },
  { icon: FileSearch, label: "Internal Audit Reports" },
  { icon: UsersRound, label: "Management Review Documentation" },
  { icon: Route, label: "Compliance Roadmap" },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#4d2fe0]">
        {children}
      </p>
      <span className="mt-4 block h-0.5 w-9 bg-[#6542f1]" />
    </div>
  );
}

function IndustryCard({ icon: Icon, label }: IconItem) {
  return (
    <div className="flex min-h-[98px] items-center gap-5 rounded-md border border-[#dddaf6] bg-white/95 px-7 py-5 shadow-[0_10px_30px_rgba(51,35,130,0.04)]">
      <Icon
        aria-hidden="true"
        className="h-11 w-11 shrink-0 stroke-[1.8] text-[#5937e6]"
      />
      <span className="text-[15px] font-semibold leading-5 text-[#111c53]">
        {label}
      </span>
    </div>
  );
}

function DeliverableCard({ icon: Icon, label }: IconItem) {
  return (
    <div className="flex min-h-[82px] items-center gap-5 rounded-md border border-[#e0def5] bg-white/90 px-5 py-3 shadow-[0_8px_24px_rgba(51,35,130,0.035)]">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f2f0ff]">
        <Icon
          aria-hidden="true"
          className="h-7 w-7 stroke-[1.8] text-[#5740eb]"
        />
      </span>
      <span className="text-[15px] font-semibold leading-5 text-[#101a4a]">
        {label}
      </span>
    </div>
  );
}

export default function IndustriesDeliverables() {
  return (
    <div className="bg-[#fefeff] pt-12 lg:pt-16">
      <section className="relative isolate overflow-hidden bg-[#fefeff] pb-12 pt-20 sm:pt-24 lg:pb-11 lg:pt-0">
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full border border-[#cfc9fb] opacity-70" />
        <div className="industry-dots pointer-events-none absolute bottom-5 right-8 hidden h-20 w-24 opacity-70 lg:block" />

        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[335px] lg:left-[47%] lg:h-[335px]">
          <Image
            src="/cazxza1.png"
            alt="A professional team collaborating in a modern office"
            fill
            sizes="(min-width: 1024px) 53vw, 100vw"
            className="object-cover object-[50%_38%] opacity-20 lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fefeff] via-[#fefeff]/30 to-transparent lg:-left-24" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fefeff] to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-[1536px] px-5 sm:px-8 lg:px-[5.1%]">
          <div className="max-w-[545px]">
            <SectionEyebrow>Industries</SectionEyebrow>
            <h2 className="mt-5 text-[36px] font-bold leading-[1.15] tracking-[-0.035em] text-[#101b50] sm:text-[40px]">
              Our experience spans
              <span className="block text-[#5638dc]">multiple industries.</span>
            </h2>
            <p className="mt-5 text-[15px] leading-6 text-[#222d54]">
              Our experience includes organizations in the IT Services and
              Non-Governmental Organization (NGO) sectors.
            </p>
            <p className="mt-4 text-[15px] leading-6 text-[#222d54]">
              Our methodology is equally suited for organizations operating in
              regulated and security-sensitive environments, including:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {industries.map((industry) => (
              <IndustryCard key={industry.label} {...industry} />
            ))}
          </div>

          <p className="mt-6 border-l-2 border-[#6542f1] pl-4 text-[15px] leading-6 text-[#253054]">
            Every industry has different operational challenges.
            <strong className="ml-2 font-bold text-[#4e34d6]">
              Our approach adapts to your business—not the other way around.
            </strong>
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#f6f5ff] py-9 lg:py-11">
        <div className="industry-dots pointer-events-none absolute bottom-12 right-28 hidden h-20 w-24 opacity-70 lg:block" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-48 w-48 rounded-full bg-[#e3ddff] opacity-80" />

        <div className="relative mx-auto w-full max-w-[1536px] px-5 sm:px-8 lg:px-[5.1%]">
          <div className="grid gap-10 lg:grid-cols-[385px_1fr] lg:gap-12">
          <div>
            <SectionEyebrow>What clients receive</SectionEyebrow>
            <h2 className="mt-5 text-[34px] font-bold leading-[1.15] tracking-[-0.035em] text-[#111d51] sm:text-[38px]">
              Tangible deliverables.
              <span className="block text-[#5638dc]">Practical impact.</span>
            </h2>
            <p className="mt-5 text-[15px] leading-6 text-[#222d54]">
              Every project delivers tangible outcomes.
              <br />
              Depending on your engagement, this may include:
            </p>

            <div className="relative mt-6 h-[220px] overflow-hidden rounded-md sm:h-[260px] lg:h-[230px] lg:w-[420px]">
              <Image
                src="/cazxza2.png"
                alt="Information security policy framework documents"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover object-[55%_48%]"
              />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#f6f5ff] to-transparent" />
            </div>
          </div>

          <div className="pt-1">
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {deliverables.map((deliverable) => (
                <DeliverableCard key={deliverable.label} {...deliverable} />
              ))}
            </div>
          </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-5 rounded-xl bg-[#ece9ff] px-6 py-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5632d9] text-white shadow-[0_8px_24px_rgba(86,50,217,0.25)]">
              <Target aria-hidden="true" className="h-7 w-7 stroke-[2]" />
            </span>
            <p className="text-center text-[17px] leading-6 text-[#17204f]">
              More importantly, your team understands how these documents support
              <strong className="ml-1 font-bold text-[#4d32d3]">
                day-to-day operations—not just certification.
              </strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
