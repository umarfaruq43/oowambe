import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import Form from "./Form";

const Hero = () => {
  return (
    <Box
      bgImage={["/heromobile.svg", "/hero1.svg"]}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      // px="0"
      fontFamily="font.text"
      id="hero"
      px={{ base: "20px" }}
    >
      <Flex mx="auto" color="#fff" maxW="1200px">
        <Box
          w={{ base: "60%", sm: "45%", md: "40%" }}
          pt={{ base: "26px", md: "113px" }}
          pb={{ base: "43px", md: "105px" }}
          // pl={["21px", " 21px", "21px", "100px"]}
        >
          <Box maxW="455px">
            <Text
              fontFamily="font.text"
              fontSize={{ base: "18px", sm: "24px", md: "36px" }}
            >
              Let’s help you achieve your dream <b>wedding</b>{" "}
            </Text>

            <Text
              mt={["16px", null, "24px"]}
              mb={["24px", null, "42px"]}
              fontSize={["16px", "24px"]}
              maxW="451px"
            >
              <b>Join the waitlist</b> to create memories that will last a life
              time.
            </Text>

            <Form />
          </Box>
        </Box>
        <Box
          w={{ base: "30%", sm: "40%", md: "50%" }}
          // backgroundImage="/hero.svg"
          bgSize="cover"
          bgPos="right"
        ></Box>
      </Flex>
    </Box>
  );
};

export default Hero;
