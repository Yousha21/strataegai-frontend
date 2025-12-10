"use client";

import { Factory } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import type { WholesaleItem } from "@/lib/types";

interface WholesaleCardProps {
  item: WholesaleItem;
  platformLink?: string;
}

export const WholesaleCard = ({ item, platformLink }: WholesaleCardProps) => {
  const attributes = Object.entries(item.attributes_listing ?? {});

  return (
    <Card className="border-slate-800 bg-slate-900/80">
      <CardHeader className="flex flex-row items-start justify-between gap-2">
        <div>
          <CardTitle className="flex items-center gap-2 text-sm">
            <Factory className="h-4 w-4 text-brand-400" />
            <span>{item.supplier || "Unknown Supplier"}</span>
          </CardTitle>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <Badge variant="outline" className="border-brand-700 text-brand-300">
              {item.platform || "made-in-china"}
            </Badge>
            <span>MOQ: {item.moq || item.moq_listing || 0}</span>
            <span>Origin: {item.origin || "N/A"}</span>
          </div>
        </div>
        <div className="text-right text-xs">
          <div className="font-semibold text-brand-300">
            ${item.unit_price.toFixed(2)} {item.currency || "USD"}
          </div>
          <div className="text-slate-400">
            ≈ Rs {item.unit_price_pkr.toLocaleString("en-PK")}
          </div>
          <div className="mt-1 text-[10px] text-slate-500">
            Lead time: {item.lead_time || "N/A"}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {attributes.length > 0 && (
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-xs text-slate-300 hover:bg-slate-800/80"
              >
                View attributes
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-1 text-xs text-slate-300">
              {attributes.map(([key, value]) => (
                <div key={key} className="flex justify-between gap-2">
                  <span className="text-slate-500">{key}</span>
                  <span className="text-right">{String(value)}</span>
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        )}

        {platformLink && (
          <a
            href={platformLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-xs text-brand-300 hover:text-brand-200"
          >
            View listings on platform →
          </a>
        )}
      </CardContent>
    </Card>
  );
};
