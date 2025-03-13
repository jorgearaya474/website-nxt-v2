// app/blog/page.tsx (Server Component)
import { Suspense } from "react";
import type { Metadata } from "next";
import BlogClient from "@/components/layout/BlogClient";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "/api/devto/posts";

export const metadata: Metadata = {
  title: "Blog | Jorge Araya Web Developer",
  description:
    "Discover insights and expertise in web development on my blog. Join me in exploring the dynamic world of coding, design, and innovation.",
  keywords: ["wordpress developer", "blog", "wordpress insights"],
};

// Make the page dynamic to avoid build-time errors
export const dynamic = "force-dynamic";

async function getPosts() {
  try {
    const res = await fetch(`${API_URL}?page=1&per_page=9`, {
      next: { revalidate: 3600 }, // Revalidate every hour
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

  return (
    <Suspense
      fallback={
        <div className="container py-10 text-center">Loading blog posts...</div>
      }
    >
      <BlogClient initialPosts={posts} />
    </Suspense>
  );
}
