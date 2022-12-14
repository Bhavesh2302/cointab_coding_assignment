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

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleSignupUser = () => {
    const payload = {
      name,
      email,
      password,
    };
    fetch("https://cointabserver-production.up.railway.app/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "signup sucessful") {
          toast({
            title: "Signup Success",
            position: "top",
            description: "you are successfully signed in",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          navigate("/");
        } else if (res.message === "Something went wrong please try again") {
          toast({
            title: "Signup Failed",
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
        Signup Page
      </Text>
      <Box
        w={{ base: "80%", sm: "80%", md: "60%", lg: "40%" }}
        m="auto"
        mt="20px"
        height="450px"
        p="15px"
        boxShadow={
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"
        }
      >
        <Text fontWeight="bold" fontSize={"22px"} mt="20px">
          SignUp
        </Text>
        <Box w="70%" m="auto">
          <FormControl isRequired mt="20px">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
              borderRadius={"0px"}
            />
          </FormControl>
          <FormControl isRequired mt="20px">
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
            onClick={handleSignupUser}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupPage;
