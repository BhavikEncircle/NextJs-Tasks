"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-20 align-center mt-5 w-3/4 mx-auto">
      <div className="logo">
        <h1 className="text-3xl font-bold text-gray-100">Basic App</h1>
      </div>
      <div className="links">
        <div className="flex gap-3 text-xl cursor-pointer text-gray-300 hover:text-gray-100">
          <Link href="/">Home</Link>
        </div>
      </div>
    </nav>
  );
}
