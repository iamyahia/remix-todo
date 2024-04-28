export default function Notes({ notes }) {
  return (
    <div
      className="flex  flex-col items-center justify-center 
    "
    >
      {notes.map((data, index) => (
        <div key={index} className="flex flex-wrap justify-center p-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{data.title}</div>
              <p className="text-gray-700 text-base">{data.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
