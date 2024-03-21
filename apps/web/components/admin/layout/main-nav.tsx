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
    label: "Partners & Mentors",
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
          className={clsx("text-sm transition-colors hover:text-[#FF6100]", {
            "font-bold text-[#FF6100]": pathname === link.href,
          })}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
