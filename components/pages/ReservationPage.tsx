
"use client";

import { useState } from "react";
import { dummyReservations } from "@/lib/reservation";
import ReservationFilters from "@/components/ui/ReservationFilters";
import ReservationTable from "@/components/ui/ReservationTable";
import ReservationCalendar from "@/components/ui/ReservationCalendar";
import { Reservation } from "@/types/reservation";

export default function ReservationPage() {
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

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl text-black font-bold">Reservations Data</h1>

      {/* --- FULL WIDTH RESERVATION CONTAINER --- */}
      {/* <div className="bg-white p-6 rounded-md shadow border border-neutral-500 space-y-6"> */}

        {/* FILTERS */}
        <div>
          <ReservationFilters
            search={search}
            setSearch={setSearch}
            date={date}
            setDate={setDate}
            area={area}
            setArea={setArea}
          />
        </div>

        {/* TABLE */}
        <div>
          {/* <h2 className="font-bold text-lg mb-4">Reservations Table</h2> */}
          <ReservationTable data={filtered} onDelete={deleteReservation} />
        </div>
      
      {/* </div> */}
    </div>
  );
}

