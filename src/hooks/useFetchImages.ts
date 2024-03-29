import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

async function fetchImages({pageParam}: {pageParam: number}) {
  const { data } = await axios.get(`https://picsum.photos/v2/list?page=${pageParam}&limit=18`);
  return data;
}

export function useFetchImages () {
  return useInfiniteQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      return allPages.length + 1;
    }
  });
}