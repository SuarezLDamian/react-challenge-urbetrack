import { Button, Flex, AlertDialog } from "@radix-ui/themes";
import { BookmarkIcon, BookmarkFilledIcon } from "@radix-ui/react-icons";

interface SaveButtonProps {
  isSaved: boolean;
  handleSaveFn: () => void;
}

const SaveButton = ({ isSaved, handleSaveFn }: SaveButtonProps) => {

  if (!isSaved) {
    return (
      <Button variant="outline" onClick={handleSaveFn}>
        <BookmarkIcon />
      </Button>
    );
  }

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button variant="outline">
          <BookmarkFilledIcon />
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Eliminar favorito</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Estás seguro? Vas a eliminar esta imagen de tus favoritos.
          Podés volver a agregarla en el futuro.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancelar
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red" onClick={handleSaveFn}>
              Eliminar
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default SaveButton;