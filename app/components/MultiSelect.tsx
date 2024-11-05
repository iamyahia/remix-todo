import { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useSearchParams } from "@remix-run/react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import { cn } from "~/lib/utils";

type SelectProps = {
  state: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
  onChange?: (selectedItems: string[]) => void;
  className?: string;
  placeholder: string;
  buttonClassName?: string;
  dropdownContentClassName?: string;
  paramKey?: string; // Unique key for each url params
  values: {
    key: string;
    value: string;
  }[];
};

export function MultiSelect({
  state,
  setState,
  onChange,
  values,
  placeholder,
  buttonClassName,
  dropdownContentClassName,
  paramKey = "",
}: SelectProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSelectChange = (value: string) => {
    if (!state.includes(value)) {
      setState((prev) => [...prev, value]);
    } else {
      const referencedArray = [...state];
      const indexOfItemToBeRemoved = referencedArray.indexOf(value);
      referencedArray.splice(indexOfItemToBeRemoved, 1);
      setState(referencedArray);
    }
  };

  const isOptionSelected = (value: string): boolean => {
    return state.includes(value) ? true : false;
  };

  useEffect(() => {
    onChange && onChange(state);
  }, [onChange, state]);

  useEffect(() => {
    if (state.length > 0 && paramKey) {
      searchParams.set(paramKey, state.join(","));
    } else {
      searchParams.delete(paramKey);
    }
    setSearchParams(searchParams);
  }, [paramKey, searchParams, setSearchParams, state]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          // variant="outline"
          className={cn(
            "group justify-between border-slate-300 px-3 capitalize text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:text-slate-900",
            buttonClassName
          )}
        >
          {placeholder}
          <ChevronDown
            className="transition-transform duration-200 group-data-[state=open]:rotate-180"
            size={16}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn("capitalize text-slate-700", dropdownContentClassName)}
      >
        {values.map((value, index) => (
          <DropdownMenuCheckboxItem
            onSelect={(e) => e.preventDefault()}
            key={index}
            checked={isOptionSelected(value.key)}
            onCheckedChange={() => handleSelectChange(value.key)}
          >
            {value.value}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
