"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Reservation } from "@/types/reservation";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ReservationChartToday({
  reservations,
  onSelect,
}: {
  reservations: Reservation[];
  onSelect: (res: Reservation) => void;
}) {
  const today = new Date().toISOString().split("T")[0];

  // Filter today only
  const todaysReservations = reservations.filter((r) => r.date === today);

  // Build fixed timeline 11:00–23:00
  const times: any = [];
  for (let hour = 11; hour <= 23; hour++) {
    times.push(`${hour.toString().padStart(2, "0")}:00`);
  }

  // Count per time slot
  const counts: number[] = times.map((t: any) => {
    return todaysReservations.filter((r) => r.startTime === t).length;
  });

  // Chart config
  const data = {
    labels: times,
    datasets: [
      {
        label: "Reservations",
        data: counts,
        backgroundColor: "rgba(234, 88, 12, 0.8)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    onClick: (_: any, elements: any) => {
      if (!elements.length) return;

      const index = elements[0].index;
      const selectedTime = times[index];

      const matched = todaysReservations.filter(
        (r) => r.startTime === selectedTime
      );

      if (matched.length > 0) {
        onSelect(matched[0]); // always pass ONE reservation
      }
    },
    scales: {
      y: {
        title: { display: true, text: "Time" },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
