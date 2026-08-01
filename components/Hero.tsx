"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Force muted + autoplay reliably across browsers.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const tryPlay = () => video.play().catch(() => {});
    tryPlay();
    video.addEventListener("canplay", tryPlay, { once: true });
    return () => video.removeEventListener("canplay", tryPlay);
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy-deep text-gallery">
      {/* Autoplaying background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/vid1.mp4" type="video/mp4" />
      </video>

      {/* Dark overlays for the Black Pearl look + text readability */}
      <div className="tech-grid absolute inset-0 z-[1] opacity-25" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_72%_30%,rgba(1,246,247,0.10),transparent_38%),radial-gradient(circle_at_88%_82%,rgba(110,41,246,0.16),transparent_40%),linear-gradient(90deg,rgba(8,21,40,0.94)_0%,rgba(8,21,40,0.82)_50%,rgba(8,21,40,0.55)_100%)]" />

      <div className="container-x relative z-10 flex min-h-[calc(100svh-7.5rem)] flex-col justify-center pb-[clamp(9rem,17vh,13rem)] pt-[clamp(2rem,6vh,4.5rem)]">
        <h1 className="max-w-[22ch] text-[clamp(2.1rem,4.6vw,4.2rem)] font-bold leading-[1.08] tracking-[-0.02em] text-gallery">
          Your Strategic Partner for{" "}
          <span className="text-teal">
            ISO Standards, EU Regulations and Digital Trust Frameworks
          </span>
        </h1>

        <p className="mt-[clamp(1rem,2.4vh,1.9rem)] max-w-[62ch] text-[clamp(1rem,1.25vw,1.35rem)] leading-[1.6] text-gallery/85">
          Delivering tailored compliance solutions that secure your operations,
          protect your data, and prepare your organization for the future.
        </p>

        <div className="mt-[clamp(1.3rem,3vh,2.4rem)]">
          <a
            href="#services"
            className="button-focus inline-flex items-center justify-center rounded-md bg-purple px-7 py-4 text-sm font-semibold text-gallery transition-colors hover:bg-purple-dark"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
