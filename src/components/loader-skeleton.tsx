"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const LoaderSkeleton = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="h-10 w-56 bg-slate-800" />
      <div className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/80 p-4"
          >
            <Skeleton className="h-5 w-32 bg-slate-800" />
            <Skeleton className="h-4 w-full bg-slate-800" />
            <Skeleton className="h-4 w-1/2 bg-slate-800" />
            <Skeleton className="h-4 w-3/4 bg-slate-800" />
          </div>
        ))}
      </div>
    </div>
  );
};
