"use client";

import { useMemo, useState } from "react";
import { TransomCard } from "@/components/TransomCard";
import { portfolioFilters, portfolioItems } from "@/lib/site";

export function PortfolioGallery() {
  const [filter, setFilter] = useState<(typeof portfolioFilters)[number]["id"]>("all");

  const items = useMemo(
    () =>
      filter === "all"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === filter),
    [filter],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {portfolioFilters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={`min-h-11 rounded-full px-3 py-2 text-xs uppercase tracking-[0.14em] sm:px-4 ${
              filter === item.id
                ? "bg-navy text-white"
                : "bg-sand text-navy/70 hover:bg-sand/80"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
        {items.map((item) => (
          <TransomCard key={item.id} item={item} />
        ))}
      </div>
      {items.length === 0 && (
        <p className="mt-8 text-sm text-navy/50">No photos in this category yet.</p>
      )}
    </div>
  );
}
