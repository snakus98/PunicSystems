"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Radar,
  FileLock2,
  Crosshair,
  ShieldAlert,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, slugify } from "@/lib/services";

const ICONS: Record<string, LucideIcon> = {
  consultancy: ShieldCheck,
  managed: Radar,
  privacy: FileLock2,
  pentest: Crosshair,
  incident: ShieldAlert,
};

export default function ServicesMegaMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const scheduleClose = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 120);
  };
  const closeNow = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(false);
  };

  const cat = SERVICES[active];

  return (
    <>
      <div onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
        <button
          type="button"
          aria-expanded={open}
          onClick={openMenu}
          className="group flex h-20 items-center gap-1 border-b-2 border-transparent text-sm font-semibold text-gallery/84 transition-colors hover:border-teal hover:text-gallery aria-expanded:text-gallery"
        >
          Services
          <ChevronDown
            size={14}
            className={`opacity-65 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
          className="absolute left-0 right-0 top-full z-40 border-t border-navy/10 bg-white shadow-2xl"
        >
          <div className="container-x grid max-h-[78vh] grid-cols-1 gap-8 overflow-y-auto py-8 lg:grid-cols-[300px_1fr]">
            {/* Left: categories */}
            <div className="flex flex-col rounded-md bg-gallery/60 p-3">
              {SERVICES.map((c, i) => {
                const Icon = ICONS[c.key];
                const isActive = i === active;
                return (
                  <button
                    key={c.key}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`flex items-center gap-3 rounded-md px-4 py-3.5 text-left text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-white text-navy shadow-sm"
                        : "text-navy/70 hover:text-navy"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={isActive ? "text-teal" : "text-teal/70"}
                    />
                    <span className="flex-1">{c.name}</span>
                    {isActive && <ChevronRight size={16} className="text-purple" />}
                  </button>
                );
              })}

              <Link
                href="/services"
                onClick={closeNow}
                className="mt-3 flex items-center gap-1 px-4 py-2 text-sm font-bold text-navy hover:text-purple"
              >
                Overview of all Services <ChevronRight size={15} />
              </Link>
            </div>

            {/* Right: active category content */}
            <div className="lg:pl-6">
              <Link
                href={`/services/${slugify(cat.name)}`}
                onClick={closeNow}
                className="inline-flex items-center gap-1.5 text-lg font-bold text-navy hover:text-purple"
              >
                {cat.overviewTitle}
                <ArrowUpRight size={18} className="text-purple" />
              </Link>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
                {cat.overviewText}
              </p>

              <div className="my-6 h-px bg-navy/10" />

              <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                {cat.groups.map((group) => (
                  <div key={group.heading}>
                    <h4 className="text-sm font-bold text-navy">
                      {group.heading}
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                      {group.links.map((link) => (
                        <li key={link}>
                          <Link
                            href={`/services/${slugify(link)}`}
                            onClick={closeNow}
                            className="block text-sm leading-snug text-navy/75 transition-colors hover:text-purple"
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
