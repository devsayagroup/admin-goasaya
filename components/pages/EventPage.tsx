// "use client";

// import { extractEventsFromReservations } from "@/lib/extractEventFromReservation";
// import { dummyReservations } from "@/lib/reservation";
// import { RoomName } from "@/components/ui/RoomName";

// export default function EventPage() {
//   const events = extractEventsFromReservations(dummyReservations);

//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-xl font-semibold">Special Events</h1>

//       {events.length === 0 && (
//         <p className="text-gray-500">No special events found.</p>
//       )}
      
//       <div className="grid grid-cols-4 gap-4">
//         {events.map((ev) => (
//           <div key={ev.eventName} className="border border-gray-300 bg-white rounded-lg p-4">
//             <h2 className="font-bold text-orange-600 text-lg">{ev.eventName}</h2>

//             <div className="text-sm text-gray-600 mt-2">
//               <p><strong>Date:</strong> {ev.date}</p>
//               <p><strong>Time:</strong> {ev.startTime} – {ev.endTime}</p>
//               <p><strong>Area:</strong> <RoomName roomKey={ev.area} /> </p>
//               <p><strong>Total Pax:</strong> {ev.totalPax}</p>
//               <p><strong>Total Reservations:</strong> {ev.reservations.length}</p>
//             </div>

//             <button className="mt-3 px-4 py-2 bg-orange-500 text-white rounded">
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { extractEventsFromReservations } from "@/lib/extractEventFromReservation";
import { dummyReservations } from "@/lib/reservation";
import { RoomName } from "@/components/ui/RoomName";
import ReservationFilters from "../ui/ReservationFilters";

export default function EventTable() {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [area, setArea] = useState("");
  const events = extractEventsFromReservations(dummyReservations);
  const [openAdd, setOpenAdd] = useState(false);


  // FILTERING
  const filtered = events.filter((r) => {
    return (
      r.customerName.toLowerCase().includes(search.toLowerCase()) ||
      r.eventName.toLowerCase().includes(search.toLowerCase()) &&
      (date ? r.date === date : true) &&
      (area ? r.area === area : true)
    );
  });


  return (
    <div className="p-6">
      <h1 className="text-2xl text-black font-bold mb-8">Special Events</h1>

      <ReservationFilters
        search={search}
        setSearch={setSearch}
        date={date}
        setDate={setDate}
        area={area}
        setArea={setArea}
        showAddButton={false}
      />

      <div className="overflow-x-auto mt-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Event Name</th>
              <th className="p-3 border">Customer Name</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Time</th>
              <th className="p-3 border">Area</th>
              <th className="p-3 border text-center">Total Pax</th>
              <th className="p-3 border text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="p-4 text-center text-gray-500">
                  No special events found.
                </td>
              </tr>
            )}

            {filtered.map((ev, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-3 border font-medium">{ev.eventName}</td>

                <td className="p-3 border font-medium">{ev.customerName}</td>

                <td className="p-3 border">{ev.date}</td>

                <td className="p-3 border">
                  {ev.startTime} – {ev.endTime}
                </td>

                <td className="p-3 border"> <RoomName roomKey={ev.area} /></td>

                <td className="p-3 border text-center">{ev.totalPax}</td>

                {/* <td className="p-3 border text-center">{ev.reservations.length}</td> */}

                {/* <td className="p-3 border text-center">
                  <span
                    className={cn(
                      "px-2 py-1 text-xs rounded-md",
                      ev.status === "Upcoming" && "bg-blue-100 text-blue-700",
                      ev.status === "Completed" && "bg-green-100 text-green-700",
                      ev.status === "Cancelled" && "bg-red-100 text-red-700"
                    )}
                  >
                    {ev.status}
                  </span>
                </td> */}

                <td className="p-3 border text-center">
                  <button
                    className="px-3 py-1 bg-orange-600 text-white rounded hover:bg-orange-700 text-xs"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

