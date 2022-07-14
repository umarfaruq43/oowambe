import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Box bgColor="brand.200" pb={{ base: "42px", md: "52px" }} pt="21px">
      <Flex
        justify="space-between"
        alignItems="end"
        color="brand.50"
        mx="auto"
        // px={["21px", " 21px", "21px", "100px"]}
        maxW="1200px"
        px="20px"
      >
        <Box>
          <NextLink href="/" passHref>
            <Link>
              <Image
                src="/lightLogo.svg"
                alt="Oowambe Logo"
                w={{ base: "100px", md: "132.14px" }}
              />
            </Link>
          </NextLink>

          <Text
            mt={["3px", "16px"]}
            fontSize={["14px", "24px"]}
            maxW={{ base: "136px", md: "100%" }}
          >
            Bringing your dream to reality
          </Text>
        </Box>

        <Box>
          <Text
            maxW={{ base: "145px", md: "100%" }}
            fontSize={{ base: "14px", md: "24px" }}
            fontWeight="700"
            mb={["12px", "25px"]}
          >
            Connect With Us On Social Media
          </Text>
          <Flex
            gap={{ base: "9px", md: "39px" }}
            justify={{ base: "start", md: "center" }}
          >
            <NextLink href="http://instagram.com" passHref>
              <Link>
                <Image
                  src="/facebook.svg"
                  alt="Facebook Icon"
                  w={["24px", "34px"]}
                />
              </Link>
            </NextLink>

            <NextLink href="http://instagram.com" passHref>
              <Link>
                <Image
                  src="/twitter.svg"
                  alt="twitter Icon"
                  w={["24px", "34px"]}
                />
              </Link>
            </NextLink>
            <NextLink href="http://instagram.com" passHref>
              <Link>
                <Image
                  src="/Instagram.svg"
                  alt="twitter Icon"
                  w={["24px", "34px"]}
                />
              </Link>
            </NextLink>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
