import { json, redirect } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import NewNote from "~/components/NewNote";
import Notes from "~/components/Notes";

export default function NotesPage() {
  return (
    <div className="flex flex-col p-4 items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-teal-500 to-cyan-500">
      <NewNote />
      <Outlet />
    </div>
  );
}

export async function action({ request }) {
  try {
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);

    console.log(noteData);
    if (!noteData.title || !noteData.content) {
      throw json(
        { message: "There is some error, please try again" },
        { status: 404, statusText: "404 text" }
      );
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
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
