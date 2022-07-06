import { Box, Flex, Image, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import OowambeButton from "../OowambeButton";

const Service = () => {
  return (
    <Box
      bgImage={{ base: "/servicebgmobile.svg", sm: "/servicebg.svg" }}
      mt="300px"
      minH="643px"
      bgPos="top"
      bgSize="cover"
      bgRepeat="no-repeat"
      px="10px"
      pb="93px"
    >
      <SimpleGrid
        minChildWidth="250px"
        maxW="1200px"
        gap="25px"
        mx="auto"
        px={{ base: "5px", md: "10px" }}
      >
        <Box
          w="100%"
          color="brand.50"
          bgColor="brand.300"
          borderRadius="10px"
          mx="auto"
          overflow="hidden"
          maxW="380px"
          
        >
          <Box px="25px" pt="38px">
            <Text as="h3" fontSize="24px" mb="22px" fontWeight="700">
              Know your Budget
            </Text>
            <Text fontSize={{ base: "16px", md: "24px" }}>
              Are you stucked on wedding preparations and you are looking for
              how to get a fixed budget? Click on get started to{" "}
              <Text as="span" color="brand.100" fontWeight="600">
                calculate
              </Text>{" "}
              all you need for your wedding.
            </Text>
            <Box mt="20px" mb="43px">
              <OowambeButton
                text="Get Started"
                fontSize="18px"
                w={{ base: "", md: "194px" }}
              />
            </Box>
          </Box>
          <Image w="100%" src="service1.svg" alt="Know your budget image" />
        </Box>
        {/* THE SEcond Box */}

        <Box
          w="100%"
          color="brand.50"
          bgColor="brand.300"
          borderRadius="10px"
          mx="auto"
          h="fit-content"
          maxW="380px"
          overflow="hidden"
        >
          <Box px="25px" pt="38px">
            <Text as="h3" fontSize="24px" mb="22px" fontWeight="700">
              Need a Loan
            </Text>
            <Text fontSize={{ base: "16px", md: "24px" }}>
              Oowambe does not just help you in planning your wedding, we help
              you{" "}
              <Text as="strong" color="brand.100">
                {" "}
                finance
              </Text>{" "}
              your wedding and create lasting memories that will last a life
              time.
            </Text>
          </Box>
          <Image
            w="100%"
            src="service2.svg"
            alt="Know your budget image"
            mt="39px"
          />
        </Box>

        {/* The THird Box */}

        <Box
          w="100%"
          color="brand.50"
          bgColor="brand.300"
          borderRadius="10px"
          mx="auto"
          h="fit-content"
          maxW="380px"
          overflow="hidden"
        >
          <Box px="25px" pt="38px">
            <Text as="h3" fontSize="24px" mb="22px" fontWeight="700">
              Your vendor Team
            </Text>
            <Text fontSize={{ base: "16px", md: "24px" }}>
              We help you get fantastic and reliable{" "}
              <Text as="strong" color="brand.100">
                vendor partners
              </Text>{" "}
              at a very affordable cost.
            </Text>
          </Box>
          <Image
            w="100%"
            src="service3.svg"
            alt="Know your budget image"
            mt="53px"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Service;
