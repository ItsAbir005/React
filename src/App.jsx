import { Routes, Route, Navigate } from "react-router-dom";
import BlogLayout from "./components/BlogLayout";
import BlogList from "./components/BlogList";
import NewPost from "./components/NewPost";
import BlogPost from "./components/BlogPost";

export default function App() {
  return (
    <Routes>
      {/* Redirect root to /blog */}
      <Route path="/" element={<Navigate to="/blog" replace />} />

      <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<BlogList />} />
        <Route path="new" element={<NewPost />} />
        <Route path=":id" element={<BlogPost />} />
      </Route>
    </Routes>
  );
}
