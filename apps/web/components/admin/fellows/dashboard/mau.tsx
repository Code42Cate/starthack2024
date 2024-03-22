"use client";
import { AreaChart, Area } from "recharts";

export default function MauChart({
  data,
}: {
  data: { createdAt: Date; monthlyActiveUsers: number }[];
}) {
  return (
    <AreaChart width={200} height={60} data={data}>
      <Area
        type="monotone"
        dataKey="monthlyActiveUsers"
        fill="#FF2770"
        stroke="#BC2263"
      />
    </AreaChart>
  );
}
