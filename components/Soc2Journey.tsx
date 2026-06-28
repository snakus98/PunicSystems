import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Soc2Journey() {
  return (
    <section
      aria-labelledby="soc2-journey-title"
      className="grid min-h-[470px] overflow-hidden bg-[#402077] lg:grid-cols-2"
    >
      <div className="soc2-rings relative flex items-center px-6 py-16 sm:px-12 lg:px-[8.2vw] lg:py-20">
        <div className="relative z-10 max-w-[510px]">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#bba7ff]">
            Security assurance
          </p>
          <h2
            id="soc2-journey-title"
            className="mt-4 text-[42px] font-bold leading-[1.17] tracking-[-0.03em] text-white sm:text-[50px]"
          >
            Start your SOC 2
            <span className="block">journey</span>
          </h2>
          <p className="mt-6 max-w-[470px] text-[17px] leading-7 text-white/85">
            Speak with one of our compliance consultants to build the controls,
            evidence and operational discipline needed for a successful SOC 2
            audit.
          </p>
          <a
            href="#contact"
            className="button-focus mt-8 inline-flex items-center gap-2 rounded-md bg-[#7628f5] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(36,10,90,0.25)] transition hover:-translate-y-0.5 hover:bg-[#843cff]"
          >
            Speak to our SOC 2 experts
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="relative min-h-[360px] lg:min-h-[470px]">
        <Image
          src="/soc2-journey.png"
          alt="SOC 2 security assurance represented by verified controls, cloud infrastructure and an audit dashboard"
          fill
          priority={false}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-[#402077] to-transparent lg:block" />
      </div>
    </section>
  );
}
