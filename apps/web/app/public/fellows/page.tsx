import { Button } from "@ui/components/ui/button";
import { Checkbox } from "@ui/components/ui/checkbox";
import { Input } from "@ui/components/ui/input";
import { Label } from "@ui/components/ui/label";
import { prisma } from "database";
import Image from "next/image";
import clsx from "clsx";
import { fundingStageColors, fundingStageLabels } from "@/app/constants";

async function getFellows() {
  return prisma.startup.findMany({
    where: { fellowStatus: { in: ["Alumni", "Fellow"] } },
    take: 10,
  });
}

export default async function Page() {
  const fellows = await getFellows();

  return (
    <div className="grid grid-cols-4 gap-8">
      <div className="flex h-fit min-h-screen flex-col items-start gap-4 rounded-lg border border-gray-200 bg-white p-4">
        <div className="flex flex-row items-center gap-2">
          <Checkbox />
          <Label>Is Hiring</Label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Checkbox />
          <Label>Sustainability</Label>
        </div>
        <div className="w-full border-t border-gray-300" />

        <h3 className="font-bold">Batch</h3>
        <div className="flex flex-row items-center gap-2">
          <Checkbox />
          <Label>All Batches</Label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Checkbox />
          <Label>2024</Label>
          {/* 
          <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20">
            42
          </span>*/}
        </div>

        <div className="flex flex-row items-center gap-2">
          <Checkbox />
          <Label>2023</Label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Checkbox />
          <Label>2022</Label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Checkbox />
          <Label>2021</Label>
        </div>

        <div className="w-full border-t border-gray-300" />

        <h3 className="font-bold">Industry</h3>
        <div className="flex flex-row items-center gap-2">
          <Checkbox />
          <Label>All Industries</Label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Checkbox />
          <Label>Healthcare</Label>
          {/* 
  <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20">
    42
  </span>*/}
        </div>

        <div className="flex flex-row items-center gap-2">
          <Checkbox />
          <Label>Spacetech</Label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Checkbox />
          <Label>SaaS</Label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Checkbox />
          <Label>Fintech</Label>
        </div>

        <div className="w-full border-t border-gray-300" />

        <h3 className="font-bold">Business Model</h3>
        <div className="flex flex-row items-center gap-2">
          <Checkbox />
          <Label>All Business Models</Label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Checkbox />
          <Label>B2B</Label>
          {/* 
<span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20">
42
</span>*/}
        </div>

        <div className="flex flex-row items-center gap-2">
          <Checkbox />
          <Label>B2C</Label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Checkbox />
          <Label>B2G</Label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Checkbox />
          <Label>B2H</Label>
        </div>
      </div>

      <div className="col-span-3 max-w-4xl">
        <div className="flex flex-row items-center justify-between gap-4">
          <Input placeholder="Search fellows" className="w-full" />
          <Button>Search</Button>
        </div>

        <div className="mb-2 mt-4 text-sm text-neutral-600">
          Showing 10 of 50+ fellows
        </div>
        <div className="flex flex-col items-start justify-between gap-4 rounded-lg border border-gray-200 bg-white">
          {fellows.map((fellow) => (
            <div
              key={fellow.id}
              className="flex w-full flex-row items-center gap-4 border-b border-gray-200 p-4"
            >
              <Image
                src={fellow.logoUrl}
                alt={fellow.name}
                width={96}
                height={96}
                className="h-24 w-24 rounded-lg object-cover"
              />

              <div className="flex flex-col justify-between">
                <div className="flex flex-row items-baseline gap-2">
                  <div className="text-lg font-bold">{fellow.name}</div>
                  <div className="text-sm">{fellow.country}</div>
                </div>
                <p>{fellow.description}</p>
                <div className="flex flex-row items-center gap-3">
                  <span className="text-sm text-gray-600">
                    <span
                      className={clsx(
                        "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20",
                        {
                          "bg-yellow-100 text-yellow-700 ring-yellow-600/20":
                            fellow.companyStatus === "Acquired",
                          "bg-red-50 text-red-700 ring-red-600/20":
                            fellow.companyStatus === "Failed",
                        },
                      )}
                    >
                      {fellow.companyStatus}
                    </span>
                  </span>
                  <span
                    key={fellow.fundingStatus}
                    className={clsx(
                      "inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20",
                      {
                        [fundingStageColors[fellow.fundingStatus]]:
                          fundingStageColors[fellow.fundingStatus],
                      },
                    )}
                  >
                    {fundingStageLabels[fellow.fundingStatus]}
                  </span>
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20">
                    {fellow.businessModel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
