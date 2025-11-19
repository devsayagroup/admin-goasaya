"use client";

import { Table, Column } from "@/components/ui/Table";
import { Customer } from "@/types/customer";
import { cn } from "@/lib/utils";

export default function CustomerTable({ customers }: { customers: Customer[] }) {
  const columns: Column<Customer>[] = [
    { key: "id", label: "Cust ID" },

    {
      key: "firstName",
      label: "Full Name",
      render: (_, row) => `${row.firstName} ${row.lastName}`,
    },

    { key: "phone", label: "Phone" },
    { key: "email", label: "Email" },

    // {
    //   key: "reservations",
    //   label: "Reservation Data",
    //   render: (_, row) => {
    //     if (!row.reservations || row.reservations.length === 0)
    //       return <span className="text-gray-500 text-sm">No Reservations</span>;

    //     const latest = row.reservations[row.reservations.length - 1];

    //     return (
    //       <div className="flex flex-col">
    //         <span className="text-sm font-semibold">
    //           Total: {row.reservations.length}
    //         </span>
    //         <span className="text-xs text-gray-500">
    //           Latest: {latest.date} • {latest.startTime} - {latest.endTime}
    //         </span>
    //       </div>
    //     );
    //   },
    // },

    {
      key: "id",
      label: "Action",
      render: (_, row) => (
        <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">
          View
        </button>
      ),
    },
  ];

  return <Table columns={columns} data={customers} />;
}
