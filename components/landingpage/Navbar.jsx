import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import OowambeButton from "../OowambeButton";
import Layout from "../Layout";

const Navbar = () => {
  return (
    <Flex
      justify="space-between"
      align="end"
      gap="34px"
      pt={{ base: "4" }}
      pb={{ base: "10px" }}
      h={{ base: "", md: "182px" }}
      mx="auto"
      maxW="1067px"
      px="20px"
    >
      <Image
        src="/logo.svg"
        alt="Oowambe Logo"
        w={{ base: "100px", md: "132.14px" }}
      />
      <OowambeButton text="Join the waitlist" w="203px" />
    </Flex>
  );
};

export default Navbar;
