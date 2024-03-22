"use client";
import { AreaChart, Area } from "recharts";

export default function RevenueChart({
  data,
}: {
  data: { createdAt: Date; revenue: number }[];
}) {
  return (
    <AreaChart width={200} height={60} data={data}>
      <Area type="monotone" dataKey="revenue" fill="#FF6100" stroke="#930005" />
    </AreaChart>
  );
}
