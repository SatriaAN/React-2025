import { useState } from "react";

export default function Card({ title, desc, color }) {
  const [likes, setLikes] = useState(0);

  const colors = {
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
    red: "bg-red-500 hover:bg-red-600",
  };

  return (
    <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 w-64 text-center">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-grey-600 mb-4">{desc}</p>
      <p className="mb-2">Likes: {likes}</p>
      <button
        onClick={() => setLikes(likes + 1)}
        className={`${colors[color]} text-white px-4 py-2 rounded-lg`}
      >
        Like 👍
      </button>
    </div>
  );
}
