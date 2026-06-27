import { Phone, ChevronDown, ShieldAlert } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-navy-deep text-xs text-gallery">
      <div className="container-x flex h-10 items-center justify-between gap-4">
        <a
          href="#"
          className="button-focus flex items-center gap-1.5 rounded-sm bg-purple px-3 py-1.5 font-semibold text-gallery transition-opacity hover:opacity-90"
        >
          <ShieldAlert size={13} />
          24/7 Incident Response
        </a>
        <div className="flex items-center gap-5">
          <a
            href="tel:+18884047782"
            className="hidden items-center gap-1.5 text-gallery/78 transition-colors hover:text-gallery sm:flex"
          >
            <Phone size={13} />
            +1 (888) 404-7782
          </a>
          <button className="button-focus flex items-center gap-1 text-gallery/78 transition-colors hover:text-gallery">
            <span className="inline-block h-3 w-4 rounded-[2px] bg-gradient-to-b from-purple via-gallery to-teal" />
            Global
            <ChevronDown size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
