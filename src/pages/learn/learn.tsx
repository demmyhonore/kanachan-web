import {
  Box,
  Center,
  Flex,
  IconButton,
  Progress,
  Tag,
  Text,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";

const Home: React.FC = () => {
  return (
    <Box w="100vw" h="100vh" bg="brand.purple" p={3}>
      <Box h="25%">
        <Center h="100%">
          <Box h="100px" w="100%" borderRadius="2xl" bg="brand.violet" p={4}>
            <Box>
              <Flex align="center">
                <Text fontSize="xl">Learned:</Text>
                <Box flex={1} ml={2}>
                  <Progress colorScheme="green" size="lg" value={20} />
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex align="center">
                <Text fontSize="xl">Current group:</Text>
                <Box flex={1} ml={2}>
                  <Tag bg="brand.yellow" size="lg">
                    KA GROUP
                  </Tag>
                </Box>
              </Flex>
            </Box>
            <Box></Box>
          </Box>
        </Center>
      </Box>
      <Box h="50%">
        <Center h="100%">
          <Box>
            <Flex direction="column" align="center">
              <Box minW="300px">
                <Flex justify="space-around" align="center">
                  <Box>
                    <IconButton
                      aria-label="Previous"
                      icon={<ChevronLeftIcon w={10} h={10} />}
                    />
                  </Box>
                  <Text fontSize="6rem" fontWeight="bold" color="white">
                    あ
                  </Text>
                  <Box>
                    <IconButton
                      aria-label="Next"
                      icon={<ChevronRightIcon w={10} h={10} />}
                    />
                  </Box>
                </Flex>
              </Box>
              <Box
                bg="brand.brokenWhite"
                borderRadius="2xl"
                display="inline-block"
                p={2}
                minW="5rem"
              >
                <Center h="100%">
                  <Text fontSize="2rem" fontWeight="bold">
                    A
                  </Text>
                </Center>
              </Box>
            </Flex>
          </Box>
        </Center>
      </Box>
      <Box h="25%" bg="orange">
        Hello
      </Box>
    </Box>
  );
};

export default Home;
