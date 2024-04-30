"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import icons
import EmailIcon from "../icon/email-icon";
import StarIcon from "../icon/star-icon";
import PhoneIcon from "../icon/phone-icon";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Teacher = {
  id: string;
  nom: string;
  email: string;
  grade: string;
  phone: string;
};

export const columns: ColumnDef<Teacher>[] = [
  {
    id: "id",
    accessorKey: "id",
    header: "#ID",
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
    cell: ({ row }) => (
      <div className="flex gap-2 items-center">
        <Avatar style={{ width: "30px", height: "35px", borderRadius: "35%" }}>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />
          <AvatarFallback
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          >
            CN
          </AvatarFallback>
        </Avatar>

        <span>{row.original.nom}</span>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="flex gap-2 items-center ">
        <EmailIcon />
        <span>{row.original.email}</span>
      </div>
    ),
  },
  {
    accessorKey: "grade",
    header: "Grade",
    cell: ({ row }) => (
      <div className="flex gap-2 items-center ">
        <StarIcon />
        <span>{row.original.grade}</span>
      </div>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="flex gap-2 items-center ">
        <PhoneIcon />
        <span>{row.original.phone}</span>
      </div>
    ),
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
