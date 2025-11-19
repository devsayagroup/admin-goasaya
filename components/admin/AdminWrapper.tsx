// "use client";
// import { useState } from "react";
// import Header from "@/components/admin/Header";
// import Sidebar from "@/components/admin/Sidebar";

// export default function AdminWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex bg-white min-h-screen text-white">
//       <Sidebar isOpen={open} onClose={() => setOpen(false)} />

//       <div className="flex-1 flex flex-col min-h-screen">
//         <Header onMenuToggle={() => setOpen(true)} />

//         <main className="p-6 bg-gray-50 min-h-screen">{children}</main>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar isOpen={open} onClose={() => setOpen(false)} />

      <div className="flex-1 ml-0 md:ml-64"> 
        <Header onMenuToggle={() => setOpen(true)} />
        <main className="pt-16 min-h-screen overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
