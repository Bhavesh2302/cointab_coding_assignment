import { Box, Image } from "@chakra-ui/react";
import React from "react";

const HomePage = () => {
  return <Box w="50%" m="auto" mt="40px">
    <Image w="100%" h="400px" src="https://images.unsplash.com/photo-1595853035070-59a39fe84de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2VsY29tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="welcome"/>
  </Box>;
};

export default HomePage;
