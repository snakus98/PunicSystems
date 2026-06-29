"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import ServicesMegaMenu from "@/components/ServicesMegaMenu";
import NavDropdown from "@/components/NavDropdown";

type NavItem =
  | { type: "link"; label: string; href: string }
  | { type: "services" }
  | { type: "dropdown"; label: string; items: { label: string; href: string }[] };

const COMPANY_ITEMS = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
];

const INDUSTRY_ITEMS = [
  { label: "Manufacturing & Industrial IoT (IIoT)", href: "#" },
  { label: "Security & Privacy for NGOs", href: "#" },
  { label: "Security & Compliance for Healthcare Providers", href: "#" },
  { label: "IT", href: "#" },
  { label: "Banking & Financial Services", href: "#" },
];

const NAV: NavItem[] = [
  { type: "link", label: "Home", href: "/" },
  { type: "services" },
  { type: "dropdown", label: "Company", items: COMPANY_ITEMS },
  { type: "dropdown", label: "Industries", items: INDUSTRY_ITEMS },
  { type: "link", label: "Our projects", href: "#" },
  { type: "link", label: "GRC solution", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gallery/10 bg-navy">
      <div className="container-x flex h-20 items-center justify-between">
        <a href="/" className="flex items-center">
          <Image
            src="/punic-logo.png"
            alt="Punic Systems"
            width={1126}
            height={504}
            priority
            className="h-16 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => {
            if (item.type === "services") return <ServicesMegaMenu key="services" />;
            if (item.type === "dropdown")
              return (
                <NavDropdown key={item.label} label={item.label} items={item.items} />
              );
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex h-20 items-center text-sm font-semibold text-gallery/84 transition-colors hover:text-gallery"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="button-focus hidden rounded-sm bg-purple px-5 py-2.5 text-sm font-semibold text-gallery transition-colors hover:bg-purple-dark sm:inline-block"
          >
            Book a Consultation
          </a>
          <button
            className="button-focus text-gallery lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-gallery/10 bg-navy lg:hidden">
          <div className="container-x flex flex-col py-3">
            {NAV.map((item) => {
              if (item.type === "services")
                return (
                  <a
                    key="services"
                    href="/services"
                    className="py-2 text-sm font-semibold text-gallery/85 hover:text-teal"
                  >
                    Services
                  </a>
                );
              if (item.type === "dropdown")
                return (
                  <div key={item.label} className="py-2">
                    <p className="flex items-center gap-1 text-sm font-bold text-gallery">
                      {item.label}
                      <ChevronDown size={14} className="opacity-65" />
                    </p>
                    <div className="mt-1 flex flex-col border-l border-gallery/15 pl-3">
                      {item.items.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="py-1.5 text-sm text-gallery/75 hover:text-teal"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-2 text-sm font-semibold text-gallery/85 hover:text-teal"
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              className="mt-2 rounded-sm bg-purple px-5 py-2.5 text-center text-sm font-semibold text-gallery"
            >
              Book a Consultation
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
