// "use client";

// import { Reservation } from "@/types/reservation";

// export default function ReservationHeatmap({
//   reservations,
//   onSelect,
// }: {
//   reservations: Reservation[];
//   onSelect: (res: Reservation) => void;
// }) {
//   const today = new Date().toISOString().split("T")[0];

//   // Filter today only
//   const todaysReservations = reservations.filter((r) => r.date === today);

//   // Fixed timeline 11:00–23:00
//   const times: string[] = [];
//   for (let hour = 11; hour <= 23; hour++) {
//     times.push(`${hour.toString().padStart(2, "0")}:00`);
//   }

//   // Count per time slot
//   const counts = times.map((t) =>
//     todaysReservations.filter((r) => r.startTime === t).length
//   );

//   return (
//     <div className="w-full">
//       <h2 className="font-bold text-lg mb-4">Today's Reservations</h2>

//       <div className="flex gap-2 overflow-x-auto py-2">
//         {times.map((time, index) => {
//           const count = counts[index];

//           // heat intensity color
//           const color =
//             count === 0
//               ? "bg-gray-200"
//               : count === 1
//               ? "bg-orange-200"
//               : count === 2
//               ? "bg-orange-400"
//               : "bg-orange-600";

//           const matched = todaysReservations.filter(
//             (r) => r.startTime === time
//           );

//           return (
//             <button
//               key={time}
//               disabled={matched.length === 0}
//               onClick={() => onSelect(matched[0])}
//               className={`
//                 flex flex-col items-center justify-center w-16 h-16 
//                 rounded-md text-xs font-semibold transition 
//                 ${color}
//                 ${matched.length === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-105"}
//               `}
//             >
//               <span>{time}</span>
//               <span className="text-lg font-bold">{count}</span>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { Reservation } from "@/types/reservation";

// export default function ReservationHeatmap({
//   reservations,
//   onSelect,
// }: {
//   reservations: Reservation[];
//   onSelect: (res: Reservation) => void;
// }) {
//   const today = new Date().toISOString().split("T")[0];

//   // Filter today's reservations
//   const todaysReservations = reservations.filter((r) => r.date === today);

//   // Generate 30-minute intervals from 11:00 to 23:00
//   const times: string[] = [];
//   for (let hour = 11; hour <= 23; hour++) {
//     times.push(`${hour.toString().padStart(2, "0")}:00`);
//     if (hour !== 23) {
//       times.push(`${hour.toString().padStart(2, "0")}:30`);
//     }
//   }

//   // Count per time slot
//   const counts = times.map((t) =>
//     todaysReservations.filter((r) => r.startTime === t).length
//   );

//   return (
//     <div className="w-full">
//       <h2 className="font-bold text-lg mb-4">Today's Reservations</h2>

//       <div className="flex gap-2 overflow-x-auto py-2">
//         {times.map((time, index) => {
//           const count = counts[index];

//           // Heat intensity color
//           const color =
//             count === 0
//               ? "bg-gray-200"
//               : count === 1
//               ? "bg-orange-200"
//               : count === 2
//               ? "bg-orange-400"
//               : "bg-orange-600";

//           const matched = todaysReservations.filter(
//             (r) => r.startTime === time
//           );

//           return (
//             <button
//               key={time}
//               disabled={matched.length === 0}
//               onClick={() => matched.length > 0 && onSelect(matched[0])}
//               className={`
//                 flex flex-col items-center justify-center w-16 h-16 
//                 rounded-md text-xs font-semibold transition 
//                 ${color}
//                 ${matched.length === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-105"}
//               `}
//             >
//               <span>{time}</span>
//               <span className="text-lg font-bold">{count}</span>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { Reservation } from "@/types/reservation";

// export default function ReservationHeatmap({
//   reservations,
//   onSelect,
// }: {
//   reservations: Reservation[];
//   onSelect: (res: Reservation) => void;
// }) {
//   const todayString = new Date().toISOString().split("T")[0];

//   // State: selected date
//   const [selectedDate, setSelectedDate] = useState<string>(todayString);

//   // Change day
//   function changeDay(offset: number) {
//     const d = new Date(selectedDate);
//     d.setDate(d.getDate() + offset);
//     setSelectedDate(d.toISOString().split("T")[0]);
//   }

//   // Filter selected day
//   const dayReservations = reservations.filter(
//     (r) => r.date === selectedDate
//   );

//   // Time range: 11:00 → 23:00 with 30-minute intervals
//   const times: string[] = [];
//   for (let hour = 11; hour <= 23; hour++) {
//     const h = hour.toString().padStart(2, "0");
//     times.push(`${h}:00`);
//     if (hour !== 23) times.push(`${h}:30`);
//   }

//   // Count per slot
//   const counts = times.map((t) =>
//     dayReservations.filter((r) => r.startTime === t).length
//   );

//   return (
//     <div className="w-full">
//       {/* HEADER */}
//       <div className="flex items-center justify-between mb-4">
//         <button
//           onClick={() => changeDay(-1)}
//           className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
//         >
//           ← Previous Day
//         </button>

//         <h2 className="font-bold text-lg">
//           Reservations for:{" "}
//           <span className="text-orange-600">{selectedDate}</span>
//         </h2>

//         <button
//           onClick={() => changeDay(1)}
//           className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
//         >
//           Next Day →
//         </button>
//       </div>

//       {/* HEATMAP */}
//       <div className="flex gap-2 overflow-x-auto py-2">
//         {times.map((time, index) => {
//           const count = counts[index];

//           const color =
//             count === 0
//               ? "bg-gray-200"
//               : count === 1
//               ? "bg-orange-200"
//               : count === 2
//               ? "bg-orange-400"
//               : "bg-orange-600";

//           const matched = dayReservations.filter(
//             (r) => r.startTime === time
//           );

//           return (
//             <button
//               key={time}
//               disabled={matched.length === 0}
//               onClick={() => matched.length > 0 && onSelect(matched[0])}
//               className={`
//                 flex flex-col items-center justify-center w-16 h-16 
//                 rounded-md text-xs font-semibold transition 
//                 ${color}
//                 ${
//                   matched.length === 0
//                     ? "opacity-50 cursor-not-allowed"
//                     : "cursor-pointer hover:scale-105"
//                 }
//               `}
//             >
//               <span>{time}</span>
//               <span className="text-lg font-bold">{count}</span>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Reservation } from "@/types/reservation";

export default function ReservationHeatmap({
  reservations,
  onSelect,
}: {
  reservations: Reservation[];
  onSelect: (res: Reservation[]) => void; // IMPORTANT: now returns array
}) {
  const todayString = new Date().toISOString().split("T")[0];

  // Selected day
  const [selectedDate, setSelectedDate] = useState<string>(todayString);

  // Change day
  function changeDay(offset: number) {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() + offset);
    setSelectedDate(d.toISOString().split("T")[0]);
  }

  // Filter reservations by date
  const dayReservations = reservations.filter(
    (r) => r.date === selectedDate
  );

  // Build timeline 11:00 → 23:00 at 30m intervals
  const times: string[] = [];
  for (let hour = 11; hour <= 23; hour++) {
    const h = hour.toString().padStart(2, "0");
    times.push(`${h}:00`);
    if (hour !== 23) times.push(`${h}:30`);
  }

  return (
    <div className="w-full">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => changeDay(-1)}
          className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          ← Previous Day
        </button>

        <h2 className="font-bold text-lg">
          Reservations for:{" "}
          <span className="text-orange-600">{selectedDate}</span>
        </h2>

        <button
          onClick={() => changeDay(1)}
          className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          Next Day →
        </button>
      </div>

      {/* HEATMAP */}
      <div className="flex gap-2 overflow-x-auto py-2">
        {times.map((time) => {
          const matched = dayReservations.filter(
            (r) => r.startTime === time
          );

          const count = matched.length;

          const color =
            count === 0
              ? "bg-gray-200"
              : count === 1
              ? "bg-orange-200"
              : count === 2
              ? "bg-orange-400"
              : "bg-orange-600";

          return (
            <button
              key={time}
              disabled={count === 0}
              onClick={() => count > 0 && onSelect(matched)} // return array now
              className={`
                flex flex-col items-center justify-center w-16 h-16 
                rounded-md text-xs font-semibold transition 
                ${color}
                ${
                  count === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:scale-105"
                }
              `}
            >
              <span>{time}</span>
              <span className="text-lg font-bold">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

