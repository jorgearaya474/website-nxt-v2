import { NextResponse } from "next/server";
import type { DevtoPost } from "@/types/types";
import formatDateWithYear from "@/lib/formatDateWithYear";

/*
 * Get posts from DEV.to API
 **/
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || "1";
    const perPage = searchParams.get("per_page") || "4";

    const response = await fetch(
      `https://dev.to/api/articles?username=${process.env.USER_NAME}&page=${page}&per_page=${perPage}`,
      {
        headers: {
          "api-key": process.env.DEVTO_API_KEY || "",
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed fetching the posts");
    }

    const rowPosts: any[] = await response.json();

    const posts: DevtoPost[] = rowPosts.map((rowPost) => ({
      id: rowPost.id,
      title: rowPost.title,
      description: rowPost.description,
      date: formatDateWithYear(rowPost.published_timestamp),
      image: rowPost.cover_image,
      url: rowPost.url,
      tags: rowPost.tag_list,
    }));

    // Headers for cache
    const headers = new Headers({
      "Content-Type": "application/json",
      "Cache-Control": "s-maxage=60, stale-while-revalidate",
    });

    return NextResponse.json(
      { posts, page: Number(page), perPage: Number(perPage) },
      { headers },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Error fetching Dev.to posts",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
