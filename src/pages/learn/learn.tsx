import { ArrowBackIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Image,
  Progress,
  Tag,
  Text,
} from "@chakra-ui/react";

import React from "react";

const Learn: React.FC = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bg="brand.purple"
      pos="relative"
      overflow="hidden"
      p={3}
    >
      <Box h="20%">
        <Flex align="center" justify="center" h="100%">
          <ArrowBackIcon w={7} h={7} color="brand.brokenWhite" />
          <Box
            w="100%"
            borderRadius="2xl"
            bg="brand.violet"
            p={4}
            ml={2}
            mr={2}
          >
            <Box>
              <Flex align="center">
                <Text fontSize="lg">Learned:</Text>
                <Box flex={1} ml={2}>
                  <Progress colorScheme="green" size="lg" value={20} />
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex align="center">
                <Text fontSize="lg">Current group:</Text>
                <Box flex={1} ml={2}>
                  <Tag bg="brand.yellow" size="md">
                    <Text textTransform="uppercase">Ka group</Text>
                  </Tag>
                </Box>
              </Flex>
            </Box>
            <Box></Box>
          </Box>
          <SettingsIcon w={6} h={6} color="brand.brokenWhite" />
        </Flex>
      </Box>
      <Box h="55%">
        <Center h="100%">
          <Flex direction="column" align="center" justify="center">
            <Box>
              <Text fontSize="6rem" fontWeight="bold" color="white">
                あ
              </Text>
            </Box>
            <Box>
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
            </Box>
          </Flex>
        </Center>
      </Box>
      <Box h="25%" pos="relative" zIndex={2}>
        <Center h="100%">
          <Box
            h="100px"
            w="100%"
            borderRadius="2xl"
            bg="brand.violetTransparant"
            p={4}
          >
            <Text fontSize="lg">Welcome to learning</Text>
          </Box>
        </Center>
      </Box>
      <Box pos="absolute" bottom="-50" right="-50" zIndex={1}>
        <Image src="/images/kanachan.svg" alt="Kanachan" boxSize={200} />
      </Box>
    </Box>
  );
};

export default Learn;
