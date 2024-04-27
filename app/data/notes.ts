import fs from "fs/promises";

// export async function getAllNotes() {
//   try {
//     const rawFileContents = await fs.readFile("notes.json", {
//       encoding: "utf-8",
//     });
//     const data = JSON.parse(rawFileContents);
//     const storedNotes = data.notes ?? [];
//     return storedNotes;
//   } catch (error) {
//     console.error("Error reading file:", error);
//     return []; // Return an empty array or handle the error accordingly
//   }
// }

export async function getAllNotes() {
  const rawFileContents = await fs.readFile("notes.json", {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileContents);
  const storedNotes = data.notes ?? [];
  return storedNotes;
}

export function storedNotes(notess) {
  console.log("notes are: ", notess);
  return fs.writeFile("notes.json", JSON.stringify({ notes: notess || [] }));
}

// export async function storedNotes(notes) {
//   try {
//     // Read existing data from notes.json
//     const existingData = await fs.readFile("notes.json", { encoding: "utf-8" });
//     const parsedData = JSON.parse(existingData);

//     // Append new notes to existing data
//     const newData = { notes: parsedData.notes.concat(notes || []) };

//     // Write the updated data back to notes.json
//     await fs.writeFile("notes.json", JSON.stringify(newData));

//     return newData.notes; // Return the updated notes
//   } catch (error) {
//     console.error("Error storing notes:", error);
//     return []; // Return an empty array or handle the error accordingly
//   }
// }
