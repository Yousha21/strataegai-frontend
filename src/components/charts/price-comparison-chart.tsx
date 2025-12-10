"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import type { WholesaleItem, RetailItem } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PriceComparisonChartProps {
  wholesale: WholesaleItem;
  retail: RetailItem;
}

export const PriceComparisonChart = ({
  wholesale,
  retail
}: PriceComparisonChartProps) => {
  const data = [
    {
      name: "Wholesale",
      Price: wholesale.unit_price_pkr
    },
    {
      name: "Retail",
      Price: retail.list_price
    }
  ];

  return (
    <Card className="border-slate-800 bg-slate-900/80">
      <CardHeader>
        <CardTitle className="text-sm">Wholesale vs Retail (PKR)</CardTitle>
      </CardHeader>
      <CardContent className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 8 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Price" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
