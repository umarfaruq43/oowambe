import { Box } from "@chakra-ui/react";
import React from "react";

const Layout = ({ children, ...others }) => {
  return (
    <Box maxWidth="4040px"  mx="auto" {...others} overflowX="hidden">
      {children}
    </Box>
  );
};

export default Layout;
