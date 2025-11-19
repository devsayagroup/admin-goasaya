"use client";

import { cn } from "@/lib/utils";

export default function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "px-2 py-1 text-xs font-semibold rounded-full",
        status === "Confirmed" && "bg-green-100 text-green-700",
        status === "Pending" && "bg-yellow-100 text-yellow-700",
        status === "Cancelled" && "bg-red-100 text-red-700"
      )}
    >
      {status}
    </span>
  );
}
