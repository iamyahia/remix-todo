import { NavLink } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <NavLink to="" className="text-white text-xl font-bold">
              Remix
            </NavLink>
          </div>
          <div className="hidden md:flex">
            <NavLink to="" className="text-white hover:text-gray-300 px-4">
              Home
            </NavLink>
            <NavLink to="notes" className="text-white hover:text-gray-300 px-4">
              Notes
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
