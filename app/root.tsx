import "./tailwind.css";
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  NavLink,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./components/Navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          <Navbar />
          {children}
          <ScrollRestoration />
          <Scripts />
        </NextUIProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-teal-500 to-cyan-500">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">{error.statusText}</h1>
        <p className="text-red-600 mb-4">{error.data?.message}</p>
        <NavLink href="/" className="text-blue-600 hover:text-blue-800">
          Return to safety
        </NavLink>
      </div>
    </div>
  );
}
