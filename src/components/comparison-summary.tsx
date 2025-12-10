"use client";

import { TrendingUp, BadgeDollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { RetailItem, WholesaleItem } from "@/lib/types";

interface ComparisonSummaryProps {
  wholesale: WholesaleItem[];
  retail: RetailItem[];
}

export const ComparisonSummary = ({
  wholesale,
  retail
}: ComparisonSummaryProps) => {
  if (!wholesale.length || !retail.length) return null;

  const bestWholesale = wholesale.reduce((best, item) => {
    if (!best) return item;
    return item.unit_price_pkr < best.unit_price_pkr ? item : best;
  });

  const cheapestRetail = retail.reduce((best, item) => {
    if (!best) return item;
    return item.list_price < best.list_price ? item : best;
  });

  const profitPerUnit =
    cheapestRetail.list_price - bestWholesale.unit_price_pkr;

  return (
    <Card className="border-brand-800/70 bg-gradient-to-br from-slate-900/90 via-slate-900/90 to-brand-950/70">
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        <CardTitle className="flex items-center gap-2 text-sm">
          <TrendingUp className="h-5 w-5 text-emerald-400" />
          Profit Recommendation
        </CardTitle>
        <Badge
          variant="outline"
          className="border-emerald-600 bg-emerald-950/50 text-emerald-300"
        >
          AI Insight
        </Badge>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-4">
        <div className="space-y-1 text-xs">
          <p className="text-slate-400">Best Wholesale</p>
          <p className="text-sm font-semibold text-slate-100">
            {bestWholesale.supplier}
          </p>
          <p className="text-[11px] text-slate-400">
            {bestWholesale.platform} • Rs{" "}
            {bestWholesale.unit_price_pkr.toLocaleString("en-PK")}
          </p>
        </div>

        <div className="space-y-1 text-xs">
          <p className="text-slate-400">Cheapest Retail Price</p>
          <p className="text-sm font-semibold text-slate-100">
            Rs {cheapestRetail.list_price.toLocaleString("en-PK")}
          </p>
          <p className="text-[11px] text-slate-400">
            {cheapestRetail.platform} • {cheapestRetail.seller}
          </p>
        </div>

        <div className="space-y-1 text-xs">
          <p className="text-slate-400">Profit per unit</p>
          <p
            className={`flex items-center gap-1 text-sm font-semibold ${
              profitPerUnit >= 0 ? "text-emerald-400" : "text-rose-400"
            }`}
          >
            <BadgeDollarSign className="h-4 w-4" />
            Rs {profitPerUnit.toLocaleString("en-PK", { maximumFractionDigits: 0 })}
          </p>
          <p className="text-[11px] text-slate-400">
            (Retail − Wholesale in PKR)
          </p>
        </div>

        <div className="space-y-1 text-xs">
          <p className="text-slate-400">Suggested Strategy</p>
          <p className="text-[11px] text-slate-300">
            Source from <span className="font-semibold">{bestWholesale.supplier}</span>{" "}
            ({bestWholesale.platform}) and list on{" "}
            <span className="font-semibold">{cheapestRetail.platform}</span> at
            or above Rs {cheapestRetail.list_price.toLocaleString("en-PK")}.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
