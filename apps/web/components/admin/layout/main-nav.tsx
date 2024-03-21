"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/admin/overview",
    label: "Overview",
  },
  {
    href: "/admin/fellows",
    label: "Fellows",
  },
  {
    href: "/admin/partners",
    label: "Partners",
  },
  {
    href: "/admin/applications",
    label: "Applications",
  },
  {
    href: "/admin/requests",
    label: "Requests",
  },
  {
    href: "/admin/mentors",
    label: "Mentors",
  },
  {
    href: "/admin/team",
    label: "Team",
  },
];

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={clsx("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx("hover:text-primary text-sm transition-colors", {
            "font-medium": pathname === link.href,
          })}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
