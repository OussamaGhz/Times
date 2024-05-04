"use client";
import PageContainer from "@/app/ui/dashboard/page-container";
import React, { useState } from "react";
import { Teacher, columns } from "@/app/ui/salles/columns";
import { DataTable } from "@/app/ui/salles/data-table";
import { Button } from "@/components/ui/button";
import PlusIcon from "@/app/ui/icon/plus-icon";
import { set } from "date-fns";

async function getData(): Promise<Teacher[]> {
  // Fetch data from your API here.
  return [
    { nom_salle: "Salle 101", type_salle: "Type A", capacity: 30 },
    { nom_salle: "Salle 102", type_salle: "Type B", capacity: 25 },
    { nom_salle: "Salle 103", type_salle: "Type A", capacity: 35 },
    { nom_salle: "Salle 104", type_salle: "Type B", capacity: 40 },
    { nom_salle: "Salle 105", type_salle: "Type A", capacity: 28 },
    { nom_salle: "Salle 106", type_salle: "Type B", capacity: 45 },
    { nom_salle: "Salle 107", type_salle: "Type A", capacity: 50 },
    { nom_salle: "Salle 108", type_salle: "Type B", capacity: 33 },
    { nom_salle: "Salle 109", type_salle: "Type A", capacity: 38 },
    { nom_salle: "Salle 110", type_salle: "Type B", capacity: 42 },
  ];
}

const EnseignantsPage = async () => {
  const [modal, setModal] = useState<boolean>(false);
  const handleToggleModal = () => {
    setModal(!modal);
  };
  const data = await getData();
  return (
    <>
      <PageContainer>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <h1 className="font-[600] text-[40px] text-left my-[30px] ">
              Salles
            </h1>
            <Button
              variant="default"
              className="flex gap-2 px-[15px] py-[22px] max:w-56  text-white bg-[#4A58EC] rounded-[11px]"
            >
              <PlusIcon />
              <p>Add new salles</p>
            </Button>
          </div>

          <DataTable columns={columns} data={data} />
        </div>
        <div>
          <button
            data-modal-target="popup-modal"
            onClick={handleToggleModal}
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Toggle modal
          </button>

          <div
            id="popup-modal"
            tabIndex={-1}
            className={`${
              modal ? "flex" : "hidden"
            } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  onClick={handleToggleModal}
                  className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="popup-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">
                  <svg
                    className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this product?
                  </h3>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    onClick={handleToggleModal}
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default EnseignantsPage;
