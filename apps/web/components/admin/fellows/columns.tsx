"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@ui/components/button";
import { clsx } from "clsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@ui/components/dropdown-menu";
import { Startup } from "database";
import {
  ArrowUpDown,
  Globe,
  Linkedin,
  MoreHorizontal,
  Twitter,
} from "lucide-react";
import { fundingStageLabels } from "@/app/constants";
import Link from "next/link";

export const columns: ColumnDef<Startup>[] = [
  {
    id: "name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <div className="ml-2 flex flex-col gap-1">
            <span className="font-bold">{row.original.name}</span>
            <span className="text-neutral-700">{row.original.description}</span>
          </div>
        </div>
      );
    },
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "status",
    cell: ({ row }) => {
      return (
        <span
          className={clsx(
            "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20",
            {
              "bg-yellow-100 text-yellow-700 ring-yellow-600/20":
                row.original.companyStatus === "Acquired",
              "bg-red-50 text-red-700 ring-red-600/20":
                row.original.companyStatus === "Failed",
            },
          )}
        >
          {row.original.companyStatus}
        </span>
      );
    },
    header: "Status",
  },
  {
    id: "fundingStage",
    cell: ({ row }) => {
      return <span>{fundingStageLabels[row.original.fundingStatus]}</span>;
    },
    header: "Funding Stage",
  },
  {
    id: "businessmodel",
    cell: ({ row }) => {
      return (
        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20">
          {row.original.businessModel}
        </span>
      );
    },
    header: "Business Model",
  },
  {
    id: "socials",
    header: "Socials",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Link href={row.original.linkedin}>
            <Linkedin className="h-4 w-4 text-neutral-500" />
          </Link>
          <Link href={row.original.twitter}>
            <Twitter className="h-4 w-4 text-neutral-500" />
          </Link>
          <Link href={row.original.website}>
            <Globe className="h-4 w-4 text-neutral-500" />
          </Link>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const teammate = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(teammate.linkedin.toString())
              }
            >
              Copy Email
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {}}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={async () => {}}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
