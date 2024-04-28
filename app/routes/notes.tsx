import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import NewNote from "~/components/NewNote";
import Notes from "~/components/Notes";

export default function NotesPage() {
  const notes = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-teal-500 to-cyan-500">
      <NewNote />
      <Notes notes={notes} />
    </div>
  );
}

export async function loader() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
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

export async function action({ request }) {
  try {
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);

    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify(noteData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to post data");
    }

    return redirect("/");
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
}
