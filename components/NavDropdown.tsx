"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type NavDropdownProps = {
  label: string;
  items: { label: string; href: string }[];
};

export default function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const scheduleClose = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={openMenu}
        className="group flex h-20 items-center gap-1 border-b-2 border-transparent text-sm font-semibold text-gallery/84 transition-colors hover:border-teal hover:text-gallery aria-expanded:text-gallery"
      >
        {label}
        <ChevronDown
          size={14}
          className={`opacity-65 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-40 min-w-[280px] rounded-md border border-navy/10 bg-white p-2 shadow-2xl">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-4 py-2.5 text-sm font-medium leading-snug text-navy/80 transition-colors hover:bg-gallery/60 hover:text-purple"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
