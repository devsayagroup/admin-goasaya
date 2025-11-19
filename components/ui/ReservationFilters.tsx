"use client";

interface Props {
  search: string;
  setSearch: (v: string) => void;
  date: string;
  setDate: (v: string) => void;
  area: string;
  setArea: (v: string) => void;
}

export default function ReservationFilters({
  search,
  setSearch,
  date,
  setDate,
  area,
  setArea,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center text-black">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search name"
        className="w-full bg-neutral-300 border rounded p-2"
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full bg-neutral-300 border rounded p-2"
      />

      <select
        value={area}
        onChange={(e) => setArea(e.target.value)}
        className="w-full bg-neutral-300 border rounded p-2"
      >
        <option value="">All Areas</option>
        <option value="Non-Smoking">No Smoking</option>
        <option value="Smoking">Smoking</option>
        <option value="E-Cigarette">E-Cigarette</option>
        <option value="VIP: Cave">VIP Cave</option>
        <option value="VIP: Hole">VIP Hole</option>
      </select>
    </div>
  );
}
