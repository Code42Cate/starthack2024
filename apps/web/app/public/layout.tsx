import CTA from "@/components/public/layout/cta";
import { MainNav } from "@/components/public/layout/main-nav";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <main className="flex w-full flex-col gap-4 p-4">
      <div className="flex h-16 items-center rounded-lg bg-white px-4 shadow-sm">
        <Image src="/logo.svg" alt="Logo" width={120} height={40} />
        <MainNav className="mx-6" />
        <CTA />
      </div>
      <div>{children}</div>
    </main>
  );
}
