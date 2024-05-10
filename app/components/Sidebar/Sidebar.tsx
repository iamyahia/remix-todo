//! NOTE: This sidebar was forked in codesandbox: https://codesandbox.io/p/sandbox/sidebar-tailwind-8dkck3?file=%2Fsrc%2FApp.tsx

/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { sidebarItems } from "./structure";
import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import { ArrowRight2 } from "iconsax-react";
interface SidebarProps {
  setExpand: (value: boolean) => void;
}

function Sidebar({ setExpand }: SidebarProps) {
  const username = "Yahia hasan";
  const role = "Admin";
  const profilePic =
    "https://img.mbiz.web.id/180x180/erp/R2p1IXoyVEpBMk01WOEAdaI3hHVlkuIg0wW5_pn-CJCKHSrA_n1-U1tfE7Bl5H4_4Z7AxgL0DPOmUCdPuCHHC5lWvMU5Ig3t1uDrkVN53MlWlnA";
  const link = "/";

  const [isExpand, setIsExpand] = useState(true);
  const [isExpandOnHover, setIsExpandOnHover] = useState(false);

  const handleHoverExpand = (value: boolean) => {
    if (!isExpand) {
      setIsExpandOnHover(value);
    }
  };

  return (
    <nav
      role="navigation"
      className={[
        "bg-[#F2EAE1] border-r border-slate-100 shadow-sm absolute inset-y-0 left-0",
        "transition-all duration-300 ease-in-out md:fixed",
        `${
          isExpand
            ? "bg-[#F2EAE1] w-72"
            : isExpandOnHover
            ? "bg-[#F2EAE1]/70 w-72 backdrop-blur-md"
            : "bg-[#F2EAE1] w-20"
        }`,
      ].join(" ")}
    >
      <button
        className="absolute z-50 top-16 -right-3 bg-white hover:bg-slate-100 text-slate-500 p-0.5 rounded-full border border-slate-200"
        onClick={() => {
          setIsExpand(!isExpand);
          setExpand(!isExpand);
        }}
      >
        <ArrowRight2
          size="16"
          color="#000"
          className={classNames(
            "transform transition duration-150 h-4 w-4",
            isExpand || isExpandOnHover ? "rotate-180" : "rotate-0"
          )}
        />
      </button>
      <div
        onMouseEnter={() => handleHoverExpand(true)}
        onMouseLeave={() => handleHoverExpand(false)}
        className={`relative h-screen overflow-hidden`}
      >
        <SimpleBar style={{ height: "100%" }} autoHide timeout={100}>
          <div className="mb-0 list-none text-slate-500">
            <div className="flex mt-4 items-center">
              <span className="border-l-4 border-[#F8D442] h-6 block ml-4" />
              <h1 className="text-center font-bold text-xl text-slate-700 ml-3">
                {isExpand || isExpandOnHover ? "REMIX TEST" : "R"}
              </h1>
            </div>
            <div
              className={classNames(
                "flex flex-col items-center overflow-x-hidden duration-300",
                isExpand
                  ? "px-3 my-14 "
                  : isExpandOnHover
                  ? "px-3 my-14 "
                  : "px-5"
              )}
            >
              <a
                href={link}
                className={`flex items-center rounded -lg w-full h-20 duration-300 ${
                  isExpand
                    ? "bg-slate-300/25 px-4 gap-3"
                    : isExpandOnHover
                    ? "bg-slate-300/25 px-4 gap-3"
                    : ""
                }`}
              >
                <div
                  className={`rounded-full overflow-hidden duration-300 h-10 w-10 shrink-0`}
                >
                  <img src={profilePic} className="block" alt="" />
                </div>
                <div
                  className={`flex flex-col ${
                    isExpand ? "" : isExpandOnHover ? "" : "w-0 h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`text-base font-semibold text-slate-700 truncate duration-300`}
                  >
                    {username}
                  </div>
                  <div className={`text-sm text-slate-500 truncate`}>
                    {role}
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-3 mb-10 p-0 leading-10">
              <ul className="list-none text-sm font-normal px-3">
                {sidebarItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      role="button"
                      to={item.to}
                      tabIndex={0}
                      id="dashboard"
                      className={({ isActive }) =>
                        classNames(
                          "group m-0 flex cursor-pointer rounded-lg items-center justify-between h-12 py-0 pr-3 mb-1 focus:outline-none pl-4 text-slate-700  hover:bg-slate-300/20 active:bg-slate-400/20 focus:bg-[#FEAF00]",
                          {
                            "bg-[#FEAF00]": isActive,
                          }
                        )
                      }
                    >
                      <div className="flex items-center gap-3">
                        {<item.icon size={24} />}
                        {isExpand || isExpandOnHover ? (
                          <div className="truncate ">{item.title}</div>
                        ) : (
                          ""
                        )}
                      </div>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SimpleBar>
      </div>
    </nav>
  );
}

export { Sidebar };
