import Image from "next/image";

export default function StartJourney() {
  return (
    <section className="grid grid-cols-1 overflow-hidden lg:grid-cols-2">
      {/* Left: purple panel */}
      <div className="relative flex items-center overflow-hidden bg-[#3a1d6e] px-8 py-16 sm:px-12 lg:py-24 lg:pl-20 lg:pr-16">
        {/* concentric ring decoration */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 6% 50%, rgba(255,255,255,0.07) 0 1.5px, transparent 1.5px 72px)",
          }}
        />
        <div className="relative max-w-lg">
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Start your ISO&nbsp;27001 Journey
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/80">
            Speak with one of our consultants to see how we can support your
            organisation with its cloud environments.
          </p>
          <a
            href="#"
            className="button-focus mt-8 inline-block rounded-md bg-purple px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-purple-dark"
          >
            Speak to our Cyber Security Experts
          </a>
        </div>
      </div>

      {/* Right: image */}
      <div className="relative min-h-[300px] lg:min-h-[460px]">
        <Image
          src="/caze.png"
          alt="Consultants reviewing an ISO 27001 security dashboard"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
