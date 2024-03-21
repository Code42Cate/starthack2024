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
import { Admin, Startup } from "database";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Image from "next/image";

export const columns: ColumnDef<Startup>[] = [
  {
    id: "name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <Image
            src={row.original.avatarUrl}
            alt={`${row.original.firstName}'s avatar`}
            width={64}
            height={64}
            className="h-10 w-10 rounded-full object-cover shadow-sm"
          />
          <div className="ml-2 flex flex-col gap-1">
            <span>
              {row.original.firstName} {row.original.lastName}
            </span>
            <span className="text-neutral-700">{row.original.email}</span>
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
    cell: () => {
      return (
        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          Active
        </span>
      );
    },
    header: "Status",
  },
  {
    accessorKey: "position",
    header: "Position",
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
                navigator.clipboard.writeText(teammate.email.toString())
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
