import {
  ArrowRight,
  ShieldCheck,
  Lock,
  Crosshair,
  FileLock2,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  popular: string[];
};

const SERVICES: Service[] = [
  {
    icon: ShieldCheck,
    title: "Cyber Security Consultancy",
    description:
      "Strategic advisory for cloud, enterprise, and operational technology environments, built around the risk profile of essential organisations.",
    popular: [
      "Microsoft Cloud Security Services",
      "Cyber Security Services",
      "Risk Assessment",
    ],
  },
  {
    icon: Lock,
    title: "Managed Security",
    description:
      "Continuous detection, response, threat intelligence, and vulnerability operations run by specialists who understand high-stakes infrastructure.",
    popular: [
      "Managed Detection & Response",
      "Security Operations Centre",
      "Digital Forensics & Incident Response",
    ],
  },
  {
    icon: Crosshair,
    title: "Penetration Testing",
    description:
      "Offensive testing that validates real-world exposure across applications, infrastructure, cloud estates, and human attack paths.",
    popular: [
      "Red Team Assessment",
      "Phishing Assessments",
      "Social Engineering Testing",
    ],
  },
  {
    icon: FileLock2,
    title: "Data Privacy",
    description:
      "Privacy, governance, and compliance support that helps teams protect sensitive data without slowing operational progress.",
    popular: [
      "GDPR Gap Analysis",
      "Data Privacy Maturity Framework",
      "ISO 27701 Consultancy",
    ],
  },
];

function ServiceCard({ icon: Icon, title, description, popular }: Service) {
  return (
    <div className="group flex min-h-[420px] flex-col rounded-sm border border-navy/10 bg-gallery p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-teal/45 hover:shadow-xl">
      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-teal/10 text-teal">
          <Icon size={24} />
        </span>
        <h3 className="text-xl font-bold leading-tight text-navy">{title}</h3>
      </div>

      <p className="mt-6 text-sm leading-7 text-muted">{description}</p>

      <div className="my-6 h-px bg-navy/10" />

      <p className="text-xs font-bold uppercase tracking-[0.18em] text-navy/45">
        Popular services
      </p>
      <ul className="mt-3 space-y-3">
        {popular.map((s) => (
          <li key={s}>
            <a
              href="#"
              className="flex items-center justify-between gap-3 text-sm font-semibold text-navy hover:text-purple"
            >
              {s}
              <ChevronRight
                size={16}
                className="shrink-0 text-teal transition-transform group-hover:translate-x-1"
              />
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="button-focus mt-auto inline-flex items-center justify-center gap-2 rounded-sm bg-navy py-3 text-center text-sm font-semibold text-gallery transition-colors hover:bg-navy-deep"
      >
        View More Services <ArrowRight size={15} />
      </a>
    </div>
  );
}

export default function EssentialIndustries() {
  return (
    <section id="services" className="fine-grid bg-gallery pb-24 pt-12">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-dark">
            End-to-end services
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Protecting Essential Industries
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            Punic provides practical cyber security capability for organisations
            where disruption has real operational, regulatory, and public impact.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
