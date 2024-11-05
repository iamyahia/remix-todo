import { CardBox } from "~/components/Card/Card";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

export default function Dashboard() {
  return (
    <>
      <CardBox />
    </>
  );
}

export const loader = async () => {
  console.log("data is from back-ed");
  return { ok: true };
};
