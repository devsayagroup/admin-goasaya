// export default function ReservationInsight() {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow border border-neutral-500">
//       <h2 className="font-bold text-lg mb-4">Reservation Insight</h2>
//       <p className="text-sm text-neutral-600">
//         Additional analytics go here (peak hours, most booked area, etc.).
//       </p>
//     </div>
//   );
// }

"use client";

import { Calendar, Users, Hourglass, Star, MapPin } from "lucide-react";
import { Reservation } from "@/types/reservation";
import { useMemo } from "react";

export default function ReservationInsight({
  reservations,
}: {
  reservations: Reservation[];
}) {

  // --- Helper: extract hour from "17:00"
  const extractHour = (time: string | undefined) => {
    if (!time) return null;
    return time.split(":")[0]; // "17"
  };

  // --- Most popular area ---
  const mostPopularArea = useMemo(() => {
    const areaCount: Record<string, number> = {};

    reservations.forEach((r) => {
      areaCount[r.area] = (areaCount[r.area] || 0) + 1;
    });

    const sorted = Object.entries(areaCount).sort((a, b) => b[1] - a[1]);

    if (!sorted.length) return { area: "No Data", count: 0 };

    return { area: sorted[0][0], count: sorted[0][1] };
  }, [reservations]);

  // --- Peak Hour (based on startTime) ---
  const peakHour = useMemo(() => {
    const hourCount: Record<string, number> = {};

    reservations.forEach((r) => {
      const hour = extractHour(r.startTime);
      if (hour) hourCount[hour] = (hourCount[hour] || 0) + 1;
    });

    const sorted = Object.entries(hourCount).sort((a, b) => b[1] - a[1]);

    return sorted.length ? `${sorted[0][0]}:00` : "No Data";
  }, [reservations]);

  // --- Average Pax ---
  const avgPax = useMemo(() => {
    if (!reservations.length) return 0;
    const total = reservations.reduce((sum, r) => sum + Number(r.pax || 0), 0);
    return (total / reservations.length).toFixed(1);
  }, [reservations]);

  // --- VIP Count ---
  const vipCount = useMemo(() => {
    return reservations.filter((r) => r.area.toLowerCase().includes("vip")).length;
  }, [reservations]);

  // --- Most Booked Day ---
  const mostBookedDay = useMemo(() => {
    const days = [
      "Sunday", "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday"
    ];

    const dayCount: Record<string, number> = {};

    reservations.forEach((r) => {
      const day = days[new Date(r.date).getDay()];
      dayCount[day] = (dayCount[day] || 0) + 1;
    });

    const sorted = Object.entries(dayCount).sort((a, b) => b[1] - a[1]);

    return sorted.length ? sorted[0][0] : "No Data";
  }, [reservations]);

  return (
    <div className="bg-white rounded-xl shadow border border-neutral-500 p-6">
      <h2 className="font-bold text-lg mb-4">Reservation Insight</h2>

      <div className="grid grid-cols-2 gap-4">

        <InsightCard
          icon={<MapPin className="w-5 h-5 text-orange-600" />}
          label="Most Popular Area"
          value={mostPopularArea.area}
          sub={`${mostPopularArea.count} bookings`}
        />

        <InsightCard
          icon={<Hourglass className="w-5 h-5 text-orange-600" />}
          label="Peak Hour"
          value={peakHour}
        />

        <InsightCard
          icon={<Star className="w-5 h-5 text-orange-600" />}
          label="VIP Bookings"
          value={vipCount}
        />

        <InsightCard
          icon={<Calendar className="w-5 h-5 text-orange-600" />}
          label="Most Booked Day"
          value={mostBookedDay}
        />

      </div>
    </div>
  );
}

function InsightCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  sub?: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-xl bg-neutral-50">
      <div className="p-3 bg-orange-100 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-xl font-bold">{value}</p>
        {sub && <p className="text-xs text-gray-400">{sub}</p>}
      </div>
    </div>
  );
}
