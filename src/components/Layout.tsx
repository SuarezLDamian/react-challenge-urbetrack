import { ReactNode } from "react";
import { Flex, Heading } from "@radix-ui/themes";
import Navigation from "@components/Navigation/Navigation";

interface LayoutProps {
  children: ReactNode;
  heading: string;
}

const Layout = ({ children, heading }: LayoutProps) => {
  return (
    <>
      <Flex direction="row" gap="4">
        <Navigation />
        <Heading>{heading}</Heading>
      </Flex>
      <Flex direction="column" justify="center" align="center" style={{ padding: 30 }}>
        {children}
      </Flex>
    </>
  );
};

export default Layout;