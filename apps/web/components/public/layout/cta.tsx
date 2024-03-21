import { Button } from "@ui/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <Link
      className="bg-secondary text-secondary-foreground hover:bg-secondary/80 ring-offset-background focus-visible:ring-ring ml-auto inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      href="/apply"
    >
      Join the START Fellowship
    </Link>
  );
}
