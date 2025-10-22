import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Post Created:", { title, content });

    // (Optional) Save to backend or localStorage here
    alert("Post created successfully!");
    navigate("/blog"); // Go back to blog list after submission
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label>Title:</label>
          <input
            className="border p-1 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Content:</label>
          <textarea
            className="border p-1 w-full"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <button className="bg-blue-500 text-white px-3 py-1 rounded">
          Publish
        </button>
      </form>
    </div>
  );
}
