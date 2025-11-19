"use client";

import Image from "next/image";

export default function Header({ onMenuToggle }: { onMenuToggle: () => void }) {
  return (
    <header className="
      fixed top-0 left-0 md:left-64 right-0
      h-16 bg-orange border-b border-white/10
      flex items-center justify-between px-6 z-40
    ">
      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={onMenuToggle}
      >
        ☰
      </button>

      <h1 className="text-md text-white font-semibold">Admin Panel</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-white hidden sm:block">Admin User</span>
        <Image
          src="/avatar.png"
          alt="admin"
          width={36}
          height={36}
          className="rounded-full border border-white/20"
        />
      </div>
    </header>
  );
}
