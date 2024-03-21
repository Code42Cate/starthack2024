import Link from "next/link";
import clsx from "clsx";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={clsx("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="hover:text-primary text-sm font-medium transition-colors"
      >
        Overview
      </Link>
      <Link
        href="/public/fellows"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Fellows
      </Link>
      <Link
        href="/public/partners"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Partners
      </Link>
    </nav>
  );
}
