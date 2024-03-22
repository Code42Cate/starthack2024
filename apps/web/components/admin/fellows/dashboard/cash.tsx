"use client";
import { AreaChart, Area } from "recharts";

export default function CashChart({
  data,
}: {
  data: { createdAt: Date; cash: number }[];
}) {
  return (
    <AreaChart width={200} height={60} data={data}>
      <Area type="monotone" dataKey="cash" fill="#34E1B8" stroke="#289E90" />
    </AreaChart>
  );
}
