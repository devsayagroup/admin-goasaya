"use client";

import { ROOMS } from "@/lib/room-fixed";
import { RoomName } from "@/components/ui/RoomName";
import { AddButton } from "./AddButton";

interface Props {
  search: string;
  setSearch: (v: string) => void;
  date: string;
  setDate: (v: string) => void;
  area: string;
  setArea: (v: string) => void;
  showAddButton?: boolean; 
  addLabel?: string;
  onAdd?: () => void;
}

export default function ReservationFilters({
  search,
  setSearch,
  date,
  setDate,
  area,
  setArea,
  showAddButton = true,
  addLabel = "Add Reservation",
  onAdd,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 w-full text-black">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search name"
          className="w-full md:w-1/2 bg-neutral-300 border rounded p-2"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full md:w-36 bg-neutral-300 border rounded p-2"
        />
        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full md:w-44 bg-neutral-300 border rounded p-2"
        >
          <option value="">All Areas</option>

          {ROOMS.map((room) => (
            <option key={room.key} value={room.key}>
              <RoomName roomKey={room.key as any} />
            </option>
          ))}
        </select>
      </div>

      {showAddButton ? (
        <div className="w-full md:w-50 md:ml-auto">
          <AddButton label={addLabel} onClick={onAdd} />
        </div>
      ) : null}
    </div>
  );
}
