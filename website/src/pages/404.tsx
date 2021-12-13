import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Heading, Text, Link as ChakraLink } from "@chakra-ui/layout";
import Link from "next/link";

import MotionBox from "components/motion/Box";

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box marginY={4}>
        <Heading textAlign="center">Page not Found.</Heading>

        <Box textAlign="center" marginTop={4}>
          <Text>{"It's Okay!"}</Text>
          <Link href="/" passHref>
            <Button
              backgroundColor={colorMode === "light" ? "gray.300" : "teal.500"}
            >
              {"Let's Head Back"}
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Page404;
