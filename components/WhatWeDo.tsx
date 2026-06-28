"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Check,
  Users,
  Landmark,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

const ROTATE_MS = 7000;

/* ---------- shared bits ---------- */

function Eyebrow() {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2563eb]">
        What We Do
      </p>
      <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#22d3ee] via-[#3b82f6] to-[#6e29f6]" />
    </div>
  );
}

function CheckItem({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3b82f6] to-[#6e29f6] text-white">
        <Check size={14} strokeWidth={3} />
      </span>
      <span className="text-sm font-medium leading-6 text-navy">{label}</span>
      <span className="mt-3 hidden h-px flex-1 self-start border-b border-dotted border-navy/20 sm:block" />
    </li>
  );
}

function ServiceCheckItem({ label }: { label: string }) {
  return (
    <li className="grid min-h-12 grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-3 border-b border-dashed border-[#a9c2e8]/75 pb-2.5 pt-1">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#168eef] to-[#6e29f6] text-white shadow-[0_4px_10px_rgba(59,130,246,0.22)]">
        <Check size={14} strokeWidth={3} />
      </span>
      <span className="text-sm font-semibold leading-6 text-navy">{label}</span>
    </li>
  );
}

/* ---------- image-based slide (ISO / GDPR) ---------- */

type ImageSlideData = {
  titleTop: string;
  titleBottom: string;
  lead: string;
  paragraph: string;
  listLabel: string;
  items: string[];
  image: string;
  alt: string;
};

function ImageSlide({ data }: { data: ImageSlideData }) {
  const columnLength = Math.ceil(data.items.length / 2);
  const alignedItems = Array.from({ length: columnLength }).flatMap(
    (_, row) => [data.items[row], data.items[row + columnLength]]
  );

  return (
    <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col justify-center">
        <Eyebrow />
        <h2 className="mt-6 text-4xl font-bold leading-[1.02] sm:text-5xl">
          <span className="text-navy">{data.titleTop} </span>
          <span className="bg-gradient-to-r from-[#3b82f6] to-[#6e29f6] bg-clip-text text-transparent">
            {data.titleBottom}
          </span>
        </h2>

        <p className="mt-6 text-lg font-bold text-navy">{data.lead}</p>
        <p className="mt-3 max-w-lg text-base leading-7 text-navy/70">
          {data.paragraph}
        </p>

        <div className="mt-7 flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#3b82f6] text-[#3b82f6]">
            <Users size={18} />
          </span>
          <span className="text-lg font-bold text-[#2563eb]">
            {data.listLabel}
          </span>
        </div>

        <ul className="mt-5 space-y-2 sm:hidden">
          {data.items.map((i) => (
            <ServiceCheckItem key={i} label={i} />
          ))}
        </ul>

        <ul className="mt-5 hidden grid-cols-2 gap-x-10 sm:grid">
          {alignedItems.map((item, index) => (
            <ServiceCheckItem key={`${item ?? "empty"}-${index}`} label={item ?? ""} />
          ))}
        </ul>
      </div>

      <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-navy/8 shadow-xl shadow-navy/10 lg:min-h-[520px]">
        <Image
          src={data.image}
          alt={data.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
        />
      </div>
    </div>
  );
}

/* ---------- tri-card slide (Governance / Assurance / Awareness) ---------- */

type TriCard = {
  icon: LucideIcon;
  gradient: string;
  titleColor: string;
  borderColor: string;
  title: string;
  lead: string;
  paragraph: string;
  items: string[];
};

const TRI_CARDS: TriCard[] = [
  {
    icon: Landmark,
    gradient: "from-[#18bdf4] to-[#1557d8]",
    titleColor: "text-[#0d47b8]",
    borderColor: "from-[#0ea5e9] via-[#67e8f9] to-transparent",
    title: "Information Security Governance",
    lead: "Strong governance allows security to support business decisions instead of slowing them down.",
    paragraph:
      "We help leadership establish clear security responsibilities, risk management processes, and continuous improvement programs aligned with international best practices.",
    items: [
      "Clear security responsibilities",
      "Risk management processes",
      "Continuous improvement programs",
    ],
  },
  {
    icon: ClipboardCheck,
    gradient: "from-[#9b5cf6] to-[#5b18d8]",
    titleColor: "text-[#5b21d2]",
    borderColor: "from-[#6d28d9] via-[#a78bfa] to-transparent",
    title: "Internal Audits",
    lead: "An internal audit should provide confidence—not surprises.",
    paragraph:
      "Our independent assessments identify opportunities for improvement before certification audits or customer assessments.",
    items: [
      "Independent assessments",
      "Improvement opportunities",
      "Certification readiness",
    ],
  },
  {
    icon: Users,
    gradient: "from-[#4b8cff] to-[#143bcb]",
    titleColor: "text-[#1749d2]",
    borderColor: "from-[#1749d2] via-[#88aaff] to-transparent",
    title: "Security Awareness",
    lead: "Technology alone cannot secure an organization. Employees make security decisions every day.",
    paragraph:
      "We design practical awareness programs that help teams recognize threats, understand their responsibilities, and contribute to a stronger security culture.",
    items: [
      "Recognize threats",
      "Understand responsibilities",
      "Stronger security culture",
    ],
  },
];

function GovernanceSlide() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-[minmax(0,1.14fr)_minmax(380px,0.86fr)] lg:gap-3">
        <div>
          <Eyebrow />
          <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-[3.35rem]">
            <span className="text-navy">Governance. </span>
            <span className="text-[#2563eb]">Assurance. </span>
            <span className="text-[#6e29f6]">Awareness.</span>
          </h2>
          <p className="mt-5 max-w-[680px] text-base font-semibold leading-7 text-navy/75 lg:text-lg">
            Practical services that strengthen leadership alignment, audit
            readiness, and day-to-day security culture.
          </p>
          <div className="mt-6 flex gap-1.5" aria-hidden="true">
            <span className="h-1 w-10 rounded-full bg-[#1257d8]" />
            <span className="h-1 w-8 rounded-full bg-[#23b7eb]" />
            <span className="h-1 w-7 rounded-full bg-[#8a4df4]" />
          </div>
        </div>

        {/* illustration */}
        <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] lg:-mr-5 lg:max-w-[540px]">
          <Image
            src="/vazecaz.png"
            alt="Governance, assurance and awareness"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 540px"
            className="object-contain mix-blend-multiply"
          />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-6 lg:mt-2 lg:grid-cols-3">
        {TRI_CARDS.map((c) => (
          <div
            key={c.title}
            className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-[1.4rem] border border-[#bdd3f7]/65 bg-white/95 p-6 shadow-[0_20px_45px_rgba(31,85,168,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(31,85,168,0.18)] lg:p-7"
          >
            <span
              aria-hidden="true"
              className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${c.borderColor}`}
            />

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-full bg-white p-1.5 shadow-[0_8px_20px_rgba(21,73,185,0.24)] ring-1 ring-[#c9dbfa]">
                <span
                  className={`flex h-[4.1rem] w-[4.1rem] items-center justify-center rounded-full bg-gradient-to-br text-white shadow-inner ${c.gradient}`}
                >
                  <c.icon size={31} strokeWidth={2} />
                </span>
              </span>

              <div className="min-w-0 pt-1">
                <h3
                  className={`text-[1.32rem] font-bold leading-[1.18] tracking-[-0.02em] lg:text-[1.42rem] ${c.titleColor}`}
                >
                  {c.title}
                </h3>
                <p className="mt-3 text-[0.84rem] font-bold leading-[1.45] text-navy">
                  {c.lead}
                </p>
              </div>
            </div>

            <p className="mt-6 text-[0.92rem] leading-[1.52] text-navy/75 lg:min-h-[6.4rem]">
              {c.paragraph}
            </p>
            <ul className="mt-auto space-y-3.5 pt-5">
              {c.items.map((i) => (
                <CheckItem key={i} label={i} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- slides + carousel ---------- */

const ISO: ImageSlideData = {
  titleTop: "ISO 27001",
  titleBottom: "Implementation",
  lead: "Achieving certification is more than writing policies.",
  paragraph:
    "We help you design and implement an Information Security Management System (ISMS) that reflects your organization's risks, objectives, and operations.",
  listLabel: "Our support includes:",
  items: [
    "Gap Assessment",
    "ISMS Design",
    "Risk Assessment",
    "Statement of Applicability",
    "Security Policies & Procedures",
    "Internal Audit",
    "Management Review",
    "Certification Readiness",
  ],
  image: "/slides/iso27001.png",
  alt: "Team reviewing an ISO 27001 information security management system",
};

const GDPR: ImageSlideData = {
  titleTop: "GDPR",
  titleBottom: "Compliance",
  lead: "Privacy compliance should protect both your organization and the individuals whose data you process.",
  paragraph:
    "We help organizations establish practical GDPR compliance through governance, documentation, and operational processes.",
  listLabel: "Services include:",
  items: [
    "GDPR Gap Assessment",
    "Data Mapping",
    "Records of Processing Activities",
    "Privacy Governance",
    "Data Protection Impact Assessments",
    "Third-Party Risk Reviews",
    "Data Subject Rights Procedures",
    "Compliance Audits",
  ],
  image: "/slides/gdpr.png",
  alt: "Team reviewing a GDPR compliance dashboard",
};

const SLIDE_COUNT = 3;

export default function WhatWeDo() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((v) => (v + 1) % SLIDE_COUNT),
      ROTATE_MS
    );
    return () => clearInterval(id);
  }, [paused, index]);

  const prev = () => setIndex((v) => (v - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  const next = () => setIndex((v) => (v + 1) % SLIDE_COUNT);

  return (
    <section
      className="fine-grid relative overflow-hidden bg-[#f8fbff] py-16 lg:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* soft decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#3b82f6]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#6e29f6]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-60 -left-36 h-[430px] w-[560px] rotate-[18deg] rounded-[50%] bg-[#cfe4ff]/65" />
      <div className="pointer-events-none absolute -bottom-72 right-[-8%] h-[500px] w-[680px] -rotate-[13deg] rounded-[50%] bg-[#d9e9ff]/70" />

      <div className="container-x relative !max-w-[1440px]">
        <div className="relative md:px-[4.5rem]">
          {/* navigation arrows: left of the text, right of the image */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="button-focus absolute left-1 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#b8cdf0] bg-white/95 text-[#1749b8] shadow-[0_10px_28px_rgba(31,85,168,0.18)] transition hover:-translate-x-0.5 hover:text-purple md:flex"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="button-focus absolute right-1 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#b8cdf0] bg-white/95 text-[#1749b8] shadow-[0_10px_28px_rgba(31,85,168,0.18)] transition hover:translate-x-0.5 hover:text-purple md:flex"
          >
            <ChevronRight size={22} />
          </button>

          <div
            key={index}
            className="animate-slide-fade flex flex-col justify-center lg:min-h-[680px]"
          >
            {index === 0 && <ImageSlide data={ISO} />}
            {index === 1 && <ImageSlide data={GDPR} />}
            {index === 2 && <GovernanceSlide />}
          </div>
        </div>

        {/* pagination */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-10 bg-gradient-to-r from-[#1687ef] to-[#6e29f6] shadow-[0_2px_8px_rgba(59,130,246,0.35)]"
                  : "w-5 bg-[#a9bddb]/70 hover:bg-[#7895bf]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
