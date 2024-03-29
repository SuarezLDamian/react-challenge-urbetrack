import { useState } from 'react';
import { Card, Flex, Text, Button, TextField, Heading } from '@radix-ui/themes';
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons';
import { useNavigate } from "react-router-dom";
import isValidLogin from "@services/loginService";
import useUserSession from "@store/userSession";

const LoginForm = () => {

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const { addUserSession } = useUserSession();

  const handleSubmit = () => {
    if (isValidLogin(username, password)) {
      addUserSession(username);
      navigate("/");
    }
    else {
      setIsInvalid(true);
    }
  };

  return (
    <Card style={{ maxWidth: 240 }} onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => e.key === "Enter" && handleSubmit()}>
      <Flex direction="column" gap="2">
        <Flex direction="column" align="center">
          <img src="./album.svg" height={120} width={120} />
        </Flex>
        <Heading align="center">Ingreso</Heading>
        {isInvalid &&
          <p style={{ color: "red" }}>Credenciales inválidas!</p>
        }
        <Text>Usuario</Text>
        <TextField.Input placeholder="Nombre de usuario" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} />
        <Text>Contraseña</Text>
        <TextField.Root>
          <TextField.Input placeholder="Contraseña" type={isVisible ? "text" : "password"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
          <TextField.Slot>
            {
              isVisible ?
                <EyeClosedIcon height="16" width="16" onClick={() => setIsVisible(false)} />
                :
                <EyeOpenIcon height="16" width="16" onClick={() => setIsVisible(true)} />
            }
          </TextField.Slot>
        </TextField.Root>
        <Button onClick={() => handleSubmit()}>Ingresar</Button>
      </Flex>
    </Card>
  );
};

export default LoginForm;