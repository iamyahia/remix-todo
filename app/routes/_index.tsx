import { Button } from "@nextui-org/react";
import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-teal-500 to-cyan-500">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to track your notes</h1>
        <p className="text-gray-700 mb-4">
          Embrace challenges, unleash potential, and conquer dreams
        </p>
        <NavLink to="notes">
          <Button color="primary">Add Notes</Button>
        </NavLink>
      </div>
    </div>

    // <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    //   <div className="p-6 bg-white rounded-lg shadow-lg">
    //     <h1 className="text-3xl font-bold mb-4">Welcome to track your notes</h1>
    //     <p className="text-gray-700 mb-4">
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
    //       alias dolores itaque rerum quos. Ratione accusantium enim consequuntur
    //       dolor deleniti fugit voluptas eum corrupti perferendis, maiores nihil
    //       sint sunt quas?
    //     </p>
    //     <a href="notes" className="text-blue-500 hover:text-blue-700">
    //       Notes
    //     </a>
    //   </div>
    // </div>
    // <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-500">
    //   <div className="p-6 bg-white rounded-lg shadow-lg">
    //     <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
    //       Welcome to track your notes
    //     </h1>
    //     <p className="text-lg text-gray-700 mb-4 text-center">
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
    //       alias dolores itaque rerum quos. Ratione accusantium enim consequuntur
    //       dolor deleniti fugit voluptas eum corrupti perferendis, maiores nihil
    //       sint sunt quas?
    //     </p>
    //     <a
    //       href="notes"
    //       className="text-lg font-semibold text-blue-600 hover:text-blue-800"
    //     >
    //       Notes
    //     </a>
    //   </div>
    // </div>
    // <div classNameName="p-3">
    //   <h1>Welcome to track your notes</h1>
    //   <p>
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus alias
    //     dolores itaque rerum quos. Ratione accusantium enim consequuntur dolor
    //     deleniti fugit voluptas eum corrupti perferendis, maiores nihil sint
    //     sunt quas?
    //   </p>
    //   <NavLink to="notes">Notes</NavLink>
    // </div>
  );
}

{
  /* <ul>
  <li>
    <a
      target="_blank"
      href="https://remix.run/tutorials/blog"
      rel="noreferrer"
    >
      15m Quickstart Blog Tutorial
    </a>
  </li>
  <li>
    <a
      target="_blank"
      href="https://remix.run/tutorials/jokes"
      rel="noreferrer"
    >
      Deep Dive Jokes App Tutorial
    </a>
  </li>
  <li>
    <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
      Remix Docs
    </a>
  </li>
</ul> */
}
