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
    name: "Cyber Security Consultancy",
    overviewTitle: "Cyber Security Consultancy Overview",
    overviewText:
      "Our services cover on-premise, cloud and operational technology environments and can be leveraged to support transformation programmes or meet specific industry requirements.",
    groups: [
      {
        heading: "Cyber Security Services",
        links: [
          "Microsoft Services",
          "Cyber Security Audit",
          "Cyber Security Architecture",
          "Cyber Security Merger and Acquisition Services",
          "Cloud Security Posture Management",
          "Information Security Office as a Service (ISOS)",
          "NCSC Assured Services",
          "Risk Assessment",
          "Risk Management",
          "Endpoint Security Posture Assessment",
          "Operational Technology Services",
          "Compliance-as-a-Service",
        ],
      },
      {
        heading: "Cyber Security Frameworks",
        links: [
          "ISO 27001",
          "ISO 22301",
          "ISO 9001",
          "PCI DSS Consultancy",
          "NCSC Cyber Assessment Framework (CAF)",
          "Defence Cyber Certification (DCC)",
        ],
      },
      {
        heading: "AI Security Consulting Services",
        links: [
          "AI Readiness Assessment & Strategy Services",
          "AI Governance, Risk Management & Compliance Services",
          "AI Architecture Design & Engineering Services",
          "AI Security Controls & Implementation Services",
          "AI Validation, Testing & Assurance Services",
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
    key: "pentest",
    name: "Penetration Testing",
    overviewTitle: "Penetration Testing Overview",
    overviewText:
      "Assess the security of your organisation's network from an internal and external perspective by completing a penetration test with Punic's highly certified and experienced offensive security experts.",
    groups: [
      {
        heading: "Penetration Testing Services",
        links: [
          "Wireless Penetration Testing",
          "Red Team Assessment",
          "Open Source Intelligence",
          "Phishing Assessments",
          "Social Engineering Testing",
          "Mobile Application Penetration Testing",
          "Web Application Testing",
          "Infrastructure Penetration Testing",
          "Cloud Infrastructure Assessments",
          "AI Penetration Testing",
        ],
      },
    ],
  },
  {
    key: "incident",
    name: "24/7 Incident Response",
    overviewTitle: "24/7 Incident Response Overview",
    overviewText:
      "Our cyber security incident response specialists are available 24/7 to identify, contain, and eliminate breaches within your infrastructure.",
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
