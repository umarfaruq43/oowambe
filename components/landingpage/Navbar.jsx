import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import OowambeButton from "../OowambeButton";
import Layout from "../Layout";
import { Link } from "react-scroll";

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
      maxW="1200px"
      px="20px"
    >
      <Image
        src="/logo.svg"
        alt="Oowambe Logo"
        w={{ base: "100px", md: "132.14px" }}
      />
      <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
        <OowambeButton
          text="Join the waitlist"
          w={{ base: "153px", md: "203px" }}
        />
      </Link>
    </Flex>
  );
};

export default Navbar;
