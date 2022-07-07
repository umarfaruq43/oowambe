import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";

const Plan = () => {
  return (
    <Box
      pt={{ base: "46px", md: "118px" }}
      fontFamily="fonts.text"
      mx="auto"
      position="relative"
    >
      <Flex gap={{ base: "5px", md: "12px" }} w="100%">
        <Box w={{ sm: "40%" }}>
          <Image
            src="/vector1.svg"
            alt="Line Graphics"
            display={{ base: "none", sm: "block" }}
            mt="25px"
          />
          <Image
            src="/vector3.svg"
            alt="Line Graphics"
            w="132px"
            mt="5px"

            display={{ base: "auto", sm: "none" }}
          />
        </Box>

        <Box w="30%">
          <Text
            maxW={["157px", "491px"]}
            minW="157px"
            w={{ xl: "491px" }}
            fontSize={{ base: "18px", sm: "18px", md: "36px" }}
          >
            We will walk you through every part of the planning
          </Text>
        </Box>
        <Box w={{ base: "81px", sm: "30%", md: "40%" }} overscrollX="hidden" >
          <Image
            src="/vector2.svg"
            alt="Line Graphics"
            mt={"-57%"}
            w="100%"
            display={{ base: "none", sm: "block" }}
          />
          <Image
            src="/vector4.svg"
            alt="Line Graphics"
            mt="-130px"
            ml="30px"
            display={{ base: "auto", sm: "none" }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Plan;
