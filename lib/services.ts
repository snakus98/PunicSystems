export type ServiceGroup = { heading: string; links: string[] };

export type ServiceCategory = {
  key: string;
  name: string;
  overviewTitle: string;
  overviewText: string;
  groups: ServiceGroup[];
};

export const SERVICES: ServiceCategory[] = [
  {
    key: "consultancy",
    name: "Consultancy Services",
    overviewTitle: "Services Overview",
    overviewText:
      "Helping organizations implement, audit, and maintain internationally recognized management systems and compliance frameworks.",
    groups: [
      {
        heading: "Management System Implementation",
        links: [
          "ISO/IEC 27001 – Information Security Management",
          "ISO/IEC 42001 – Artificial Intelligence Management",
          "ISO/IEC 27701 – Privacy Information Management",
          "ISO 22301 – Business Continuity Management",
          "ISO 37301 – Compliance Management",
          "ISO 31000 – Risk Management",
        ],
      },
      {
        heading: "Internal Audit & Assurance",
        links: [
          "ISO/IEC 27001 Internal Audits",
          "ISO/IEC 42001 Internal Audits",
          "ISO/IEC 27701 Internal Audits",
          "ISO 22301 Internal Audits",
          "Certification Readiness Assessments",
          "Independent Compliance Reviews",
        ],
      },
      {
        heading: "Governance, Risk & Compliance (GRC)",
        links: [
          "Governance Framework Development",
          "Enterprise Risk Management",
          "Compliance Gap Assessments",
          "Risk Assessments",
          "Policy & Procedure Development",
          "Management Review Support",
        ],
      },
      {
        heading: "Regulatory Compliance",
        links: [
          "GDPR Compliance",
          "NIS2 Readiness",
          "DORA Readiness",
          "EU AI Act Readiness",
          "Regulatory Gap Analysis",
          "Compliance Roadmaps",
        ],
      },
      {
        heading: "Certification Support",
        links: [
          "Gap Analysis",
          "ISMS Documentation Development",
          "Statement of Applicability (SoA)",
          "Corrective Action Support",
          "Certification Preparation",
          "Surveillance Audit Support",
        ],
      },
      {
        heading: "Advisory Services",
        links: [
          "Virtual Information Security Manager (vISM)",
          "Compliance-as-a-Service",
          "Executive Compliance Advisory",
          "Security Governance Consulting",
          "Ongoing Compliance Support",
          "Awareness & Executive Workshops",
        ],
      },
      {
        heading: "Frameworks We Support",
        links: [
          "ISO/IEC 27001",
          "ISO/IEC 42001",
          "ISO/IEC 27701",
          "ISO 22301",
          "ISO 37301",
          "ISO 31000",
          "GDPR",
          "NIS2",
          "DORA",
          "EU AI Act",
        ],
      },
    ],
  },
  {
    key: "managed",
    name: "Managed Security",
    overviewTitle: "Managed Security Overview",
    overviewText:
      "Secure your organisation 24/7 with the industry-leading expertise, methodologies, and cyber threat intelligence capabilities of a managed security services provider.",
    groups: [
      {
        heading: "Managed Security Services",
        links: [
          "Agentic SOC",
          "Managed Detection & Response",
          "Operational Technology (OT) SOC",
          "Vulnerability Management Services",
          "Security Operations Centre",
          "Security Information and Event Management (SIEM)",
          "Cyber Threat Intelligence",
          "Punic Defend",
        ],
      },
    ],
  },
  {
    key: "privacy",
    name: "Data Privacy",
    overviewTitle: "Data Privacy Overview",
    overviewText:
      "Keep pace with evolving regulatory and compliance demands and build trust in the personal data being used by your organisation with Punic's data privacy services.",
    groups: [
      {
        heading: "Data Privacy Services",
        links: [
          "ISO 27701 Consultancy",
          "GDPR Gap Analysis",
          "Data Privacy Maturity Framework",
          "ISO 27018 Consultancy",
          "Data Protection Officer as a Service",
          "Data Privacy Audit",
          "GDPR Data Mapping",
          "Data Privacy Consultancy",
          "Microsoft Purview",
          "Cookie Consent Manager",
          "Managed Data Security",
        ],
      },
    ],
  },
  {
    key: "incident",
    name: "24/7 Incident Response",
    overviewTitle: "24/7 Incident Response Overview",
    overviewText:
      "Our incident response specialists are available 24/7 to identify, contain, and eliminate breaches within your infrastructure.",
    groups: [
      {
        heading: "Incident Response Services",
        links: [
          "Digital Forensics & Incident Response",
          "24/7 Incident Response Services",
          "Cyber Incident Exercising",
          "Compromise Assessment Services",
        ],
      },
      {
        heading: "Resources",
        links: [
          "Cyber Incident Response Quick Action Flowchart",
          "On Demand: What Happens, Why it Happens, How to Respond",
        ],
      },
    ],
  },
];

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Resolve a slug back to its human-readable service name (or null). */
export function findServiceName(slug: string): string | null {
  for (const cat of SERVICES) {
    if (slugify(cat.name) === slug) return cat.name;
    for (const group of cat.groups) {
      for (const link of group.links) {
        if (slugify(link) === slug) return link;
      }
    }
  }
  return null;
}
