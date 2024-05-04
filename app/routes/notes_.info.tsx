import React from "react";

export default function NotesInfo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-teal-500 to-cyan-500">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">
          In all posts you have a big title
        </h1>
        <p>you can check a paragraph for each post</p>
      </div>
    </div>
  );
}
