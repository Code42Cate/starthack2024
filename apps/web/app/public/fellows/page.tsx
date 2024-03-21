import { prisma } from "database";

import Filter from "@/components/public/fellows/filter";
import Search from "@/components/public/fellows/search";
import Result from "@/components/public/fellows/result";

async function getFellows(searchParams: Record<string, string>) {
  return prisma.startup.findMany({
    where: { fellowStatus: { in: ["Alumni", "Fellow"] } },
    take: 10,
  });
}

export default async function Page({ searchParams }) {
  const fellows = await getFellows(searchParams);

  return (
    <div className="grid grid-cols-4 gap-8">
      <div className="flex h-fit min-h-screen flex-col items-start gap-4 rounded-lg border border-gray-200 bg-white p-4">
        <Filter />
      </div>
      <div className="col-span-3 max-w-4xl">
        <Search />
        <div className="mb-2 mt-4 text-sm text-neutral-600">
          Showing {fellows.length} of 50+ fellows
        </div>
        <div className="flex flex-col items-start justify-between gap-4 rounded-lg border border-gray-200 bg-white">
          {fellows.map((fellow) => (
            <Result fellow={fellow} />
          ))}
        </div>
      </div>
    </div>
  );
}
