import { Input } from "../Input";

function Header() {
  return (
    <div>
      <div className="w-[250px] flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input />
      </div>
    </div>
  );
}

export { Header };
