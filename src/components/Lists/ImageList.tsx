import { Button, Flex, Grid } from "@radix-ui/themes";
import ImageCard from "@/components/Cards/ImageCard";
import { useFetchImages } from "@hooks/useFetchImages";
import ImageType from "@/types/Image";

const ImageList = () => {

  const { isPending, isLoading, isError, data, error, hasNextPage, fetchNextPage, isFetchingNextPage } = useFetchImages();

  if (isPending) {
    return <p>Cargando...</p>;
  }

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Flex direction="column" gap="4">
      <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="3" width="auto">
        {
          data.pages.map((images: ImageType[]) => (
            images.map((image: ImageType) => (
              <ImageCard key={image.id} id={image.id} author={image.author} width={image.width} height={image.height} url={image.url} download_url={image.download_url} />
            ))))
        }
      </Grid>
      {hasNextPage &&
        <Button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Cargando..." : "Mostrar más"}
        </Button>
      }
    </Flex>
  );
};

export default ImageList;