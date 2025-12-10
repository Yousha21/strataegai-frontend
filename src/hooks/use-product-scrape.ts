"use client";

import { useQuery } from "@tanstack/react-query";
import { scrapeProduct } from "@/lib/api";
import type { ScraperResponse } from "@/lib/types";

export const useProductScrape = (productName: string) => {
  return useQuery<ScraperResponse, Error>({
    queryKey: ["scrape-product", productName],
    queryFn: () => scrapeProduct(productName),
    enabled: !!productName && productName.trim().length > 0
  });
};
