"use client";

import dayjs from "dayjs";
import { useState } from "react";
import { Reservation } from "@/types/reservation";

interface Props {
  reservations: Reservation[];
}

export default function ReservationCalendar({ reservations }: Props) {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const daysInMonth = currentMonth.daysInMonth();
  const firstDayIndex = currentMonth.startOf("month").day();

  const prevMonth = () => setCurrentMonth(currentMonth.subtract(1, "month"));
  const nextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));

  const reservationsByDate = reservations.reduce((acc: any, r) => {
    if (!acc[r.date]) acc[r.date] = [];
    acc[r.date].push(r);
    return acc;
  }, {});

  return (
    <div className="bg-neutral-200 p-4 rounded-md border border-gray-600 shadow-md max-h-[500px] overflow-y-auto">
      
      {/* HEADER */}
      <div className="flex justify-between items-center text-black mb-4">
        <button
          onClick={prevMonth}
          className="px-3 py-1 rounded border border-gray-400 hover:bg-gray-100 transition"
        >
          ←
        </button>

        <h2 className="text-lg font-bold uppercase text-orange text-center">
          {currentMonth.format("MMMM YYYY")}
        </h2>

        <button
          onClick={nextMonth}
          className="px-3 py-1 rounded border border-gray-400 hover:bg-gray-100 transition"
        >
          →
        </button>
      </div>

      {/* DAYS HEADER (desktop only) */}
      <div className="hidden lg:grid grid-cols-7 text-center text-gray-500 mb-2 font-semibold text-sm">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="py-1">{d}</div>
        ))}
      </div>

      {/* RESPONSIVE GRID */}
      <div
        className="
          grid
          grid-cols-2       /* mobile */
          sm:grid-cols-4    /* tablet */
          lg:grid-cols-7    /* desktop */
          gap-2
        "
      >
        {/* Empty placeholders (desktop only) */}
        {Array.from({ length: firstDayIndex }).map((_, i) => (
          <div key={i} className="hidden lg:block"></div>
        ))}

        {/* Days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const dateStr = currentMonth.date(day).format("YYYY-MM-DD");
          const items = reservationsByDate[dateStr] || [];

          const isToday = dateStr === dayjs().format("YYYY-MM-DD");

          return (
            <div
              key={day}
              className={`
                p-2 border rounded-lg min-h-[60px] md:min-h-[80px] flex flex-col transition
                ${isToday ? "border-[#C5A668] bg-orange/20" : "border-gray-200 bg-gray-50"}
              `}
            >
              <div className="flex justify-between items-center mb-1">
                <p className="font-semibold text-gray-800 text-sm">{day}</p>

                {items.length > 0 && (
                  <span className="text-[10px] bg-orange text-white px-1.5 py-0.5 rounded-full">
                    {items.length}
                  </span>
                )}
              </div>

              {/* Reservation List */}
              <div className="space-y-0.5 overflow-y-auto max-h-[40px]">
                {items.map((r: Reservation) => (
                  <div
                    key={r.id}
                    className="text-[10px] bg-white border border-gray-200 px-1 py-0.5 rounded shadow-sm"
                  >
                    <p className="font-semibold text-gray-800">{r.customerName}</p>
                    <p className="text-gray-500">{r.startTime} - {r.endTime}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
