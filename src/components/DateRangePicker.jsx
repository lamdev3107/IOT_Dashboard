import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

const DateRangePicker = ({ className, dateRange, setDateRange }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={`w-full justify-between text-gray-900 ${
            className && className
          }`}
        >
          {dateRange.from && dateRange.to
            ? `${format(dateRange.from, "dd/MM/yyyy")} → ${format(
                dateRange.to,
                "dd/MM/yyyy"
              )}`
            : "Từ ngày → Đến ngày"}
          <CalendarIcon className="ml-2 w-4 h-4 text-gray-400" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DateRangePicker;
