import { MainNav } from "@/components/admin/layout/main-nav";
import { Search } from "@/components/admin/layout/search";
import UserNav from "@/components/admin/layout/user-nav";

import Image from "next/image";

export default function Layout({ children }) {
  return (
    <main className="flex w-full flex-col gap-4 rounded-lg border-neutral-500 p-4">
      <div className="flex h-16 items-center rounded-lg bg-white px-4 shadow-sm">
        <Image src="/logo.svg" alt="Logo" width={120} height={40} priority />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
      <div className="flex flex-col rounded-lg border-neutral-500 bg-white p-4 shadow-md">
        {children}
      </div>
    </main>
  );
}
