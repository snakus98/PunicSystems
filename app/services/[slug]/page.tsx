import ComingSoon from "@/components/ComingSoon";
import { findServiceName } from "@/lib/services";

function humanize(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = findServiceName(slug) ?? humanize(slug);
  return <ComingSoon eyebrow="Services" title={title} />;
}
