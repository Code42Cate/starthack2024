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
import { Partner, Category } from "database";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { partnerCategoryColors, partnerCategoryLabels } from "@/app/constants";

export const columns: ColumnDef<Partner>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
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
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "categories",
    header: "Categories",
    cell: ({ row }) => {
      const partner = row.original;

      return (
        <div className="flex flex-row items-center gap-2">
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
      );
    },
  },
  {
    accessorKey: "country",
    header: "Country",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const partner = row.original;

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
                navigator.clipboard.writeText(partner.email.toString())
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
