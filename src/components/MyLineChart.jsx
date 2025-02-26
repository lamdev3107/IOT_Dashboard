"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  // ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function MyLineChart({ chartConfig, chartData }) {
  const yAxisData = [
    "0",
    "20",
    "30",
    "40",
    "50",
    "60",
    "70",
    "80",
    "90",
    "100",
  ];
  return (
    <ChartContainer className="max-h-[43vh] bg-white" config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={"day"}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        {/* <YAxis
          dataKey={"yAxisData"}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        /> */}
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

        {Object.entries(chartConfig).map(([key, value], id) => {
          return (
            <Line
              dataKey={key}
              type="monotone"
              stroke={value?.color}
              strokeWidth={2}
              dot={false}
            />
          );
        })}

        {/* <Line
          dataKey="light"
          type="monotone"
          stroke="var(--color-light)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="temperature"
          type="monotone"
          stroke="var(--color-temperature)"
          strokeWidth={2}
          dot={false}
        /> */}
      </LineChart>
    </ChartContainer>
  );
}
