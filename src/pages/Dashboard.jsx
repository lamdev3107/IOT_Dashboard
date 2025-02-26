import React, { useEffect } from "react";
import {
  LuAirVent,
  LuLightbulb,
  LuPowerOff,
  LuSpeaker,
  LuTvMinimal,
} from "react-icons/lu";
const devices = [
  {
    title: "Smart TV",
    icon: <LuTvMinimal />,
    active: true,
  },
  {
    title: "Đèn",
    icon: <LuLightbulb />,
    active: false,
  },
  {
    title: "Điều hòa",
    icon: <LuAirVent />,
    active: true,
  },
  {
    title: "Loa",
    icon: <LuSpeaker />,
    active: false,
  },
];
import {
  Thermometer,
  Droplet,
  Tv,
  Lightbulb,
  Wifi,
  PlusCircle,
  Power,
  LucideAlarmSmoke,
  LucideLightbulb,
} from "lucide-react";

const data = [];
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MyLineChart } from "@/components/MyLineChart";
import { ChartContainer } from "@/components/ui/chart";

export const Dashboard = () => {
  const [airConditioner, setAirConditioner] = useState(true);
  const [wifiRouter, setWifiRouter] = useState(false);
  const [light, setLight] = useState(true);
  const [smartTV, setSmartTV] = useState(false);
  const [heater, setHeater] = useState(false);
  const [ac, setAC] = useState(false);
  const [temperature, setTemperature] = useState(25);
  useEffect(() => {
    setTemperature(25);
  }, [ac]);
  const chartConfig = {
    light: {
      label: "độ sáng (lux)",
      color: "#ffb433",
    },
    humidity: {
      label: "độ ẩm (%)",
      color: "#8dc8e8",
    },
    temperature: {
      label: "nhiệt độ (%)",
      color: "#e32d45",
    },
  };
  const chartData = [
    { day: "Mon", light: 42, humidity: 28, temperature: 28 },
    { day: "Tue", light: 55, humidity: 41, temperature: 26 },
    { day: "Wed", light: 46, humidity: 30, temperature: 24 },
    { day: "Thur", light: 39, humidity: 30, temperature: 30 },
    { day: "Fri", light: 55, humidity: 36, temperature: 23 },
    { day: "Sat", light: 58, humidity: 27, temperature: 25 },
    { day: "Sun", light: 46, humidity: 39, temperature: 27 },
  ];

  return (
    <div className="grid  auto-rows-min gap-4 md:grid-cols-12 ">
      <div className="col-span-12 md:col-span-8 ">
        {/* <div className=" grid auto-rows-min gap-4 md:grid-cols-4">
          <Card className="rounded-xl col-span-2 lg:col-span-1 bg-primary shadow-[inset_0px_4px_10px_#d5e7fb] p-6 lg:p-4 text-center">
            <CardContent className="p-0 ">
              <p className="text-lg text-left mb-2 font-semibold text-gray-700">
                Wi-Fi Router
              </p>
              <div className="flex justify-center items-center gap-3 my-4">
                <div className="rounded-full shadow-inner p-2 bg-white">
                  <Wifi className="text-primaryBlue" size={32} />
                </div>
                <p className="text-gray-700">3 users</p>
              </div>

              <div className="flex justify-between items-center">
                {wifiRouter ? (
                  <span className="text-gray-700">ON</span>
                ) : (
                  <span className="text-gray-700">OFF</span>
                )}
                <Switch
                  checked={wifiRouter}
                  onCheckedChange={setWifiRouter}
                  className=""
                />
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-xl col-span-2 lg:col-span-1 bg-primary shadow-[inset_0px_4px_10px_#d5e7fb] p-6 lg:p-4 text-center">
            <CardContent className="p-0 ">
              <p className="text-lg text-left mb-2 font-semibold text-gray-700">
                Smart TV
              </p>
              <div className="flex justify-center items-center gap-3 my-4">
                <div className="rounded-full shadow-inner p-2.5 bg-white">
                  <Tv className="text-primaryBlue" size={28} />
                </div>
                <p className="text-gray-700">35% volume</p>
              </div>

              <div className="flex justify-between items-center">
                {smartTV ? (
                  <span className="text-gray-700">ON</span>
                ) : (
                  <span className="text-gray-700">OFF</span>
                )}
                <Switch
                  checked={smartTV}
                  onCheckedChange={setSmartTV}
                  className=""
                />
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-xl col-span-2 lg:col-span-1 bg-primary shadow-[inset_0px_4px_10px_#d5e7fb] p-6 lg:p-4 text-center">
            <CardContent className="p-0 ">
              <p className="text-lg text-left mb-2 font-semibold text-gray-700">
                Light
              </p>
              <div className="flex justify-center items-center gap-3 my-4">
                <div className="rounded-full shadow-inner p-2 bg-white">
                  <Lightbulb className="text-primaryBlue" size={32} />
                </div>
                <p className="text-gray-700">10 bóng</p>
              </div>

              <div className="flex justify-between items-center">
                {light ? (
                  <span className="text-gray-700">ON</span>
                ) : (
                  <span className="text-gray-700">OFF</span>
                )}
                <Switch
                  checked={light}
                  onCheckedChange={setLight}
                  className=""
                />
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-xl col-span-2 lg:col-span-1 bg-primary shadow-[inset_0px_4px_10px_#d5e7fb] p-6 lg:p-4 text-center">
            <CardContent className="p-0 ">
              <p className="text-lg text-left mb-2 font-semibold text-gray-700">
                Heater
              </p>
              <div className="flex justify-center items-center gap-3 my-4">
                <div className="rounded-full shadow-inner p-2 bg-white">
                  <LucideAlarmSmoke className="text-primaryBlue" size={31} />
                </div>
                <p className="text-gray-700">35°C</p>
              </div>

              <div className="flex justify-between items-center">
                {heater ? (
                  <span className="text-gray-700">ON</span>
                ) : (
                  <span className="text-gray-700">OFF</span>
                )}
                <Switch
                  checked={heater}
                  onCheckedChange={setHeater}
                  className=""
                />
              </div>
            </CardContent>
          </Card>
        </div> */}
        <div className="grid grid-cols-3 gap-4">
          <Card className=" rounded-xl col-span-1 bg-primary shadow-[inset_0px_4px_10px_#d5e7fb] p-4  text-center">
            <CardContent className="p-0 flex flex-col items-center md:items-start gap-3">
              <div className="rounded-full shadow-inner w-fit p-2 bg-white">
                <Thermometer className="text-primaryBlue" size={31} />
              </div>
              <p className="text-md font-semibold text-gray-700">Nhiệt độ</p>
              <p className="text-xl font-bold text-gray-800">21°C</p>
            </CardContent>
          </Card>
          <Card className=" rounded-xl col-span-1 bg-primary shadow-[inset_0px_4px_10px_#d5e7fb] p-4  text-center">
            <CardContent className="p-0 flex flex-col items-center md:items-start gap-3">
              <div className="rounded-full shadow-inner w-fit p-2 bg-white">
                <Droplet className="text-primaryBlue" size={31} />
              </div>
              <p className="text-md font-semibold text-gray-700">Độ ẩm</p>
              <p className="text-xl font-bold text-gray-800">60%</p>
            </CardContent>
          </Card>
          <Card className=" rounded-xl col-span-1 bg-primary shadow-[inset_0px_4px_10px_#d5e7fb] p-4  text-center">
            <CardContent className="p-0 flex flex-col items-center md:items-start gap-3">
              <div className="rounded-full shadow-inner w-fit p-2 bg-white">
                <LucideLightbulb className="text-primaryBlue" size={31} />
              </div>
              <p className="text-md font-semibold text-gray-700">Ánh sáng</p>
              <p className="text-xl font-bold text-gray-800">34 lux</p>
            </CardContent>
          </Card>
        </div>
        {/* Energy Saving Chart */}
        <Card className="mt-4 rounded-xl bg-primary shadow-[inset_0px_4px_10px_#d5e7fb] p-6">
          <CardContent className="p-0 flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Dữ liệu cảm biến theo tuần
            </h3>

            {/* <Card>
              <CardHeader>
                <CardTitle></CardTitle>
              </CardHeader>
              <CardContent> */}
            <MyLineChart chartConfig={chartConfig} chartData={chartData} />
            {/* </CardContent>
            </Card> */}
          </CardContent>
        </Card>
      </div>
      {/* Air Conditioner Control */}
      <div className="col-span-12 md:col-span-4 flex flex-col gap-4 auto-rows-min">
        <Card className=" bg-primary flex-1 rounded-xl shadow-[inset_0px_4px_10px_#d5e7fb] p-5 text-center relative">
          <CardContent className="p-0">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Điều hòa
            </h3>
            <div className="relative flex flex-col items-center gap-1.5">
              <div
                className={`w-44 h-44 rounded-full border-8 ${
                  ac ? "border-blue-400" : "border-slate-300"
                } flex items-center justify-center`}
              >
                {ac ? (
                  <p className="text-3xl font-bold text-gray-800">
                    {temperature}°C
                  </p>
                ) : (
                  <LuPowerOff size={44} className="text-slate-300" />
                )}
              </div>
              <div className="flex justify-center mt-4 space-x-4 ">
                <Button
                  className="text-lg text-gray-800 hover:bg-white"
                  onClick={() => setTemperature(temperature - 1)}
                >
                  -
                </Button>
                <Button
                  className="text-lg text-gray-800 hover:bg-white"
                  onClick={() => setTemperature(temperature + 1)}
                >
                  +
                </Button>
              </div>
              <div className="flex items-center justify-center mt-4 space-x-4">
                <div className={`${ac ? "text-blue-500" : "text-gray-500"}`}>
                  ON
                </div>
                <Button
                  onClick={() => setAC(!ac)}
                  className="rounded-full bg-transparent hover:bg-white w-10 h-10"
                >
                  <Power className="text-red-600 w-6 h-6 " />
                </Button>
                <div className={`${ac ? "text-gray-500" : "text-blue-500"}`}>
                  OFF
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className=" grid auto-rows-min gap-4 md:grid-cols-2 ">
          {/* <Card className="rounded-xl col-span-2 lg:col-span-1 bg-primary shadow-[inset_0px_4px_10px_#d5e7fb] p-6 lg:p-4 text-center">
            <CardContent className="p-0 ">
              <p className="text-lg text-left mb-2 font-semibold text-gray-700">
                Wi-Fi Router
              </p>
              <div className="flex justify-center items-center gap-3 my-4">
                <div className="rounded-full shadow-inner p-2 bg-white">
                  <Wifi className="text-primaryBlue" size={32} />
                </div>
                <p className="text-gray-700">3 users</p>
              </div>

              <div className="flex justify-between items-center">
                {wifiRouter ? (
                  <span className="text-gray-700">ON</span>
                ) : (
                  <span className="text-gray-700">OFF</span>
                )}
                <Switch
                  checked={wifiRouter}
                  onCheckedChange={setWifiRouter}
                  className=""
                />
              </div>
            </CardContent>
          </Card> */}

          <Card className="rounded-xl col-span-1 bg-primary shadow-[inset_0px_4px_10px_#d5e7fb] p-6 lg:p-4 text-center">
            <CardContent className="p-0 ">
              <p className="text-lg text-left mb-2 font-semibold text-gray-700">
                Bóng đèn
              </p>
              <div className="flex justify-center items-center gap-3 my-4">
                <div className="rounded-full shadow-inner p-2 bg-white">
                  <Lightbulb className="text-primaryBlue" size={32} />
                </div>
                <p className="text-gray-700">10 bóng</p>
              </div>

              <div className="flex justify-between items-center">
                {light ? (
                  <span className="text-gray-700">ON</span>
                ) : (
                  <span className="text-gray-700">OFF</span>
                )}
                <Switch
                  checked={light}
                  onCheckedChange={setLight}
                  className=""
                />
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-xl col-span-1 bg-primary shadow-[inset_0px_4px_10px_#d5e7fb] p-6 lg:p-4 text-center">
            <CardContent className="p-0 ">
              <p className="text-lg text-left mb-2 font-semibold text-gray-700">
                Lò sưởi
              </p>
              <div className="flex justify-center items-center gap-3 my-4">
                <div className="rounded-full shadow-inner p-2 bg-white">
                  <LucideAlarmSmoke className="text-primaryBlue" size={31} />
                </div>
                <p className="text-gray-700">35°C</p>
              </div>

              <div className="flex justify-between items-center">
                {heater ? (
                  <span className="text-gray-700">ON</span>
                ) : (
                  <span className="text-gray-700">OFF</span>
                )}
                <Switch
                  checked={heater}
                  onCheckedChange={setHeater}
                  className=""
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
