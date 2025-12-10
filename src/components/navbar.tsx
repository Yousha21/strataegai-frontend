"use client";

import { PackageSearch } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <PackageSearch className="h-6 w-6 text-brand-400" />
          <span className="text-lg font-semibold tracking-tight">
            StrategAI
          </span>
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <Link
            href="https://vercel.com"
            target="_blank"
            className="hidden text-slate-400 hover:text-slate-100 sm:inline"
          >
            Docs (TBD)
          </Link>
          <Button
            size="sm"
            className="rounded-full bg-brand-600 hover:bg-brand-500"
          >
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
};
