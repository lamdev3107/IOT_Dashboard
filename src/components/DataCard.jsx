import React from "react";
import { Card, CardContent } from "./ui/card";

export const DataCard = ({ title, data }) => {
  return (
    <Card className="bg-white rounded-md flex flex-col gap-2 items-center justify-center drop-shadow ">
      <CardContent>
        <p className="text-md ">{title}</p>
        <p className="text-2xl font-semibold">{data}</p>
      </CardContent>
    </Card>
  );
};
