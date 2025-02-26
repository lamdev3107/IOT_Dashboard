import { Combobox } from "@/components/Combobox";
import { DataTable } from "@/components/DataTable/DataTable";
import { DatePicker } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import React, { useState } from "react";

const data = [
  { id: 1, device: "Đèn", status: true, time: "08:30:04 10-02-2025" },
  { id: 1, device: "Đèn", status: false, time: "09:00:45 10-02-2025" },
  { id: 1, device: "Đèn", status: true, time: "08:30:34 11-02-2025" },
  { id: 1, device: "Đèn", status: true, time: "10:30:32 11-02-2025" },
  { id: 1, device: "Đèn", status: false, time: "10:45:23 12-02-2025" },
  { id: 1, device: "Đèn", status: true, time: "11:00:23 12-02-2025" },
  { id: 1, device: "Đèn", status: true, time: "08:00:23 13-02-2025" },

  { id: 2, device: "Wifi", status: true, time: "10:00:23 13-02-2025" },

  { id: 3, device: "Lò sưởi", status: false, time: "11:15:23 13-02-2025" },

  { id: 4, device: "Điều hòa", status: true, time: "10:30:23 10-02-2025" },
  { id: 4, device: "Điều hòa", status: false, time: "11:00:42 10-02-2025" },
  { id: 4, device: "Điều hòa", status: false, time: "09:30:15 11-02-2025" },
  { id: 4, device: "Điều hòa", status: false, time: "08:00:15 12-02-2025" },
  { id: 4, device: "Điều hòa", status: true, time: "09:15:17 12-02-2025" },
  { id: 4, device: "Điều hòa", status: false, time: "11:30:42 12-02-2025" },
  { id: 4, device: "Điều hòa", status: false, time: "09:30:52 13-02-2025" },
];

export const columns = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       className="text-left"
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   // cell: ({ row }) => (
  //   //   <Checkbox
  //   //     className="text-left"
  //   //     checked={row.getIsSelected()}
  //   //     onCheckedChange={(value) => row.toggleSelected(!!value)}
  //   //     aria-label="Select row"
  //   //   />
  //   // ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID thiết bị
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize text-left px-4">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "device",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Thiết bị
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize text-left px-4">{row.getValue("device")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="text-left">Trạng thái</div>,
    cell: ({ row }) => {
      return (
        <div
          className={`${
            row.getValue("status")
              ? "text-blue-500 bg-blue-50 border border-blue-500 w-fit rounded-md px-2 py-0.5"
              : "text-red-500 bg-red-50 border border-red-500 w-fit rounded-md px-2 py-0.5"
          }`}
        >
          {row.getValue("status") ? "Bật" : "Tắt"}
        </div>
      );
    },
  },
  {
    accessorKey: "time",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-0"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Thời gian
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{row.getValue("time")}</div>
      );
    },
  },
  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: ({ row }) => {
  //     const payment = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
export const History = () => {
  const [searchBy, setSearchBy] = useState({
    label: "Tìm kiếm theo thiết bị",
    value: "device",
  });
  const [date, setDate] = useState(null);
  const optionList = [
    {
      label: "Tìm kiếm theo thiết bị",
      value: "device",
    },
    {
      label: "Tìm kiếm theo trạng thái",
      value: "status",
    },
    {
      label: "Tìm kiếm theo thời gian",
      value: "time",
    },
  ];
  return (
    <>
      <Card className=" rounded-xl col-span-2 lg:col-span-1 bg-primary shadow-[inset_0px_4px_10px_#d5e7fb] p-4 lg:p-4 text-center">
        <div className="flex justify-between items-center ">
          <h2 className="font-semibold  text-lg mb-3">Lịch sử bật tắt</h2>
        </div>
        <CardContent className="p-0 ">
          <div className="flex items-center gap-2 mb-3">
            <Input
              placeholder={`${searchBy.label}...`}
              // value={""}
              // onChange={(event) =>
              //   table.getColumn("email")?.setFilterValue(event.target.value)
              // }
              className="max-w-sm w-56 bg-white "
            />
            <Combobox
              className={"w-fit"}
              searchable={false}
              optionList={optionList}
              selectedOption={searchBy}
              setSelectedOption={setSearchBy}
              placeholder={"Tìm kiếm theo"}
            />
            {/* <DatePicker date={date} setDate={setDate} /> */}
          </div>
          {<DataTable data={data} columns={columns} />}
        </CardContent>
      </Card>
    </>
  );
};
