import { QueryFunction } from "@tanstack/query-core";
import { Post } from "@/model/Post";

export async function getSearchResult({
  queryKey,
}: {
  queryKey: QueryFunction<
    Post[],
    [_1: string, _2: string, searchParams: { q: string; pf?: string }]
  >;
}) {
  const [_1, _2, searchParams] = queryKey;
  const res = await fetch(`http://localhost:9090/api/followingPosts`, {
    next: {
      tags: ["posts", "search", searchParams.q],
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
