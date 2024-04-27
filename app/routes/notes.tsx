import { redirect } from "@remix-run/node";
import NewNote from "~/components/NewNote";
import { getAllNotes, storedNotes } from "~/data/notes";

export default function notes() {
  return (
    <>
      <NewNote />
    </>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  const allNotes = await getAllNotes();

  noteData.id = new Date().toISOString();
  const updatedNotes = allNotes.concat(noteData);
  console.log("updated notes:", updatedNotes);
  await storedNotes(updatedNotes);
  return redirect("/");
}
