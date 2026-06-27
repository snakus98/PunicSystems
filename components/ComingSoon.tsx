import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function ComingSoon({
  title,
  eyebrow = "Services",
}: {
  title: string;
  eyebrow?: string;
}) {
  return (
    <main className="flex min-h-screen flex-col bg-navy text-gallery">
      <header className="border-b border-gallery/10">
        <div className="container-x flex h-20 items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/punic-logo.png"
              alt="Punic Systems"
              width={1126}
              height={504}
              priority
              className="h-14 w-auto"
            />
          </Link>
        </div>
      </header>

      <section className="container-x flex flex-1 flex-col items-center justify-center py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-gallery sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-md text-base leading-7 text-gallery/70">
          This page is coming soon. Our team is putting it together.
        </p>
        <Link
          href="/"
          className="button-focus mt-8 inline-flex items-center gap-2 rounded-sm bg-purple px-6 py-3 text-sm font-semibold text-gallery transition-colors hover:bg-purple-dark"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>
      </section>
    </main>
  );
}
