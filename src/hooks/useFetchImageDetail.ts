import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ImageType from "@/types/Image"

async function fetchImageDetail(imageId: string): Promise<ImageType> {
  const { data } = await axios.get(`https://picsum.photos/id/${imageId}/info`);
  return data;
}

export function useFetchImageDetail (imageId: string) {
  return useQuery({
    queryKey: ["imageDetail"],
    queryFn: () => fetchImageDetail(imageId),
  });
}