"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

import { Reservation } from "@/types/reservation";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ReservationChart({
  reservations,
}: {
  reservations: Reservation[];
}) {
  // Count reservations per day
  const counts: Record<string, number> = {};
  reservations.forEach((r) => {
    counts[r.date] = (counts[r.date] || 0) + 1;
  });

  const labels = Object.keys(counts);
  const values = Object.values(counts);

  return (
    <Bar
      data={{
        labels,
        datasets: [
          {
            label: "Reservations",
            data: values,
            backgroundColor: "rgba(234, 88, 12, 0.8)", // Orange
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: { legend: { display: false } },
      }}
    />
  );
}
