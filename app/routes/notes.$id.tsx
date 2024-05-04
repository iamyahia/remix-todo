import { useLoaderData } from "@remix-run/react";

export default function NotesDetail() {
  const { body, title } = useLoaderData();

  return (
    <div className="flex flex-wrap justify-center p-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{body}</p>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
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
