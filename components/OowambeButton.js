import { Button } from "@chakra-ui/react";
import React from "react";

const OowambeButton = ({ text, ...others }) => {
  return (
    <Button
      backgroundColor="brand.100"
      color="brand.50"
      _hover={{
        backgroundColor: "brand.100",
        color: "brand.50",
        boxShadow: "lg",
      }}
      _focus={{
        backgroundColor: "brand.100",
        color: "brand.50",
        boxShadow: "lg",
      }}
      {...others}
    >
      {text}
    </Button>
  );
};

export default OowambeButton;
