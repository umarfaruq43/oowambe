import { Box } from "@chakra-ui/react";
import React from "react";

const Layout = ({ children, ...others }) => {
  return (
    <Box maxWidth="1440px" mx="auto" {...others} overflowX="hidden">
      {children}
    </Box>
  );
};

export default Layout;
