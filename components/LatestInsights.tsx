import { ArrowRight } from "lucide-react";

type Post = {
  tag: string;
  tagColor: string;
  badge?: string;
  title: string;
  meta: string;
  gradient: string;
};

const POSTS: Post[] = [
  {
    tag: "Webinar",
    tagColor: "bg-purple",
    title: "Third-party cyber risk in complex operational supply chains",
    meta: "On Demand",
    gradient:
      "radial-gradient(circle at 30% 30%, rgba(1,246,247,0.48), transparent 55%), radial-gradient(circle at 80% 70%, rgba(110,41,246,0.5), transparent 55%)",
  },
  {
    tag: "In Person Event",
    tagColor: "bg-teal",
    badge: "Popular",
    title: "Critical Infrastructure Security Forum",
    meta: "18 March 2027 | 8:30 AM",
    gradient:
      "radial-gradient(circle at 70% 30%, rgba(1,246,247,0.42), transparent 55%), radial-gradient(circle at 20% 80%, rgba(110,41,246,0.5), transparent 55%)",
  },
  {
    tag: "Blog",
    tagColor: "bg-purple",
    title: "How to prepare for a cyber resilience assessment",
    meta: "22 June 2026 | 6 min read",
    gradient:
      "radial-gradient(circle at 40% 40%, rgba(1,246,247,0.42), transparent 55%), radial-gradient(circle at 85% 75%, rgba(8,21,40,0.72), transparent 55%)",
  },
];

export default function LatestInsights() {
  return (
    <section className="bg-skyblue py-24">
      <div className="container-x">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-dark">
              Intelligence
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Latest Insights and Events
            </h2>
          </div>
          <a
            href="#"
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-purple hover:underline"
          >
            See all Insights <ArrowRight size={15} />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {POSTS.map((post) => (
            <a
              key={post.title}
              href="#"
              className="group flex min-h-[390px] flex-col overflow-hidden rounded-sm bg-gallery shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-44" style={{ background: "#081528" }}>
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: post.gradient }}
                />
                <span
                  className={`absolute left-4 top-4 rounded-sm px-2.5 py-1 text-[11px] font-semibold text-gallery ${post.tagColor}`}
                >
                  {post.tag}
                </span>
                {post.badge && (
                  <span className="absolute right-4 top-4 rounded-sm bg-gallery/90 px-2.5 py-1 text-[11px] font-semibold text-navy">
                    {post.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-snug text-navy group-hover:text-purple">
                  {post.title}
                </h3>
                <p className="mt-auto pt-4 text-xs text-muted">{post.meta}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
