import { useParams, Link } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  // Sample post data — replace with actual data or API fetch
  const posts = [
    { id: 1, title: "React Routing Basics", content: "Learn about Routes and Links in React Router." },
    { id: 2, title: "Understanding useEffect", content: "useEffect lets you handle side effects in React components." },
  ];

  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <p>Post not found!</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/blog" className="text-blue-600">← Back to All Posts</Link>
    </div>
  );
}
