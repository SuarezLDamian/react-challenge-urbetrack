import { useState } from "react";
import { Drawer } from "@components/Navigation/Drawer";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import useUserSession from "@store/userSession";
import "./navigation.css";

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { username, removeUserSession } = useUserSession();

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger><HamburgerMenuIcon /></Drawer.Trigger>
      <Drawer.Content
        className="content"
        origin="left" // Where the drawer opens from
        radius={5} // Border radius of the drawer
        size={450} // Depth of the drawer
        visible={open} // Required for animation
      >
        <div className="header">
          <div className="headersection">
            {username ?
              <Drawer.Title>¡Bienvenido/a {username}!</Drawer.Title>
              :
              <a href="/login"><Button>Ingresar</Button></a>
            }
            <Drawer.Close className="close">X</Drawer.Close>
          </div>
        </div>
        <div className="body">
          <a href="/"><p>Inicio</p></a>
          <a href="/my-images"><p>Mis imágenes</p></a>
          <a href="/login" onClick={() => removeUserSession()}><p>Cerrar sesión</p></a>
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default Navigation;