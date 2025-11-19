"use client"

import { useState } from "react";
import CustomerTable from "@/components/ui/CustomersTable";
import { dummyCustomers } from "@/lib/customer";
import { Customer } from "@/types/customer";


export default function CustomersPage() {
  const [data, setData] = useState<Customer[]>(dummyCustomers);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl text-black font-bold">Customer List</h1>
      <CustomerTable customers={data} />
    </div>
  );
}
