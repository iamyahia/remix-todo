import { Outlet } from "@remix-run/react";
import { useState } from "react";
import { Header } from "~/components/Header";
import { Sidebar } from "~/components/Sidebar";

export default function NavigationLayout() {
  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);

  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar setExpand={setSideMenuIsExpand} />
      <div
        className={`flex-1 min-h-screen mx-0 bg-slate-100 transition-all duration-300 ease-in-out ${
          sideMenuIsExpand ? "md:ml-72" : "md:ml-20"
        }`}
      >
        {/* <Header /> */}

        <Outlet />
      </div>
    </div>
  );
}
