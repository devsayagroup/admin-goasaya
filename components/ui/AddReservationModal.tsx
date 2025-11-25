// "use client";

// import { ROOMS } from "@/lib/room-fixed";
// import { RoomName } from "@/components/ui/RoomName";
// import { useState } from "react";

// interface Props {
//   isOpen: boolean;
//   onClose: () => void;
//   onSubmit: (data: any) => void;
// }

// export default function AddReservationModal({
//   isOpen,
//   onClose,
//   onSubmit,
// }: Props) {
//   const [form, setForm] = useState({
//     customerName: "",
//     date: "",
//     startTime: "",
//     endTime: "",
//     area: "",
//     pax: 1,
//     specialEvent: "",
//     status: "Confirmed",
//   });

//   const updateField = (field: string, value: any) => {
//     setForm({ ...form, [field]: value });
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">

//       <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 animate-fadeIn relative">

//         {/* TITLE */}
//         <h2 className="text-2xl font-bold mb-1 text-gray-900">
//           Add Reservation
//         </h2>
//         <p className="text-gray-500 mb-5">
//           Fill in the details below to create a new reservation.
//         </p>

//         {/* FORM GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//           {/* Customer Name */}
//           <div className="col-span-2">
//             <label className="text-sm font-semibold text-gray-700">Customer Name</label>
//             <input
//               type="text"
//               value={form.customerName}
//               onChange={(e) => updateField("customerName", e.target.value)}
//               placeholder="Enter customer's full name"
//               className="w-full bg-neutral-100 border border-neutral-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-orange-500"
//             />
//           </div>

//           {/* Date */}
//           <div>
//             <label className="text-sm font-semibold text-gray-700">Date</label>
//             <input
//               type="date"
//               value={form.date}
//               onChange={(e) => updateField("date", e.target.value)}
//               className="w-full bg-neutral-100 border border-neutral-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-orange-500"
//             />
//           </div>

//           {/* Area */}
//           <div>
//             <label className="text-sm font-semibold text-gray-700">Area</label>
//             <select
//               value={form.area}
//               onChange={(e) => updateField("area", e.target.value)}
//               className="w-full bg-neutral-100 border border-neutral-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-orange-500"
//             >
//               <option value="">Choose Area</option>
//               {ROOMS.map((room) => (
//                 <option key={room.key} value={room.key}>
//                   <RoomName roomKey={room.key as any} />
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Start Time */}
//           <div>
//             <label className="text-sm font-semibold text-gray-700">Start Time</label>
//             <input
//               type="time"
//               value={form.startTime}
//               onChange={(e) => updateField("startTime", e.target.value)}
//               className="w-full bg-neutral-100 border border-neutral-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-orange-500"
//             />
//           </div>

//           {/* End Time */}
//           <div>
//             <label className="text-sm font-semibold text-gray-700">End Time</label>
//             <input
//               type="time"
//               value={form.endTime}
//               onChange={(e) => updateField("endTime", e.target.value)}
//               className="w-full bg-neutral-100 border border-neutral-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-orange-500"
//             />
//           </div>

//           {/* Pax */}
//           <div>
//             <label className="text-sm font-semibold text-gray-700">Pax</label>
//             <input
//               type="number"
//               min={1}
//               value={form.pax}
//               onChange={(e) => updateField("pax", Number(e.target.value))}
//               className="w-full bg-neutral-100 border border-neutral-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-orange-500"
//             />
//           </div>

//           {/* Status */}
//           <div>
//             <label className="text-sm font-semibold text-gray-700">Status</label>
//             <select
//               value={form.status}
//               onChange={(e) => updateField("status", e.target.value)}
//               className="w-full bg-neutral-100 border border-neutral-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-orange-500"
//             >
//               <option value="Confirmed">Confirmed</option>
//               <option value="Pending">Pending</option>
//               <option value="Cancelled">Cancelled</option>
//             </select>
//           </div>

//           {/* Special Event */}
//           <div className="col-span-2">
//             <label className="text-sm font-semibold text-gray-700">Special Event (optional)</label>
//             <input
//               type="text"
//               value={form.specialEvent}
//               onChange={(e) => updateField("specialEvent", e.target.value)}
//               placeholder="e.g. Birthday, Anniversary"
//               className="w-full bg-neutral-100 border border-neutral-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-orange-500"
//             />
//           </div>
//         </div>

//         {/* FOOTER BUTTONS */}
//         <div className="flex justify-end gap-3 mt-6">
//           <button
//             onClick={onClose}
//             className="px-5 py-2 rounded-lg border border-neutral-300 text-gray-700 hover:bg-neutral-100"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={() => onSubmit(form)}
//             className="px-6 py-2 rounded-lg bg-orange-600 text-white font-semibold shadow-lg hover:bg-orange-700 transition"
//           >
//             Save Reservation
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { ROOMS } from "@/lib/room-fixed";
import { RoomName } from "@/components/ui/RoomName";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

// Generate 30-minute intervals from 11:00 to 23:00
const generateTimeSlots = () => {
  const slots: string[] = [];
  for (let hour = 11; hour <= 23; hour++) {
    const h = hour.toString().padStart(2, "0");
    slots.push(`${h}:00`);
    if (hour !== 23) slots.push(`${h}:30`);
  }
  return slots;
};

const TIME_SLOTS = generateTimeSlots();

export default function AddReservationModal({
  isOpen,
  onClose,
  onSubmit,
}: Props) {
  const [form, setForm] = useState({
    customerName: "",
    date: "",
    startTime: "",
    endTime: "",
    area: "",
    pax: 1,
    specialEvent: "",
    status: "Confirmed", // default, but not shown in modal
  });

  const updateField = (field: string, value: any) => {
    setForm({ ...form, [field]: value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">

      <div className="bg-white w-full max-w-lg rounded-md shadow-2xl p-6 animate-fadeIn relative">

        {/* TITLE */}
        <h2 className="text-2xl font-bold mb-1 text-gray-900">
          Add Reservation
        </h2>
        <p className="text-gray-500 mb-5">
          Fill in the details below to create a new reservation.
        </p>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Customer Name */}
          <div className="col-span-2">
            <label className="text-sm font-semibold text-gray-700">Customer Name</label>
            <input
              type="text"
              value={form.customerName}
              onChange={(e) => updateField("customerName", e.target.value)}
              placeholder="Enter customer's full name"
              className="w-full bg-neutral-100 border border-neutral-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Date</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => updateField("date", e.target.value)}
              className="w-full bg-neutral-100 border border-neutral-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Area */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Area</label>
            <select
              value={form.area}
              onChange={(e) => updateField("area", e.target.value)}
              className="w-full bg-neutral-100 border border-neutral-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Choose Area</option>
              {ROOMS.map((room) => (
                <option key={room.key} value={room.key}>
                  <RoomName roomKey={room.key as any} />
                </option>
              ))}
            </select>
          </div>

          {/* Start Time */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Start Time</label>
            <select
              value={form.startTime}
              onChange={(e) => updateField("startTime", e.target.value)}
              className="w-full bg-neutral-100 border border-neutral-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select time</option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* End Time */}
          <div>
            <label className="text-sm font-semibold text-gray-700">End Time</label>
            <select
              value={form.endTime}
              onChange={(e) => updateField("endTime", e.target.value)}
              className="w-full bg-neutral-100 border border-neutral-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select time</option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Pax */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Pax</label>
            <input
              type="number"
              min={1}
              value={form.pax}
              onChange={(e) => updateField("pax", Number(e.target.value))}
              className="w-full bg-neutral-100 border border-neutral-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Special Event */}
          <div className="col-span-2">
            <label className="text-sm font-semibold text-gray-700">Special Event (optional)</label>
            <input
              type="text"
              value={form.specialEvent}
              onChange={(e) => updateField("specialEvent", e.target.value)}
              placeholder="e.g. Birthday, Anniversary"
              className="w-full bg-neutral-100 border border-neutral-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-neutral-300 text-gray-700 hover:bg-neutral-100"
          >
            Cancel
          </button>

          <button
            onClick={() => onSubmit(form)}
            className="px-6 py-2 rounded-lg bg-orange-600 text-white font-semibold shadow-lg hover:bg-orange-700 transition"
          >
            Save Reservation
          </button>
        </div>
      </div>
    </div>
  );
}
