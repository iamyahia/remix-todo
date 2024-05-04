import { useLoaderData } from "@remix-run/react";

import Notes from "~/components/Notes";

export default function NoteIndex() {
  const notes = useLoaderData();

  return <Notes notes={notes} />;
}

export async function loader() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
