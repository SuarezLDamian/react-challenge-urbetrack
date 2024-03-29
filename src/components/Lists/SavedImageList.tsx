import { Grid } from "@radix-ui/themes";
import ImageCard from "@/components/Cards/ImageCard";
import useSavedImagesStore from "@store/savedImages";
import ImageType from "@/types/Image";

const ImageList = () => {

  const { savedImages } = useSavedImagesStore();

  if (savedImages.length == 0) {
    return <p>No hay imágenes guardadas. Guardá alguna para que aparezcan acá!</p>;
  }

  return (
    <>
      <Grid columns="3" gap="3" width="auto">
        {
          savedImages.map((image: ImageType) => (
            <ImageCard key={image.id} id={image.id} author={image.author} width={image.width} height={image.height} url={image.url} download_url={image.download_url} />
          ))
        }
      </Grid>
    </>
  );
};

export default ImageList;