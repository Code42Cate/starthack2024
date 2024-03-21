"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/fellows",
    label: "Overview",
  },
  {
    href: "/fellows/fellows",
    label: "Fellows",
  },
  {
    href: "/fellows/partners",
    label: "Partners",
  },
  {
    href: "/fellows/myapplication",
    label: "My Application",
  },
  {
    href: "/fellows/requests",
    label: "Requests",
  },
  {
    href: "/fellows/mentors",
    label: "Mentors",
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
