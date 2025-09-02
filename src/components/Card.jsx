import { useState } from "react";

export default function Card({ title, desc, color }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userAction, setUserAction] = useState("none");

  const colors = {
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
    red: "bg-red-500 hover:bg-red-600",
  };

  const changedColors = {
    blue: "bg-blue-800 hover:bg-blue-700",
    green: "bg-green-800 hover:bg-green-700",
    red: "bg-red-800 hover:bg-red-700",
  };

  const handleLike = () => {
    if (userAction === "like") {
      setLikes(likes - 1);
      setUserAction("none");
    } else {
      if (userAction === "dislike") {
        setDislikes(dislikes - 1);
      }

      setLikes(likes + 1);
      setUserAction("like");
    }
  };

  const handleDislike = () => {
    if (userAction === "dislike") {
      setDislikes(dislikes - 1);
      setUserAction("none");
    } else {
      if (userAction === "like") {
        setLikes(likes - 1);
      }

      setDislikes(dislikes + 1);
      setUserAction("dislike");
    }
  };

  return (
    <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 w-64 text-center">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-grey-600 mb-4">{desc}</p>
      <p className="mb-2">
        Likes: {likes} | Dislikes: {dislikes}
      </p>
      <button
        onClick={handleLike}
        className={`${
          userAction === "like" ? changedColors[color] : colors[color]
        } text-white px-4 py-2 rounded-lg`}
      >
        Like 👍
      </button>
      <button
        onClick={handleDislike}
        className={`${
          userAction === "dislike" ? changedColors[color] : colors[color]
        } text-white ml-2 px-4 py-2 rounded-lg`}
      >
        Dislike 👎
      </button>
    </div>
  );
}
