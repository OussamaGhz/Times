"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Edit3, Trash, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { MdClose } from "react-icons/md";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Room = {
  id: string;
  nom_salle: string;
  type_salle: string;
  capacity: number;
};

export const columns: ColumnDef<Room>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nom_salle",
    header: "Nom salle",
  },
  {
    accessorKey: "type_salle",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type salle
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "capacity",
    header: "Capacity",
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const payment = row.original;

      const [showConfirmationModal, setShowConfirmationModal] = useState(false);

      const handleDelete = () => {
        //log data
        console.log(payment);

        // Perform delete operation here
        setShowConfirmationModal(false);
      };

      const handleToggleModal = () => {
        setShowConfirmationModal(!showConfirmationModal);
      };

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex gap-2 items-center  bg-[#5B93FF] bg-opacity-5 py-1 px-4 my-1 text-[#5B93FF] ">
                <Edit3 className="h-4 w-4" />
                <button>Modifier la salle</button>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2 items-center bg-[#E71D36] text-[#E71D36] bg-opacity-5 py-1 px-4 my-1">
                <Trash className="h-4 w-4" />
                <button onClick={() => setShowConfirmationModal(true)}>
                  Supprimer la salle
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {showConfirmationModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50  rounded-lg shadow">
              <div className="bg-white  p-8 rounded-lg">
                <div className="p-4 md:p-5 text-cente">
                  <div className="flex justify-end">
                    <MdClose
                      className="h-6 w-6 cursor-pointer"
                      onClick={handleToggleModal}
                    />
                  </div>
                  <div className="flex justify-center items-center my-7">
                    <svg
                      width="85"
                      height="85"
                      viewBox="0 0 85 85"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Warn">
                        <g id="Group">
                          <path
                            id="Vector"
                            d="M42.5003 0.416992C65.7429 0.416992 84.5836 19.2577 84.5836 42.5003C84.5836 65.7429 65.7429 84.5836 42.5003 84.5836C19.2577 84.5836 0.416992 65.7429 0.416992 42.5003C0.416992 19.2577 19.2577 0.416992 42.5003 0.416992ZM42.5003 8.83366C33.5714 8.83366 25.0081 12.3807 18.6944 18.6944C12.3807 25.0081 8.83366 33.5714 8.83366 42.5003C8.83366 51.4293 12.3807 59.9925 18.6944 66.3063C25.0081 72.62 33.5714 76.167 42.5003 76.167C51.4293 76.167 59.9925 72.62 66.3063 66.3063C72.62 59.9925 76.167 51.4293 76.167 42.5003C76.167 33.5714 72.62 25.0081 66.3063 18.6944C59.9925 12.3807 51.4293 8.83366 42.5003 8.83366ZM42.5003 55.1253C43.6164 55.1253 44.6868 55.5687 45.4761 56.3579C46.2653 57.1471 46.7087 58.2175 46.7087 59.3337C46.7087 60.4498 46.2653 61.5202 45.4761 62.3094C44.6868 63.0986 43.6164 63.542 42.5003 63.542C41.3842 63.542 40.3138 63.0986 39.5246 62.3094C38.7354 61.5202 38.292 60.4498 38.292 59.3337C38.292 58.2175 38.7354 57.1471 39.5246 56.3579C40.3138 55.5687 41.3842 55.1253 42.5003 55.1253ZM42.5003 17.2503C43.6164 17.2503 44.6868 17.6937 45.4761 18.4829C46.2653 19.2721 46.7087 20.3425 46.7087 21.4587V46.7087C46.7087 47.8248 46.2653 48.8952 45.4761 49.6844C44.6868 50.4736 43.6164 50.917 42.5003 50.917C41.3842 50.917 40.3138 50.4736 39.5246 49.6844C38.7354 48.8952 38.292 47.8248 38.292 46.7087V21.4587C38.292 20.3425 38.7354 19.2721 39.5246 18.4829C40.3138 17.6937 41.3842 17.2503 42.5003 17.2503Z"
                            fill="#E02424"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>

                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Etes vous sure de vouloire supprimer cette salle?
                  </h3>
                  <div className="flex gap-4 justify-center">
                    <Button
                      variant={"destructive"}
                      className="rounded-lg"
                      onClick={handleDelete}
                    >
                      Oui, je suis sure
                    </Button>
                    <Button
                      onClick={handleToggleModal}
                      variant={"outline"}
                      className="rounded-lg"
                    >
                      Non, annuler
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showConfirmationModal && (
            <div
              className="fixed inset-0 bg-red-600 opacity-50 z-40"
              style={{ pointerEvents: "none" }}
            ></div>
          )}
        </>
      );
    },
  },
];
