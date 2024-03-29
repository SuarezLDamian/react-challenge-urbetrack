import { Card, Flex, Text } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import useSavedImagesStore from "@store/savedImages";
import SaveButton from "@components/SaveButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeHolder from "@assets/placeholder.png";

interface ImageProps {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const ImageCard = ({ id, author, width, height, url, download_url }: ImageProps) => {

  const navigate = useNavigate();

  const { savedImages, addSavedImage, removeSavedImage } = useSavedImagesStore();

  const isSaved = savedImages.find(image => image.id == id) !== undefined;

  const handleSave = () => {
    isSaved ? removeSavedImage(id) : addSavedImage({ id, author, width, height, url, download_url });
  };

  return (
    <Card style={{ maxWidth: 200 }}>
      <Flex direction="column" gap="2">
        <Flex direction="column" align="end">
          <SaveButton isSaved={isSaved} handleSaveFn={handleSave} />
        </Flex>
        <Flex direction="column" gap="2" align="center">
          <LazyLoadImage src={download_url} height={150} width={150} placeholderSrc={placeHolder} onClick={() => navigate(`/image/${id}`)} />
          <Text>{author}</Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ImageCard;