"use client";
import { AreaChart, Area } from "recharts";

export default function NorthstarChart({
  data,
}: {
  data: { createdAt: Date; northStarValue: number }[];
}) {
  return (
    <AreaChart width={200} height={60} data={data}>
      <Area
        type="monotone"
        dataKey="northStarValue"
        fill="#FF0000"
        stroke="#930005"
      />
    </AreaChart>
  );
}
