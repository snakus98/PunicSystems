"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import ServicesMegaMenu from "@/components/ServicesMegaMenu";

const NAV = [
  "Services",
  "Why Punic?",
  "Industries",
  "Insights",
  "Webinars & Events",
];


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gallery/10 bg-navy">
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#" className="flex items-center">
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
          {NAV.map((item) =>
            item === "Services" ? (
              <ServicesMegaMenu key={item} />
            ) : (
              <a
                key={item}
                href="#"
                className="group flex h-20 items-center gap-1 border-b-2 border-transparent text-sm font-semibold text-gallery/84 transition-colors hover:border-teal hover:text-gallery"
              >
                {item}
                <ChevronDown
                  size={14}
                  className="opacity-65 transition-transform group-hover:rotate-180"
                />
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="button-focus hidden rounded-sm bg-purple px-5 py-2.5 text-sm font-semibold text-gallery transition-colors hover:bg-purple-dark sm:inline-block"
          >
            Contact Us
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
            {NAV.map((item) => (
              <a
                key={item}
                href="#"
                className="py-2 text-sm font-semibold text-gallery/85 hover:text-teal"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 rounded-sm bg-purple px-5 py-2.5 text-center text-sm font-semibold text-gallery"
            >
              Contact Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
