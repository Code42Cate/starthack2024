import CashChart from "@/components/admin/fellows/dashboard/cash";
import MauChart from "@/components/admin/fellows/dashboard/mau";
import RevenueChart from "@/components/admin/fellows/dashboard/revenue";
import RunwayChart from "@/components/admin/fellows/dashboard/runway";
import { prisma } from "database";
import { Globe2Icon, Linkedin, Twitter } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import NorthstarChart from "@/components/admin/fellows/dashboard/northstar";
import UpdateButton from "@/components/admin/fellows/dashboard/update-button";

async function getFellowData(id: number) {
  const fellow = await prisma.startup.findUnique({
    where: {
      id: id,
    },
    include: {
      founders: true,
    },
  });

  const metrics = await prisma.metric.findMany({
    where: {
      startupId: id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const founders = await prisma.founder.findMany({
    where: {
      startupId: id,
    },
  });

  const requests = await prisma.request.findMany({
    where: {
      founderId: {
        in: founders.map((f) => f.id),
      },
    },
  });

  const fundingRounds = await prisma.fundingRound.findMany({
    where: {
      startupId: id,
    },
  });

  return {
    fellow,
    fundingRounds,
    metrics,
    founders,
    requests,
  };
}

export default async function FellowDashboard({ params: { id } }) {
  const data = await getFellowData(Number(id));
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    compactDisplay: "short",
    maximumFractionDigits: 0,
  });

  return (
    <div className="flex flex-col gap-8">
      <h1 className="flex flex-row items-center gap-2 text-xl font-bold">
        {data.fellow.name}

        <span
          className={clsx(
            "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20",
            {
              "bg-yellow-100 text-yellow-700 ring-yellow-600/20":
                data.fellow.fellowStatus === "Alumni",
            },
          )}
        >
          {data.fellow.fellowStatus}
        </span>

        <UpdateButton />
      </h1>

      <div className="flex flex-row items-center justify-between gap-8">
        <div className="relative h-24 w-72 flex-row items-end rounded-lg border border-gray-100 bg-gray-50 p-4 shadow-md">
          <div className="flex flex-col justify-between">
            <div>Runway</div>
            <div className="font-mono text-lg font-bold">
              {data.metrics[data.metrics.length - 1].runwayMonths} months
            </div>
          </div>

          <div className="absolute bottom-0 right-0">
            <RunwayChart data={data.metrics} />
          </div>
        </div>

        <div className="relative h-24 w-72 flex-row items-end rounded-lg border border-gray-100 bg-gray-50 p-4 shadow-md">
          <div className="flex flex-col">
            <div>Monthly Revenue</div>
            <div className="font-mono text-lg font-bold">
              {formatter.format(
                data.metrics[data.metrics.length - 1].revenue * 100,
              )}{" "}
              USD
            </div>
          </div>

          <div className="absolute bottom-0 right-0">
            <RevenueChart data={data.metrics} />
          </div>
        </div>
        <div className="relative h-24 w-72 flex-row items-end rounded-lg border border-gray-100 bg-gray-50 p-4 shadow-md">
          <div className="flex flex-col justify-between">
            <div>{data.metrics[0].northStarMetric}</div>
            <div className="font-mono text-lg font-bold">
              {data.metrics[data.metrics.length - 1].northStarValue}
            </div>
          </div>

          <div className="absolute bottom-0 right-0">
            <NorthstarChart data={data.metrics} />
          </div>
        </div>
        <div className="relative h-24 w-72 flex-row items-end rounded-lg border border-gray-100 bg-gray-50 p-4 shadow-md">
          <div className="flex flex-col justify-between">
            <div>MAU</div>
            <div className="font-mono text-lg font-bold">
              {data.metrics[data.metrics.length - 1].monthlyActiveUsers} users
            </div>
          </div>

          <div className="absolute bottom-0 right-0">
            <MauChart data={data.metrics} />
          </div>
        </div>

        <div className="relative h-24 w-72 flex-row items-end rounded-lg border border-gray-100 bg-gray-50 p-4 shadow-md">
          <div className="flex flex-col justify-between">
            <div>Cash Reserve</div>
            <div className="font-mono text-lg font-bold">
              {formatter.format(
                data.metrics[data.metrics.length - 1].cash * 100,
              )}{" "}
              USD
            </div>
          </div>

          <div className="absolute bottom-0 right-0">
            <CashChart data={data.metrics} />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-8">
        <div className="grow rounded-lg border border-gray-100 bg-gray-50 p-4 shadow-md">
          <h2 className="text-lg font-bold">Details</h2>
          <div>
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {data.fellow.name}
                </dd>
              </div>
              <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Description
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {data.fellow.description}
                </dd>
              </div>
              <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Founders
                </dt>
                <dd className="mt-1 flex flex-row gap-2 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {data.founders.map((founder) => (
                    <Link
                      key={founder.id}
                      href={founder.linkedin}
                      className="flex flex-row items-center gap-2 underline-offset-2 hover:text-[#FF6100] hover:underline"
                    >
                      <Image
                        src={founder.avatarUrl}
                        width={20}
                        height={20}
                        alt=""
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      {founder.firstName} {founder.lastName},
                    </Link>
                  ))}
                </dd>
              </div>
              <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Industry
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {data.fellow.industry}
                </dd>
              </div>
              <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Business Model
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {data.fellow.businessModel}
                </dd>
              </div>
              <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Contact
                </dt>
                <dd className="mt-1 flex flex-row gap-2 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
                  <Link href={data.fellow.linkedin}>
                    <Linkedin size={20} />
                  </Link>
                  <Link href={data.fellow.website}>
                    <Globe2Icon size={20} />
                  </Link>
                  <Link href={data.fellow.twitter}>
                    <Twitter size={20} />
                  </Link>
                </dd>
              </div>
              <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Attachments
                </dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                  >
                    <li className="flex items-center justify-between py-2 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            pitchdeck.xlsx
                          </span>
                          <span className="flex-shrink-0 text-gray-400">
                            2.4mb
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <Link
                          href={data.fellow.pitchdeckUrl}
                          className="font-medium text-[#FF6100] underline-offset-2 hover:underline"
                        >
                          Download
                        </Link>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="relative max-w-md space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-4 shadow-md">
          <h2 className="text-lg font-bold">Funding</h2>

          {data.fundingRounds.map((fundingRound) => (
            <div
              className="grid grid-cols-2 gap-4"
              key={fundingRound.roundName}
            >
              <div className="font-mono">
                {formatter.format(fundingRound.amountRaised)} USD
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">
                  <span className="font-bold">{fundingRound.roundName}</span> -{" "}
                  {fundingRound.date.toDateString()}
                </div>
                <div className="">{fundingRound.investors.join(", ")}</div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-0 grid grid-cols-2 gap-4 border-t border-gray-400 py-4">
            <div className="font-mono">
              {formatter.format(
                data.fundingRounds.reduce(
                  (acc, curr) => acc + curr.amountRaised,
                  0,
                ),
              )}{" "}
              USD
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-sm text-gray-600">All investors</div>
              <div className="">
                {data.fundingRounds
                  .flatMap((fundingRound) => fundingRound.investors)
                  .filter((value, index, self) => self.indexOf(value) === index)
                  .join(", ")}
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-w-md space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-4 shadow-md">
          <h2 className="text-lg font-bold">Requests</h2>

          {data.requests.map((request) => (
            <div key={request.id} className="rounded-lg bg-white p-4 shadow-sm">
              <div className="">
                {request.title} -
                <span className="text-sm text-gray-600">
                  {request.createdAt.toDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
