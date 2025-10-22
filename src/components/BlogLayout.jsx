import { Outlet, Link } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div className="p-4">
      <h1>📝 My Blog</h1>
      <nav>
        <Link to="/blog">All Posts</Link> | <Link to="/blog/new">New Post</Link>
      </nav>
      <hr />
      <Outlet /> {/* Nested content will render here */}
    </div>
  );
}
