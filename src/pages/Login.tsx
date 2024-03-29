import { Flex } from "@radix-ui/themes";
import LoginForm from "@components/LoginForm";

const Login = () => {
  return (
    <>
      <Flex justify="center" align="center" style={{ height: "100vh" }}>
        <LoginForm />
      </Flex>
    </>
  );
};

export default Login;