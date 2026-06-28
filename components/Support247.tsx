import Image from "next/image";
import { ArrowRight, Clock3 } from "lucide-react";

export default function Support247() {
  return (
    <section
      aria-labelledby="support-247-heading"
      className="grid overflow-hidden lg:min-h-[520px] lg:grid-cols-2"
    >
      <div className="relative flex items-center overflow-hidden bg-[#3d1d73] px-6 py-16 text-white sm:px-12 sm:py-20 lg:px-16 lg:py-24 xl:px-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 6% 50%, transparent 0, transparent 74px, rgba(255,255,255,0.22) 75px, transparent 76px, transparent 148px)",
          }}
        />
        <div className="pointer-events-none absolute -bottom-20 -right-14 h-64 w-64 rounded-full bg-[#6c2ff3]/20 blur-3xl" />

        <div className="relative max-w-[590px]">
          <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-[#71eff4]">
            <Clock3 size={20} />
            Always available
          </p>
          <h2
            id="support-247-heading"
            className="mt-5 text-4xl font-bold leading-[1.13] tracking-[-0.035em] sm:text-5xl xl:text-[3.5rem]"
          >
            24/7 Cyber Security
            <br />
            Support
          </h2>
          <p className="mt-6 max-w-lg text-base font-medium leading-8 text-white/82 sm:text-lg">
            Cyber incidents don&apos;t follow office hours. Our experts are
            available around the clock to help you respond quickly, minimize
            disruption, and keep your operations secure.
          </p>

          <a
            href="#contact"
            className="button-focus group mt-9 inline-flex items-center gap-5 rounded-md bg-[#6f2cf5] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(26,5,70,0.22)] transition-colors hover:bg-[#7d3cff] sm:text-base"
          >
            Get 24/7 Support
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      <div className="relative min-h-[360px] bg-[#061335] lg:min-h-0">
        <Image
          src="/support-24-7.png"
          alt="Cyber security analyst providing continuous threat monitoring"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#3d1d73]/25 via-transparent to-transparent" />
      </div>
    </section>
  );
}
