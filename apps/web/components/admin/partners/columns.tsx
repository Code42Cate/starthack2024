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

const categoryLabels = {
  Corporate: "Corporate",
  Other: "Other",
  Startup: "Startup",
  Foundation: "Foundation",
  University: "University",
  StudentClub: "Student Club",
  VC: "VC",
  AngelNetwork: "Angel Network",
  Institution: "Institution",
  Accelerator: "Accelerator",
  ScaleUp: "Scale Up",
  InnovationHub: "Innovation Hub",
};

const categoryColors = {
  Corporate: "bg-blue-100 text-blue-800",
  Other: "bg-gray-100 text-gray-800",
  Startup: "bg-green-100 text-green-800",
  Foundation: "bg-yellow-100 text-yellow-800",
  University: "bg-purple-100 text-purple-800",
  StudentClub: "bg-indigo-100 text-indigo-800",
  VC: "bg-red-100 text-red-800",
  AngelNetwork: "bg-pink-100 text-pink-800",
  Institution: "bg-teal-100 text-teal-800",
  Accelerator: "bg-cyan-100 text-cyan-800",
  ScaleUp: "bg-rose-100 text-rose-800",
  InnovationHub: "bg-amber-100 text-amber-800",
};

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
                categoryColors[category],
              )}
            >
              {categoryLabels[category]}
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
