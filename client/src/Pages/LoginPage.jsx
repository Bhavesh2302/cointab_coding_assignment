import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const toast = useToast()

  const handleLoginUser = () => {
    const payload = {
      email,
      password,
    };
    fetch("http://localhost:7500/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message === "login successful" && res.token) {
          localStorage.setItem("userToken", res.token);
          localStorage.setItem("userData", JSON.stringify(res.userData));
          toast({
            title: "Login Success",
            position: "top",
            description: "you are successfully logged in",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          navigate("/")
        }
        else{
          toast({
            title: "Login Failed",
            position: "top",
            description: res.message,
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
       
      });
  };

  return (
    <Box w="100%">
      <Text mt="20px" fontWeight="bold" fontSize={"22px"}>
        Login Page
      </Text>
      <Box
        w={{ base: "80%", sm: "80%", md: "60%", lg: "40%" }}
        m="auto"
        mt="40px"
        height="400px"
        p="15px"
        boxShadow={
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"
        }
      >
        <Text fontWeight="bold" fontSize={"22px"} mt="20px">
          Sign In
        </Text>
        <Box w="70%" m="auto">
          <FormControl isRequired mt="30px">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              borderRadius={"0px"}
            />
          </FormControl>
          <FormControl isRequired mt="20px">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                borderRadius={0}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant={"solid"}
                borderRadius={"0px"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputGroup>
          </FormControl>

          <Button
            w="40%"
            m="auto"
            mt="20px"
            variant={"solid"}
            bg="#03989e"
            color="white"
            onClick={handleLoginUser}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
