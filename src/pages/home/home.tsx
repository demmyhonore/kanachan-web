import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bgGradient="linear(to-b, brand.purple 0%,
        brand.purple 50%,
        brand.olive 50%,
        brand.olive 100%)"
      p={3}
    >
      {children}
    </Box>
  );
};

const Home: React.FC = () => {
  return (
    <Layout>
      <Box h="20%" p={2}>
        <Center h="100%">
          <Text fontSize="3xl" fontWeight="bold" color="white">
            Come study Kana together!
          </Text>
        </Center>
      </Box>
      <Box h="60%" p={2}>
        <Flex h="100%" direction="column" justify="space-around" align="center">
          <Button
            bg="brand.orange"
            fontSize="28px"
            borderRadius="12px"
            size="lg"
          >
            learn
          </Button>
          <Box>
            <Image src="/images/kanachan.svg" alt="Kanachan" boxSize={200} />
          </Box>
          <Button
            bg="brand.orange"
            fontSize="28px"
            borderRadius="12px"
            size="lg"
          >
            rehearse
          </Button>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Home;
