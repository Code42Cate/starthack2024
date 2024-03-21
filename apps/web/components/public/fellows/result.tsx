import { Startup } from "database";
import Image from "next/image";
import clsx from "clsx";
import { fundingStageColors, fundingStageLabels } from "@/app/constants";

export default function Result({ fellow }: { fellow: Startup }) {
  return (
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
  );
}
