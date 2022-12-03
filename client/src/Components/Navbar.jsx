import { Avatar, Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("userData"));

  const userToken = localStorage.getItem("userToken");

  const handleLogoutUser = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    navigate("/login");
  };

  return (
    <Flex w="100%" p="10px" bg="#03989e" justifyContent="space-between">
      <Box w="15%" m="auto">
        <Image
          src="https://www.cointab.in/wp-content/uploads/2021/06/cointab_green-1.png"
          width="80%"
          alt="cointab_logo"
        />
      </Box>
      <Flex
        w="75%"
        fontSize={"20px"}
        color="white"
        justifyContent={"center"}
        alignItems="center"
        gap="100px"
      >
        <Box>
          <Link to="/">HomePage</Link>
        </Box>
        {userData ? (
          <Box>{userData.email}</Box>
        ) : (
          <Box>
            <Link to="/login">LoginPage</Link>
          </Box>
        )}

        <Box>
          <Link to="/signup">SignupPage</Link>
        </Box>
        {userToken && (
          <Button variant="unstyled" onClick={handleLogoutUser}>
            Logout
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
