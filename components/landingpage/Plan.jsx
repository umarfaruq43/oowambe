import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";

const Plan = () => {
  return (
    <Box pt="118px" fontFamily="fonts.text" maxW="1067px" mx="auto" position="relative">
      <Flex>
        <Image src="/vector1.svg" alt="Line Graphics" position="absolute" />
        <Text
          maxW={["157px", "491px"]}
          w={{ md: "491px" }}
          fontSize={{ base: "", md: "36px" }}
        >
          {" "}
          We will walk you through every part of the planning{" "}
        </Text>
        <Image src="/vector2.svg" alt="Line Graphics" position="absolute" right="-6" top="-23" />
      </Flex>
    </Box>
  );
};

export default Plan;
