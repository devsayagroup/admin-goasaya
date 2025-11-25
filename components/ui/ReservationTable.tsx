"use client";

import { useState } from "react";
import { Reservation } from "@/types/reservation";
import StatusBadge from "@/components/ui/StatusBadge";
import { RoomName } from "@/components/ui/RoomName";
import { BiLogoWhatsapp, BiDetail } from "react-icons/bi";

interface Props {
  data: Reservation[];
  onDelete: (id: string) => void;
}

export default function ReservationTable({ data, onDelete }: Props) {
  const [page, setPage] = useState(1);
  const perPage = 10;

  const totalPages = Math.ceil(data.length / perPage);

  const paginatedData = data.slice((page - 1) * perPage, page * perPage);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="space-y-4">
      <table className="w-full rounded-md border-collapse border text-black">
        <thead>
          <tr className="border border-black bg-neutral-300 text-black">
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Date</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Pax</th>
            <th className="p-3 border">Area</th>
            <th className="p-3 border">Special Event</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((r) => (
            <tr key={r.id} className="border">
              <td className="p-3 border">{r.customerName}</td>
              <td className="p-3 border text-center">{r.date}</td>
              <td className="p-3 border text-center">
                {r.startTime} - {r.endTime}
              </td>
              <td className="p-3 border text-center">{r.pax}</td>
              <td className="p-3 border text-center"><RoomName roomKey={r.area} /></td>
              <td className="p-3 border text-center">
                {r.specialEvent || "-"}
              </td>
              <td className="p-3 border text-center"><StatusBadge status={r.status}/></td>
              <td className="p-3 border text-center">
                <div className="flex justify-center items-center text-center gap-2">
                  <button
                    onClick={() => onDelete(r.id)}
                    className="cursor-pointer text-orange/80 hover:underline"
                  >
                    <BiDetail size={24} />
                  </button>
                  <button
                    onClick={() => onDelete(r.id)}
                    className="cursor-pointer text-lime-600 hover:underline"
                  >
                    <BiLogoWhatsapp size={24} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center text-black justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className={`px-4 py-2 rounded-md border ${
            page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-neutral-200"
          }`}
        >
          Previous
        </button>

        <p className="text-sm">
          Page <strong>{page}</strong> of {totalPages}
        </p>

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded-md border ${
            page === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-neutral-200"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
