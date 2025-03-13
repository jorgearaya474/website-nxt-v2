"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import type { DevtoPost } from "@/types/types";
import ItemCard from "@/components/ui/ItemCard";
import HeroSection from "@/components/layout/HeroSection";

const API_URL = "http://localhost:3000/api/devto/posts";
const PER_PAGE = 9;

export default function BlogClient({
  initialPosts,
}: {
  initialPosts: DevtoPost[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [page, setPage] = useState<number>(
    Number(searchParams.get("page")) || 1,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<DevtoPost[]>(initialPosts);

  useEffect(() => {
    async function fetchPosts() {
      if (page === 1) return;
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}?page=${page}&per_page=${PER_PAGE}`);
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data.posts);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [page]);

  return (
    <>
      <HeroSection heading="Latest Articles" className="" />
      <div className="container pb-12 lg:pb-[10rem]">
        {loading ? (
          <div className="text-center py-10">Loading posts...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <ItemCard
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                image={post.image}
                url={post.url}
                tags={post.tags}
                date={post.date}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
