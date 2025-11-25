// "use client";

// import { useState } from "react";
// import { dummyReservations } from "@/lib/dummy";
// import ReservationFilters from "@/components/ui/ReservationFilters";
// import ReservationTable from "@/components/ui/ReservationTable";
// import ReservationCalendar from "@/components/ui/ReservationCalendar";
// import ReservationChart from "@/components/ui/ReservationChart";
// import { Reservation } from "@/types/reservation";

// export default function DashboardPage() {
//   const [reservations, setReservations] = useState<Reservation[]>(dummyReservations);
//   const [search, setSearch] = useState("");
//   const [date, setDate] = useState("");
//   const [area, setArea] = useState("");

//   const filtered = reservations.filter((r) => {
//     return (
//       r.name.toLowerCase().includes(search.toLowerCase()) &&
//       (date ? r.date === date : true) &&
//       (area ? r.area === area : true)
//     );
//   });

//   const deleteReservation = (id: string) => {
//     setReservations((prev) => prev.filter((r) => r.id !== id));
//   };

//   const today = new Date().toISOString().split("T")[0];
//   const todayCount = reservations.filter((r) => r.date === today).length;
//   const vipCount = reservations.filter((r) => r.area.includes("VIP")).length;

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl text-black font-bold">Dashboard Overview</h1>

//       {/* --- STATS CARDS --- */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//         <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
//           <p className="text-gray-500 text-xs md:text-sm">Today’s Reservations</p>
//           <h2 className="text-3xl font-bold mt-1">{todayCount}</h2>
//         </div>

//         <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
//           <p className="text-gray-500 text-xs md:text-sm">Total Reservations</p>
//           <h2 className="text-3xl font-bold mt-1">{reservations.length}</h2>
//         </div>

//         <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
//           <p className="text-gray-500 text-xs md:text-sm">VIP Bookings</p>
//           <h2 className="text-3xl font-bold mt-1">{vipCount}</h2>
//         </div>

//         <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
//           <p className="text-gray-500 text-xs md:text-sm">Filtered Results</p>
//           <h2 className="text-3xl font-bold mt-1">{filtered.length}</h2>
//         </div>
//       </div>

//       {/* --- BENTO GRID (2 columns) --- */}
//       <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

//         {/* Left Column (Filters + Table) */}
//         <div className="space-y-6">
//           <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
//             <h2 className="font-bold text-lg mb-4">Filter Reservations</h2>
//             <ReservationFilters
//               search={search}
//               setSearch={setSearch}
//               date={date}
//               setDate={setDate}
//               area={area}
//               setArea={setArea}
//             />
//           </div>

//           <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
//             <h2 className="font-bold text-lg mb-4">Reservations Table</h2>
//             <ReservationTable data={filtered} onDelete={deleteReservation} />
//           </div>
//         </div>

//         {/* Right Column (Chart + Calendar) */}
//         <div className="space-y-6 xl:sticky xl:top-24">
//           <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
//             <h2 className="font-bold text-lg mb-4">Reservation Trend</h2>
//             <ReservationChart reservations={reservations} />
//           </div>

//           <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
//             <h2 className="font-bold text-lg mb-4">Calendar View</h2>
//             <ReservationCalendar reservations={filtered} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { dummyReservations } from "@/lib/reservation";
// import ReservationCalendar from "@/components/ui/ReservationCalendar";
// import ReservationChart from "@/components/ui/ReservationChart";
// import ReservationInsight from "@/components/ui/ReservationInsight";
// import { Reservation } from "@/types/reservation";

// export default function DashboardPage() {
//   const [reservations, setReservations] = useState<Reservation[]>(dummyReservations);
//   const [search, setSearch] = useState("");
//   const [date, setDate] = useState("");
//   const [area, setArea] = useState("");

//   const filtered = reservations.filter((r) => {
//     return (
//       r.customerName.toLowerCase().includes(search.toLowerCase()) &&
//       (date ? r.date === date : true) &&
//       (area ? r.area === area : true)
//     );
//   });

//   const today = new Date().toISOString().split("T")[0];
//   const todayCount = reservations.filter((r) => r.date === today).length;
//   const vipCount = reservations.filter((r) => r.area.includes("VIP")).length;

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl text-black font-bold">Dashboard Overview</h1>

//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//         <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
//           <p className="text-gray-500 text-xs md:text-sm">Today’s Reservations</p>
//           <h2 className="text-3xl font-bold mt-1">{todayCount}</h2>
//         </div>
//         <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
//           <p className="text-gray-500 text-xs md:text-sm">VIP Bookings</p>
//           <h2 className="text-3xl font-bold mt-1">{vipCount}</h2>
//         </div>
//         <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
//           <p className="text-gray-500 text-xs md:text-sm">Total Reservations</p>
//           <h2 className="text-3xl font-bold mt-1">{reservations.length}</h2>
//         </div>
//         <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
//           <p className="text-gray-500 text-xs md:text-sm">Filtered Results</p>
//           <h2 className="text-3xl font-bold mt-1">{filtered.length}</h2>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
//         <div className="col-span-3 bg-white p-6 rounded-md shadow border border-neutral-500">
//           <h2 className="font-bold text-lg mb-4">Reservation Trend</h2>
//           <ReservationChart reservations={reservations} />
//         </div>
//         <ReservationInsight reservations={reservations}  />
//       </div>

//       <div className="bg-white p-6 rounded-md shadow border border-neutral-500 space-y-6">
//         <div>
//           <h2 className="font-bold text-lg mb-4">Calendar View</h2>
//           <ReservationCalendar reservations={filtered} />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { dummyReservations } from "@/lib/reservation";
import { Reservation } from "@/types/reservation";
import ReservationCalendar from "@/components/ui/ReservationCalendar";
import ReservationChart from "@/components/ui/ReservationChart";
import ReservationChartToday from "@/components/ui/ReservationChartToday";
import ReservationHeatmap from "@/components/ui/ReservationHeatmap";
import { RoomName } from "@/components/ui/RoomName";

export default function DashboardPage() {
  const [reservations] = useState<Reservation[]>(dummyReservations);
  // const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);
  const [selectedReservations, setSelectedReservations] = useState<Reservation[]>([]);
  const [activeReservation, setActiveReservation] = useState<Reservation | null>(null);


  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [area, setArea] = useState("");

  const filtered = reservations.filter((r) => {
    return (
      r.customerName.toLowerCase().includes(search.toLowerCase()) &&
      (date ? r.date === date : true) &&
      (area ? r.area === area : true)
    );
  });

  // Today
  const today = new Date().toISOString().split("T")[0];
  const todayCount = reservations.filter((r) => r.date === today).length;

  // ---- WEEK RANGE ----
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay()); // Sunday

  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);

  // Helper: check if reservation in current week
  const isInThisWeek = (date: string) => {
    const d = new Date(date);
    return d >= weekStart && d <= weekEnd;
  };

  // Weekly VIP count
  const vipCount = reservations.filter(
    (r) => r.area.includes("VIP") && isInThisWeek(r.date)
  ).length;

  // Weekly pending reservations
  const pendingCount = reservations.filter(
    (r) => r.status === "Pending" && isInThisWeek(r.date)
  ).length;

  // Total this week
  const weeklyCount = reservations.filter((r) => isInThisWeek(r.date)).length;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl text-black font-bold">Dashboard Overview</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
          <p className="text-gray-500 text-xs md:text-sm">Today’s Reservations</p>
          <h2 className="text-3xl font-bold mt-1">{todayCount}</h2>
        </div>

        {/* VIP Bookings */}
        <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
          <p className="text-gray-500 text-xs md:text-sm">VIP Bookings</p>
          <div className="flex items-center gap-2 mt-1">
            <h2 className="text-3xl font-bold">{vipCount}</h2>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-700">
              This Week
            </span>
          </div>
        </div>

        {/* Pending Reservations */}
        <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
          <p className="text-gray-500 text-xs md:text-sm">Pending Reservations</p>
          <div className="flex items-center gap-2 mt-1">
            <h2 className="text-3xl font-bold">{pendingCount}</h2>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-700">
              This Week
            </span>
          </div>
        </div>

        {/* Total Reservations This Week */}
        <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
          <p className="text-gray-500 text-xs md:text-sm">Total Reservations</p>
          <div className="flex items-center gap-2 mt-1">
            <h2 className="text-3xl font-bold">{weeklyCount}</h2>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-700">
              This Week
            </span>
          </div>
        </div>


      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-3 bg-white p-6 rounded-md shadow border border-neutral-500">
          {/* <ReservationChartToday 
            reservations={reservations} 
            onSelect={(res: any) => setSelectedReservation(res)}
          /> */}
          <ReservationHeatmap
            reservations={reservations} 
            onSelect={setSelectedReservations} 
          />
             {/* 🔥 Modal (you implement this later) */}
        {/* {selectedReservation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md w-[400px]">
              <h2 className="font-bold text-xl">Reservation Detail</h2>

              <p className="mt-4">
                <strong>Name:</strong> {selectedReservation.customerName}
              </p>
              <p>
                <strong>Date:</strong> {selectedReservation.date}
              </p>
              <p>
                <strong>Time:</strong> {selectedReservation.startTime} - {selectedReservation.endTime}
              </p>
              <p>
                <strong>Area:</strong> {selectedReservation.area}
              </p>
              <p>
                <strong>Status:</strong> {selectedReservation.status}
              </p>

              <button
                onClick={() => setSelectedReservation(null)}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )} */}
        {selectedReservations.length > 0 && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md w-[400px] max-h-[80vh] overflow-y-auto">

              {/* LIST VIEW */}
              {!activeReservation && (
                <>
                  <h2 className="font-bold text-xl">
                    Reservations ({selectedReservations.length})
                  </h2>

                  {selectedReservations.map((r, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveReservation(r)}
                      className="mt-3 w-full text-left border p-3 rounded hover:bg-gray-100 transition"
                    >
                      <p className="font-semibold">Name: {r.customerName}</p>
                      <p><span className="font-semibold">Time:</span> {r.startTime} - {r.endTime}</p>
                      <p><span className="font-semibold">Pax: </span>{r.pax}</p>
                      <p><span className="font-semibold">Area: </span> <RoomName roomKey={r.area as any} /></p>
                    </button>
                  ))}

                  <button
                    onClick={() => setSelectedReservations([])}
                    className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md w-full"
                  >
                    Close
                  </button>
                </>
              )}

              {/* DETAIL VIEW */}
              {activeReservation && (
                <>
                  <h2 className="font-bold text-xl">Reservation Detail</h2>

                  <div className="mt-4 space-y-1">
                    <p><strong>Name:</strong> {activeReservation.customerName}</p>
                    <p><strong>Date:</strong> {activeReservation.date}</p>
                    <p>
                      <strong>Time:</strong> {activeReservation.startTime} - {activeReservation.endTime}
                    </p>
                    <p><strong>Area:</strong> <RoomName roomKey={activeReservation.area} /></p>
                    
                    <p><strong>Status:</strong> {activeReservation.status}</p>
                  </div>

                  <button
                    onClick={() => setActiveReservation(null)}
                    className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md w-full"
                  >
                    Back
                  </button>

                  <button
                    onClick={() => {
                      setSelectedReservations([]);
                      setActiveReservation(null);
                    }}
                    className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-md w-full"
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        
        </div>
      </div>

      <div className="bg-white p-6 rounded-md shadow border border-neutral-500 space-y-6">
        <h2 className="font-bold text-lg mb-4">Calendar View</h2>
        <ReservationCalendar reservations={filtered} />
      </div>
    </div>
  );
}


