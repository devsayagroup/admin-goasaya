// "use client";

// import { Table, Column } from "@/components/ui/Table";
// import { Customer } from "@/types/customer";
// import { cn } from "@/lib/utils";

// export default function CustomerTable({ customers }: { customers: Customer[] }) {
//   const columns: Column<Customer>[] = [
//     // {
//     //   key: "firstName",
//     //   label: "Full Name",
//     //   render: (_, row) => `${row.firstName} ${row.lastName}`,
//     // },
    
//     { key: "customer_id", label: "Cust Id" },
//     { key: "name", label: "Name" },
//     { key: "phone", label: "Phone" },
//     { key: "email", label: "Email" },
//     { key: "company", label: "Company" },

//     // {
//     //   key: "reservations",
//     //   label: "Reservation Data",
//     //   render: (_, row) => {
//     //     if (!row.reservations || row.reservations.length === 0)
//     //       return <span className="text-gray-500 text-sm">No Reservations</span>;

//     //     const latest = row.reservations[row.reservations.length - 1];

//     //     return (
//     //       <div className="flex flex-col">
//     //         <span className="text-sm font-semibold">
//     //           Total: {row.reservations.length}
//     //         </span>
//     //         <span className="text-xs text-gray-500">
//     //           Latest: {latest.date} • {latest.startTime} - {latest.endTime}
//     //         </span>
//     //       </div>
//     //     );
//     //   },
//     // },

//     {
//       key: "customer_id",
//       label: "Action",
//       render: (_, row) => (
//         <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">
//           View
//         </button>
//       ),
//     },
//   ];

//   return <Table columns={columns} data={customers} />;
// }

"use client";

import { Customer } from "@/types/customer";

export default function CustomerTable({ customers }: { customers: Customer[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="px-4 py-2 font-semibold">Cust ID</th>
            <th className="px-4 py-2 font-semibold">Name</th>
            <th className="px-4 py-2 font-semibold">Phone</th>
            <th className="px-4 py-2 font-semibold">Email</th>
            <th className="px-4 py-2 font-semibold">Company</th>
            <th className="px-4 py-2 font-semibold">Action</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((c) => (
            <tr
              key={c.customer_id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="px-4 py-2">{c.customer_id}</td>
              <td className="px-4 py-2">{c.name}</td>
              <td className="px-4 py-2">{c.phone}</td>
              <td className="px-4 py-2">{c.email}</td>
              <td className="px-4 py-2">
                {c.company ? c.company : <span className="text-gray-400">-</span>}
              </td>
              <td className="px-4 py-2">
                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
                    onClick={() => console.log("View customer:", c.customer_id)}
                  >
                    View
                  </button>
                  <button
                    className="px-3 py-1 bg-lime-600 text-white rounded text-xs hover:bg-blue-700"
                    onClick={() => console.log("View customer:", c.customer_id)}
                  >
                    Chat
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
