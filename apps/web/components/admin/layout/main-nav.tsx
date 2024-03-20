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
        href="/admin/overview"
        className="hover:text-primary text-sm font-medium transition-colors"
      >
        Overview
      </Link>
      <Link
        href="/admin/fellows"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Fellows
      </Link>
      <Link
        href="/admin/partners"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Partners
      </Link>
      <Link
        href="/admin/applications"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Applications
      </Link>
      <Link
        href="/admin/requests"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Requests
      </Link>
      <Link
        href="/admin/mentors"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Mentors
      </Link>
    </nav>
  );
}
