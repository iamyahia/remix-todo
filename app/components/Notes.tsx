import { Link, NavLink } from "@remix-run/react";

export default function Notes({ notes }) {
  return (
    <div
      className="flex flex-col items-center justify-center 
    "
    >
      {notes.map((data, index) => (
        <Link to={data.id} key={index}>
          {data.id}
          <div className="flex flex-wrap justify-center p-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.title}</div>
                <p className="text-gray-700 text-base line-clamp-3">
                  {data.body}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
