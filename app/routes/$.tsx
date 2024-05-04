import { NavLink } from "@remix-run/react";

export default function NotFoundPages() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-teal-500 to-cyan-500">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-red-600 mb-4">
          Oops! The page you're looking for does not exist.
        </p>
        <NavLink to="/" className="text-blue-600 hover:text-blue-800">
          Return Home
        </NavLink>
      </div>
    </div>
  );
}
