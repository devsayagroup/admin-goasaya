// "use client";

// interface Props {
//   search: string;
//   setSearch: (v: string) => void;
//   date: string;
//   setDate: (v: string) => void;
//   area: string;
//   setArea: (v: string) => void;
// }

// export default function ReservationFilters({
//   search,
//   setSearch,
//   date,
//   setDate,
//   area,
//   setArea,
// }: Props) {
//   return (
//     <div className="flex flex-col md:flex-row gap-4 items-center text-black">
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search name"
//         className="w-full bg-neutral-300 border rounded p-2"
//       />

//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         className="w-full bg-neutral-300 border rounded p-2"
//       />

//       <select
//         value={area}
//         onChange={(e) => setArea(e.target.value)}
//         className="w-full bg-neutral-300 border rounded p-2"
//       >
//         <option value="">All Areas</option>
//         <option value="Non-Smoking">No Smoking</option>
//         <option value="Smoking">Smoking</option>
//         <option value="E-Cigarette">E-Cigarette</option>
//         <option value="VIP: Cave">VIP Cave</option>
//         <option value="VIP: Hole">VIP Hole</option>
//       </select>
//     </div>
//   );
// }

"use client";

import { ROOMS } from "@/lib/room-fixed";
import { RoomName } from "@/components/ui/RoomName";

interface Props {
  search: string;
  setSearch: (v: string) => void;
  date: string;
  setDate: (v: string) => void;
  area: string;
  setArea: (v: string) => void;
  onAdd: () => void;
}

export default function ReservationFilters({
  search,
  setSearch,
  date,
  setDate,
  area,
  setArea,
  onAdd,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 w-full text-black">

      {/* LEFT SECTION (Search, Date, Area) */}
      <div className="flex flex-col md:flex-row gap-4 w-full">

        {/* Search (bigger) */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search name"
          className="w-full md:w-1/2 bg-neutral-300 border rounded p-2"
        />

        {/* Date — smaller */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full md:w-36 bg-neutral-300 border rounded p-2"
        />

        {/* Area — smaller */}
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

      {/* RIGHT SECTION (Add Button stays right) */}
      <button
        onClick={onAdd}
        className="
          bg-orange-600 
          text-white 
          px-4 py-2 
          rounded-md 
          font-semibold 
          shadow 
          hover:bg-orange-700
          w-full md:w-62
          md:ml-auto
        "
      >
        + Add Reservation
      </button>

    </div>
  );
}
