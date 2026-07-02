import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

export default function ProjectPlaceholder({ title }: { title: string }) {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <TopBar />
      <Header />
      <section className="container-x flex flex-1 flex-col items-center justify-center py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-purple">
          Our projects
        </p>
        <h1 className="mt-4 text-4xl font-bold text-navy sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-md text-base leading-7 text-navy/65">
          This project page is coming soon. Our team is putting it together.
        </p>
        <Link
          href="/"
          className="button-focus mt-8 inline-flex items-center gap-2 rounded-sm bg-purple px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>
      </section>
    </main>
  );
}
