import { Button } from "@nextui-org/react";
import type { MetaFunction } from "@remix-run/node";
import { NavLink, useRouteError } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-teal-500 to-cyan-500">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to track your notes</h1>
        <p className="text-gray-700 mb-4">
          Embrace challenges, unleash potential, and conquer dreams
        </p>
        <NavLink to="/notes">
          <Button color="primary">Add Notes</Button>
        </NavLink>
      </div>
    </div>
  );
}
