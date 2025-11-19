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

"use client";

import { useState } from "react";
import { dummyReservations } from "@/lib/reservation";
import ReservationFilters from "@/components/ui/ReservationFilters";
import ReservationTable from "@/components/ui/ReservationTable";
import ReservationCalendar from "@/components/ui/ReservationCalendar";
import ReservationChart from "@/components/ui/ReservationChart";
import ReservationInsight from "@/components/ui/ReservationInsight";
import { Reservation } from "@/types/reservation";

export default function DashboardPage() {
  const [reservations, setReservations] = useState<Reservation[]>(dummyReservations);
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

  const deleteReservation = (id: string) => {
    setReservations((prev) => prev.filter((r) => r.id !== id));
  };

  const today = new Date().toISOString().split("T")[0];
  const todayCount = reservations.filter((r) => r.date === today).length;
  const vipCount = reservations.filter((r) => r.area.includes("VIP")).length;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl text-black font-bold">Dashboard Overview</h1>

      {/* --- STATS CARDS --- */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
          <p className="text-gray-500 text-xs md:text-sm">Today’s Reservations</p>
          <h2 className="text-3xl font-bold mt-1">{todayCount}</h2>
        </div>

        <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
          <p className="text-gray-500 text-xs md:text-sm">Total Reservations</p>
          <h2 className="text-3xl font-bold mt-1">{reservations.length}</h2>
        </div>

        <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
          <p className="text-gray-500 text-xs md:text-sm">VIP Bookings</p>
          <h2 className="text-3xl font-bold mt-1">{vipCount}</h2>
        </div>

        <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
          <p className="text-gray-500 text-xs md:text-sm">Filtered Results</p>
          <h2 className="text-3xl font-bold mt-1">{filtered.length}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-md shadow border border-neutral-500">
          <h2 className="font-bold text-lg mb-4">Reservation Trend</h2>
          <ReservationChart reservations={reservations} />
        </div>

        <ReservationInsight reservations={reservations}  />
      </div>

      <div className="bg-white p-6 rounded-md shadow border border-neutral-500 space-y-6">
        {/* <div>
          <h2 className="font-bold text-lg mb-4">Filter Reservations</h2>
          <ReservationFilters
            search={search}
            setSearch={setSearch}
            date={date}
            setDate={setDate}
            area={area}
            setArea={setArea}
          />
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Reservations Table</h2>
          <ReservationTable data={filtered} onDelete={deleteReservation} />
        </div> */}

        <div>
          <h2 className="font-bold text-lg mb-4">Calendar View</h2>
          <ReservationCalendar reservations={filtered} />
        </div>

      </div>
    </div>
  );
}

