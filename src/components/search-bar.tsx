"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  initialValue?: string;
  isLoading?: boolean;
}

export const SearchBar = ({ initialValue = "", isLoading }: SearchBarProps) => {
  const [value, setValue] = useState(initialValue);
  const router = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    router.push(`/results?product=${encodeURIComponent(value.trim())}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-xl shadow-brand-900/20 sm:flex-row"
    >
      <div className="flex flex-1 items-center gap-2">
        <Search className="hidden h-5 w-5 text-slate-400 sm:inline" />
        <Input
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Enter a product name e.g. “Redragon K552”"
          className="border-none bg-slate-900 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:ring-brand-500"
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading || !value.trim()}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Sparkles className="h-4 w-4" />
        {isLoading ? "Analyzing..." : "Optimize Profit"}
      </Button>
    </form>
  );
};
