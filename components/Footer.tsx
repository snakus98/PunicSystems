import { Instagram, Linkedin, Mail, Phone, ShieldCheck } from "lucide-react";

const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "Services",
    links: [
      "Cyber Security Consultancy",
      "Managed Security",
      "Data Privacy",
      "Penetration Testing",
      "24/7 Incident Response",
    ],
  },
  {
    title: "Company",
    links: ["Services", "Why Punic?", "Industries", "Insights", "Careers"],
  },
  {
    title: "Legal",
    links: [
      "Trust Centre",
      "Privacy Policy",
      "Cookie Policy",
      "Terms of Use",
      "Sitemap",
      "Responsible Disclosure",
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="relative -mt-10 bg-navy text-gallery"
      style={{
        clipPath: "polygon(0 0, 50% 40px, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <div className="container-x pb-12 pt-28">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <div className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-gallery text-navy">
                <ShieldCheck size={23} strokeWidth={2.4} />
              </span>
              <span className="text-3xl font-bold tracking-tight">Punic</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-7 text-gallery/62">
              Cyber resilience, managed security, assurance, and incident
              response for organisations where downtime is not acceptable.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-teal">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gallery/78 transition-colors hover:text-teal"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-sm font-semibold text-teal">Contact Us</h4>
            <ul className="mt-5 space-y-4 text-sm text-gallery/78">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-teal" /> +1 (888) 404-7782
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-teal" /> Get in Touch
              </li>
            </ul>

            <div className="mt-5 flex gap-3">
              {[Linkedin, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="button-focus flex h-9 w-9 items-center justify-center rounded-full bg-teal text-gallery transition-opacity hover:opacity-80"
                  aria-label={idx === 0 ? "LinkedIn" : "Instagram"}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-gallery/10 pt-6">
          <p className="text-xs text-gallery/50">
            Copyright {new Date().getFullYear()} Punic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
