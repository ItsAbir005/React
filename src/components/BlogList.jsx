import { Link } from "react-router-dom";

export default function BlogList() {
  const posts = [
    { id: 1, title: "React Routing Basics" },
    { id: 2, title: "Understanding useEffect" },
  ];

  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>
          <Link to={`/blog/${p.id}`}>{p.title}</Link>
        </li>
      ))}
    </ul>
  );
}
