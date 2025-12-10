"use client";

import { Store } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { RetailItem } from "@/lib/types";

interface RetailCardProps {
  item: RetailItem;
}

export const RetailCard = ({ item }: RetailCardProps) => {
  return (
    <Card className="border-slate-800 bg-slate-900/80">
      <CardHeader className="flex flex-row items-start justify-between gap-2">
        <div>
          <CardTitle className="flex items-center gap-2 text-sm">
            <Store className="h-4 w-4 text-sky-400" />
            <span className="line-clamp-1">{item.title || "Listing"}</span>
          </CardTitle>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <Badge variant="outline" className="border-sky-700 text-sky-300">
              {item.platform}
            </Badge>
            <span>Seller: {item.seller || "N/A"}</span>
          </div>
        </div>
        <div className="text-right text-xs">
          <div className="font-semibold text-sky-300">
            Rs {item.list_price.toLocaleString("en-PK")}
          </div>
          {item.promo && (
            <div className="mt-1 text-[10px] text-emerald-400">
              {item.promo}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-2 text-xs text-slate-300">
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-xs text-sky-300 hover:text-sky-200"
        >
          Open listing →
        </a>
      </CardContent>
    </Card>
  );
};
