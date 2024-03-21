import {
  countryFlags,
  partnerCategoryColors,
  partnerCategoryLabels,
} from "@/app/constants";
import { Category, prisma } from "database";
import Image from "next/image";
import clsx from "clsx";

async function getPartners() {
  const partners = await prisma.partner.findMany({ orderBy: { id: "asc" } });

  return partners;
}

export default async function Page() {
  const partners = await getPartners();

  return (
    <div className="grid grid-cols-3 gap-4">
      {partners.map((partner) => (
        <div
          key={partner.id}
          className="col-span-1 cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-transform hover:scale-105"
        >
          <div className="flex flex-row gap-4">
            <Image
              src={partner.imageUrl}
              width={100}
              height={100}
              alt={partner.name}
              className="rounded-md object-contain"
            />

            <div className="flex h-full flex-col justify-between">
              <h2 className="text-lg font-bold">
                {partner.name}

                <span className="ml-2 text-xs font-extralight">
                  {partner.country} {countryFlags[partner.country]}
                </span>
              </h2>
              <span>{partner.email}</span>
              <div>
                {partner.categories.map((category: Category) => (
                  <span
                    key={category}
                    className={clsx(
                      "mr-1 whitespace-nowrap rounded-full px-2 py-1 text-xs",
                      partnerCategoryColors[category],
                    )}
                  >
                    {partnerCategoryLabels[category]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
