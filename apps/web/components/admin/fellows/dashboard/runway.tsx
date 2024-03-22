"use client";
import React from "react";
import { BarChart, Bar } from "recharts";

export default function RunwayChart({
  data,
}: {
  data: { createdAt: Date; runwayMonths: number }[];
}) {
  return (
    <BarChart width={200} height={40} data={data}>
      <Bar dataKey="runwayMonths" fill="#FF6100" />
    </BarChart>
  );
}
