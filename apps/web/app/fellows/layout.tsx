import { MainNav } from "@/components/fellows/layout/main-nav";
import UserNav from "@/components/fellows/layout/user-nav";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <main className="flex w-full flex-col gap-4 rounded-lg border-neutral-500 p-4">
      <div className="flex h-16 items-center rounded-lg bg-white px-4 shadow-sm">
        <Image src="/logo.svg" alt="Logo" width={120} height={40} priority />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
      {children}
    </main>
  );
}
