import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

type Person = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  enrollNumber: string;
  dateOfAdmission: string;
};

function generateUniqueRandomNumber() {
  const timestamp = Date.now(); // Current timestamp in milliseconds
  const randomNum = Math.floor(Math.random() * 1000); // Random number between 0 and 999
  return timestamp.toString() + randomNum.toString();
}
const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    email: "tanner@gmail.com",
    phone: 964000000000,
    enrollNumber: generateUniqueRandomNumber(),
    dateOfAdmission: "08-Dec, 2021",
  },
  {
    firstName: "tandy",
    lastName: "miller",
    email: "tandy@gmail.com",
    phone: 964000000000,
    enrollNumber: generateUniqueRandomNumber(),
    dateOfAdmission: "08-Dec, 2021",
  },
  {
    firstName: "joe",
    lastName: "dirte",
    email: "joe@gmail.com",
    phone: 964000000000,
    enrollNumber: generateUniqueRandomNumber(),
    dateOfAdmission: "08-Dec, 2021",
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor((row) => row.firstName + " " + row.lastName, {
    id: "firstName",
    cell: (info) => info.getValue(),
    header: "Full Name",
  }),
  columnHelper.accessor("email", {
    cell: (info) => info.getValue(),
    header: "Full Name",
  }),
  columnHelper.accessor("phone", {
    header: "Phone",
  }),
  columnHelper.accessor("enrollNumber", {
    header: "Enrollment Number",
  }),
  columnHelper.accessor("dateOfAdmission", {
    header: "Date of Admission",
  }),
];

export default function Course() {
  const [data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white ">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th className="px-4 py-2 border-b " key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr className="hover:bg-gray-100 border-b" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className="px-4 py-2   text-center" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
    </div>
  );
}
