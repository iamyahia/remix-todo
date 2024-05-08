//! NOTE: This code was forked in codesandbox: https://codesandbox.io/p/sandbox/sidebar-tailwind-8dkck3?file=%2Fsrc%2FApp.tsx

/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { sidebarStructure } from "./structure";
import { useLocation } from "@remix-run/react";
import classNames from "classnames";
interface SidebarProps {
  setExpand: (value: boolean) => void;
}

const Sidebar2: FC<SidebarProps> = ({ setExpand }) => {
  const username = "Yahia hasan";
  const role = "Admin ";
  const profilePic =
    "https://img.mbiz.web.id/180x180/erp/R2p1IXoyVEpBMk01WOEAdaI3hHVlkuIg0wW5_pn-CJCKHSrA_n1-U1tfE7Bl5H4_4Z7AxgL0DPOmUCdPuCHHC5lWvMU5Ig3t1uDrkVN53MlWlnA";
  const link = "/";

  const [openedMenu, setOpenedMenu] = useState<Record<string, any>>({});
  const [activeName, setActiveName] = useState("");

  const location = useLocation();

  const activeLink = location.pathname;

  const listRef = useRef<Record<string, HTMLUListElement | null>>({});

  const [isExpand, setIsExpand] = useState(true);
  const [isExpandOnHover, setIsExpandOnHover] = useState(false);

  const handleHoverExpand = (value: boolean) => {
    if (!isExpand) {
      setIsExpandOnHover(value);
    }
  };

  const handleNavigate = (path: string) => {
    setActiveName(path);
  };

  const handleToggle = (name: string) => {
    const rootEl = name.split(".")[0];

    if (openedMenu[name]?.open === true) {
      setOpenedMenu((prevState) => ({
        ...prevState,
        [name]: {
          open: false,
          height: "0px",
        },
        [rootEl]: {
          open: rootEl === name ? false : true,
          height: `${
            (listRef.current[rootEl]?.scrollHeight || 0) -
            (listRef.current[name]?.scrollHeight || 0)
          }px`,
        },
      }));
    } else {
      setOpenedMenu((prevState) => ({
        ...prevState,
        [name]: {
          open: true,
          height: `${listRef.current[name]?.scrollHeight || 0}px`,
        },
        [rootEl]: {
          open: true,
          height: `${
            (listRef.current[rootEl]?.scrollHeight || 0) +
            (listRef.current[name]?.scrollHeight || 0)
          }px`,
        },
      }));
    }
  };

  const generateIcon = (icon: string) => {
    var icons_map: Record<string, JSX.Element> = {};

    icons_map["Home"] = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-current"
        viewBox="0 0 24 24"
        version="1.1"
      >
        <g
          id="ic_kanban"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M20,3 C21.1045695,3 22,3.8954305 22,5 L22,15 C22,16.1045695 21.1045695,17 20,17 L4,17 C2.8954305,17 2,16.1045695 2,15 L2,5 C2,3.8954305 2.8954305,3 4,3 L20,3 Z M11.5,6 L6.5,6 C5.67157288,6 5,6.67157288 5,7.5 L5,7.5 L5,9.5 C5,10.3284271 5.67157288,11 6.5,11 L6.5,11 L11.5,11 C12.3284271,11 13,10.3284271 13,9.5 L13,9.5 L13,7.5 C13,6.67157288 12.3284271,6 11.5,6 L11.5,6 Z"
            id="Combined-Shape"
            fill="currentColor"
          />
          <path
            d="M8,21 L16,21 M12,17 L12,21"
            id="Combined-Shape"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.48"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
    icons_map["mou"] = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-current"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          opacity="0.48"
          d="M17.7231 7.11493C18.4822 7.12263 19.5376 7.12593 20.4328 7.12263C20.8913 7.12153 21.1244 6.56823 20.8064 6.23493C19.6563 5.02713 17.5989 2.86563 16.4216 1.62923C16.096 1.28713 15.5264 1.52253 15.5264 1.99663V4.89623C15.5264 6.11283 16.5185 7.11493 17.7231 7.11493Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.6049 16.8291H8.68011C8.23358 16.8291 7.86328 16.4551 7.86328 16.0041C7.86328 15.5531 8.23358 15.1901 8.68011 15.1901H14.6049C15.0514 15.1901 15.4217 15.5531 15.4217 16.0041C15.4217 16.4551 15.0514 16.8291 14.6049 16.8291ZM8.68011 9.69006H12.3613C12.8078 9.69006 13.1781 10.0641 13.1781 10.5151C13.1781 10.9661 12.8078 11.3291 12.3613 11.3291H8.68011C8.23358 11.3291 7.86328 10.9661 7.86328 10.5151C7.86328 10.0641 8.23358 9.69006 8.68011 9.69006ZM20.9208 8.722C20.4525 8.722 19.8971 8.733 19.5595 8.733C19.0585 8.733 18.405 8.722 17.5773 8.722C15.5842 8.711 13.9397 7.061 13.9397 5.048V1.506C13.9397 1.231 13.7218 1 13.4387 1H7.62282C4.91094 1 2.71094 3.233 2.71094 5.961V17.819C2.71094 20.679 5.01985 23 7.85153 23H16.5208C19.2218 23 21.4109 20.789 21.4109 18.061V9.217C21.4109 8.942 21.1931 8.722 20.9208 8.722Z"
          fill="currentColor"
        />
      </svg>
    );

    return icons_map[icon];
  };

  const generateMenu = (item: any, index: number, recursive: number = 0) => {
    if (activeName === "" && activeLink.includes(item.link)) {
      setActiveName(item.name);
    }
    const classesActive = activeName === item.name ? "active" : "";

    return (
      <li key={index}>
        <a
          role="button"
          tabIndex={0}
          id={item.id}
          onClick={() => {
            if ("child" in item) {
              handleToggle(item.name);
            } else if ("link" in item) {
              handleNavigate(item.name);
            }
          }}
          onKeyDown={(event) => {
            const { code } = event;
            if (code === "Space") {
              if ("child" in item) {
                handleToggle(item.name);
              } else if ("link" in item) {
                handleNavigate(item.name);
              }
            }
          }}
          className={[
            "group m-0 flex cursor-pointer rounded-lg items-center justify-between h-12 py-0 pr-3 mb-1 focus:outline-none",
            recursive === 0 ? "pl-4" : recursive === 1 ? "pl-11" : "pl-16",
            activeName === item.name || activeName.split(".")[0] === item.name
              ? `text-blue-600 font-semibold ${
                  item.parent ? "bg-blue-200/20 " : "bg-transparent"
                }`
              : `text-slate-500 ${item.parent && ""}`,
            "hover:bg-slate-300/20",
            classesActive,
          ].join(" ")}
        >
          <div className="flex items-center gap-3">
            {item.icon ? (
              item.icon === "dot" ? (
                <div className="h-3 w-3 flex items-center justify-center">
                  <div
                    className={[
                      `${classesActive ? "h-2 w-2" : "h-1 w-1"}`,
                      "bg-current rounded-full transition duration-200",
                    ].join(" ")}
                  ></div>
                </div>
              ) : (
                generateIcon(item.icon)
              )
            ) : null}
            <div
              className={`truncate ${
                isExpand ? "" : isExpandOnHover ? "" : "w-0 h-0 opacity-0"
              }`}
            >
              {item.title}
            </div>
          </div>
          {"child" in item ? (
            <div
              className={`${
                isExpand ? "" : isExpandOnHover ? "" : "w-0 h-0 opacity-0"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ) : (
            false
          )}
        </a>
        {"child" in item ? (
          <ul
            ref={(el) => (listRef.current[item.name] = el)}
            className={[
              "transition-max-height overflow-hidden duration-300 ease-in-out",
              isExpand ? "" : isExpandOnHover ? "" : "h-0",
            ].join(" ")}
            style={{ maxHeight: `${openedMenu[item.name]?.height || "0px"}` }}
            key={item.name}
          >
            {item.child.map((value: any, idx: number) =>
              generateMenu(value, idx, recursive + 1)
            )}
          </ul>
        ) : (
          false
        )}
      </li>
    );
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            isExpand ? "rotate-0" : "rotate-180"
          } transform transition duration-500 h-4 w-4`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
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
                {isExpand ? "REMIX TEST" : "R"}
              </h1>
            </div>
            <div
              className={classNames(
                "my-14 flex flex-col items-center overflow-x-hidden duration-300",
                isExpand ? "px-3" : isExpandOnHover ? "px-3" : "px-5"
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
                {sidebarStructure.map((item, index) =>
                  generateMenu(item, index)
                )}
              </ul>
            </div>
          </div>
        </SimpleBar>
      </div>
    </nav>
  );
};

export default Sidebar2;
