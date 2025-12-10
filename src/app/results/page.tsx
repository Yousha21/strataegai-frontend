"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useProductScrape } from "@/hooks/use-product-scrape";
import { SearchBar } from "@/components/search-bar";
import { LoaderSkeleton } from "@/components/loader-skeleton";
import { ErrorAlert } from "@/components/error-alert";
import { WholesaleCard } from "@/components/wholesale-card";
import { RetailCard } from "@/components/retail-card";
import { ComparisonSummary } from "@/components/comparison-summary";
import { PriceComparisonChart } from "@/components/charts/price-comparison-chart";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productName = searchParams.get("product") ?? "";

  const { data, isLoading, isError, error } = useProductScrape(productName);

  const madeInChina = data?.wholesale?.made_in_china ?? [];
  const retail = data?.retail ?? [];

  return (
    <div className="mx-auto flex max-w-6xl flex-1 flex-col gap-8 px-4 py-8 sm:py-10">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/")}
            className="h-8 w-8 rounded-full border border-slate-800 bg-slate-900/80 text-slate-300 hover:bg-slate-800/90"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1" />
        </div>
        <div className="space-y-3">
          <h1 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Profit analysis for{" "}
            <span className="text-brand-300">
              {productName || "your product"}
            </span>
          </h1>
          <SearchBar initialValue={productName} isLoading={isLoading} />
        </div>
      </div>

      {isLoading && <LoaderSkeleton />}

      {isError && !isLoading && (
        <ErrorAlert message={error?.message ?? "Failed to fetch results."} />
      )}

      {!isLoading && !isError && data && (
        <div className="space-y-8">
          <ComparisonSummary wholesale={madeInChina} retail={retail} />

          {madeInChina.length > 0 && retail.length > 0 && (
            <PriceComparisonChart
              wholesale={madeInChina.reduce((best, item) =>
                !best || item.unit_price_pkr < best.unit_price_pkr ? item : best
              )}
              retail={retail.reduce((best, item) =>
                !best || item.list_price < best.list_price ? item : best
              )}
            />
          )}

          <div className="grid gap-8 lg:grid-cols-[1.2fr,1.3fr]">
            {/* Wholesale Section */}
            <section className="space-y-4">
              <div>
                <h2 className="text-sm font-semibold text-slate-100 sm:text-base">
                  Wholesale Results
                </h2>
                <p className="text-xs text-slate-400">
                  Best supplier options from Made-in-China.
                </p>
              </div>
              {madeInChina.length === 0 ? (
                <p className="text-xs text-slate-400">
                  No wholesale data found for this product.
                </p>
              ) : (
                <div className="space-y-3">
                  {madeInChina.map((item, idx) => (
                    <WholesaleCard
                      key={idx}
                      item={item}
                      platformLink={data.links_used?.["made_in_china"]}
                    />
                  ))}
                </div>
              )}
            </section>

            {/* Retail Section */}
            <section className="space-y-4">
              <div>
                <h2 className="text-sm font-semibold text-slate-100 sm:text-base">
                  Retail Results (PK)
                </h2>
                <p className="text-xs text-slate-400">
                  Prices from Pakistani online retailers.
                </p>
              </div>
              {retail.length === 0 ? (
                <p className="text-xs text-slate-400">
                  No retail data found for this product.
                </p>
              ) : (
                <div className="grid gap-3 md:grid-cols-2">
                  {retail.map((item, idx) => (
                    <RetailCard key={idx} item={item} />
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
