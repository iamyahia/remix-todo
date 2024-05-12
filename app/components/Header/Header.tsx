import { ArrowCircleLeft, Notification, SearchNormal1 } from "iconsax-react";
import { TextField } from "../TextField";

function Header() {
  return (
    <div className="flex items-center  justify-between px-7 bg-white h-14 ">
      <button className="hover:bg-slate-100 text-[#C4C4C4] rounded-md p-1 active:bg-slate-200 active:text-[#9e9c9c]">
        <ArrowCircleLeft size={20} />
      </button>
      <div className="flex items-center ">
        <TextField
          labelClassName="w-[250px] mr-6 border border-[#E5E5E5]  flex items-center justify-center bg-white px-3 py-2 rounded-md"
          inputClassName=""
          type="text"
          placeholder="Search..."
          endElement={<SearchNormal1 size={16} color="#C4C4C4" />}
        />
        <button className="hover:bg-slate-100 text-[#C4C4C4] rounded-md p-1 active:bg-slate-200 active:text-[#9e9c9c]">
          <Notification size={20} />
        </button>
      </div>
    </div>
  );
}

export { Header };
