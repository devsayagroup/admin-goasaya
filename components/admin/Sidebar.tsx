"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/admin" },
  { name: "Reservations", href: "/admin/reservations" },
  { name: "Events", href: "/admin/events" },
  { name: "Customers", href: "/admin/customers" },
  // { name: "Settings", href: "/admin/settings" },
];

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-50
          bg-cream border-r border-maroon/10 p-6
          transform transition-transform duration-300
          md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <h1 className="flex flex-col text-4xl text-center font-semibold mb-8 text-maroon">
          GOASAYA <span className="text-xs">Admin Reservation</span>
        </h1>
       

        <nav className="space-y-2">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`
                  block px-4 py-3 rounded-md transition
                  ${
                    active
                      ? "bg-orange text-white font-semibold"
                      : "text-black hover:bg-maroon/10"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
