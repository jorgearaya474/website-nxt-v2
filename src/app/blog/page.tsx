// app/blog/page.tsx (Server Component)
import type { Metadata } from "next";
import BlogClient from "@/components/layout/BlogClient";

const API_URL = "http://localhost:3000/api/devto/posts";

export const metadata: Metadata = {
  title: "Blog | Jorge Araya Web Developer",
  description:
    "Discover insights and expertise in web development on my blog. Join me in exploring the dynamic world of coding, design, and innovation.",
  keywords: ["wordpress developer", "blog", "wordpress insights"],
};

async function getPosts() {
  try {
    const res = await fetch(`${API_URL}?page=1&per_page=9`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch posts");
    const data = await res.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return <BlogClient initialPosts={posts} />;
}
