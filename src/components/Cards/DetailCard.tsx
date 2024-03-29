import { Card, Grid, Flex, Text, Button } from "@radix-ui/themes";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useParams, useNavigate } from "react-router-dom";
import useSavedImagesStore from "@store/savedImages";
import { useFetchImageDetail } from "@hooks/useFetchImageDetail";
import SaveButton from "@components/SaveButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeHolder from "@assets/placeholder.png";

const DetailCard = () => {

  const { imageId } = useParams();

  const navigate = useNavigate();

  const { savedImages, addSavedImage, removeSavedImage } = useSavedImagesStore();

  const { isPending, isError, data: image, error } = useFetchImageDetail(imageId!);

  const isSaved = savedImages.find(anImage => anImage.id == image?.id) !== undefined;

  const handleSave = () => {
    isSaved ? removeSavedImage(image!.id) : addSavedImage(image!);
  };

  if (isPending) {
    return <span>Cargando...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Card style={{ maxWidth: 300 }}>
      <Flex direction="row" align="center" justify="between">
        <ArrowLeftIcon onClick={() => navigate(-1)} />
        <SaveButton isSaved={isSaved} handleSaveFn={handleSave} />
      </Flex>
      <Flex direction="column" align="center">
        <LazyLoadImage src={image.download_url} height={150} width={150} placeholderSrc={placeHolder} />
      </Flex>
      <Flex direction="row" gap="4" justify="between" align="center">
        <Grid rows="2" columns="2">
          <Text>{image.author}</Text>
          <br />
          <Text>{image.width}</Text>
          <Text>{image.height}</Text>
        </Grid>
        <a href={image.download_url} target="_blank">
          <Button>
            Descargar
          </Button>
        </a>
      </Flex>
    </Card >
  );
};

export default DetailCard;