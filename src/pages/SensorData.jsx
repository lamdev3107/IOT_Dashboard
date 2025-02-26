import { Combobox } from "@/components/Combobox";
import { DataTable } from "@/components/DataTable/DataTable";
import DateRangePicker from "@/components/DateRangePicker";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import React, { useState } from "react";

const data = [
  {
    id: 1,
    sensor: "Cảm biến môi trường",
    temperature: 22.5,
    humidity: 55,
    light: 300,
    time: "08:30:42 10-02-2025",
  },
  {
    id: 2,
    sensor: "Cảm biến môi trường",
    temperature: 24.1,
    humidity: 60,
    light: 500,
    time: "09:15:25 10-02-2025",
  },
  {
    id: 3,
    sensor: "Cảm biến môi trường",
    temperature: 26.3,
    humidity: 65,
    light: 700,
    time: "10:45:12 10-02-2025",
  },
  {
    id: 4,
    sensor: "Cảm biến môi trường",
    temperature: 27.8,
    humidity: 50,
    light: 200,
    time: "11:30:27 10-02-2025",
  },
  {
    id: 5,
    sensor: "Cảm biến môi trường",
    temperature: 25.0,
    humidity: 45,
    light: 150,
    time: "08:00:17 11-02-2025",
  },
  {
    id: 6,
    sensor: "Cảm biến môi trường",
    temperature: 28.6,
    humidity: 70,
    light: 900,
    time: "09:45:16 11-02-2025",
  },
  {
    id: 7,
    sensor: "Cảm biến môi trường",
    temperature: 30.2,
    humidity: 75,
    light: 950,
    time: "11:00:23 11-02-2025",
  },
  {
    id: 8,
    sensor: "Cảm biến môi trường",
    temperature: 32.1,
    humidity: 80,
    light: 1000,
    time: "12:15:52 11-02-2025",
  },
  {
    id: 9,
    sensor: "Cảm biến môi trường",
    temperature: 29.5,
    humidity: 72,
    light: 850,
    time: "08:30:32 12-02-2025",
  },
  {
    id: 10,
    sensor: "Cảm biến môi trường",
    temperature: 23.7,
    humidity: 58,
    light: 400,
    time: "09:20:24 12-02-2025",
  },
  {
    id: 11,
    sensor: "Cảm biến môi trường",
    temperature: 31.0,
    humidity: 68,
    light: 750,
    time: "10:50:23 12-02-2025",
  },
  {
    id: 12,
    sensor: "Cảm biến môi trường",
    temperature: 33.4,
    humidity: 78,
    light: 970,
    time: "11:40:16 12-02-2025",
  },
  {
    id: 13,
    sensor: "Cảm biến môi trường",
    temperature: 20.8,
    humidity: 42,
    light: 120,
    time: "08:10:17 13-02-2025",
  },
  {
    id: 14,
    sensor: "Cảm biến môi trường",
    temperature: 34.0,
    humidity: 79,
    light: 980,
    time: "09:55:25 13-02-2025",
  },
  {
    id: 15,
    sensor: "Cảm biến môi trường",
    temperature: 21.5,
    humidity: 48,
    light: 180,
    time: "11:20:23 13-02-2025",
  },
];

export const columns = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <div className="capitalize text-left">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "sensor",
    header: ({ column }) => (
      <Button
        id="sensor"
        variant="ghost"
        className="px-0 font-bold "
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Cảm biến
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{"Cảm biến môi trường"}</div>
      );
    },
  },
  {
    accessorKey: "temperature",
    header: ({ column }) => {
      return (
        <Button
          className="font-bold "
          id="temperature"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nhiệt độ (°C)
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize  px-4 text-left">
        {row.getValue("temperature")}
      </div>
    ),
  },
  {
    accessorKey: "humidity",
    header: ({ column }) => {
      return (
        <Button
          id="humidity"
          className="font-bold "
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Độ ẩm (%)
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize text-left px-4">
        {row.getValue("humidity")}
      </div>
    ),
  },
  {
    accessorKey: "light",
    header: ({ column }) => {
      return (
        <Button
          id="light"
          className="font-bold "
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ánh sáng (lux)
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize text-left px-4">{row.getValue("light")}</div>
    ),
  },

  {
    accessorKey: "time",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="font-bold px-0"
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
];
export const SensorData = () => {
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const [searchBy, setSearchBy] = useState({
    label: "Tìm kiếm theo nhiệt độ",
    value: "temperature",
  });
  const optionList = [
    {
      label: "Tìm kiếm theo nhiệt độ",
      value: "temperature",
    },
    {
      label: "Tìm kiếm theo độ ẩm",
      value: "humidity",
    },
    {
      label: "Tìm kiếm theo ánh sáng",
      value: "light",
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
          <h2 className="font-semibold  text-xl">Dữ liệu cảm biến</h2>
        </div>
        <CardContent className="p-0 ">
          <div className="flex items-center gap-2 mt-5 mb-3">
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
            {/* <DateRangePicker
              className={"w-fit"}
              dateRange={dateRange}
              setDateRange={setDateRange}
            /> */}
          </div>
          {<DataTable data={data} columns={columns} />}
        </CardContent>
      </Card>
    </>
  );
};
