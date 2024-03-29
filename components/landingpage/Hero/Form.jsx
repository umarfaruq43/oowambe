import {
  Input,
  Text,
  Box,
  useToast,
  FormControl,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import OowambeButton from "../../../components/OowambeButton";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const onSubmit = (data) => {
    toast({
      title: "Submitted!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    console.log(data);
  };
  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <Box mb={["20px", "24px"]}>
          <Input
            id="email"
            fontSize={["16px", "18px"]}
            h={["40px", "58px"]}
            bgColor="brand.50"
            _placeholder={{ color: "dark.50" }}
            color="dark.50"
            _focus={{ boxShadow: "none" }}
            type="email"
            placeholder="Email"
            {...register("email", { required: "*Email is Required" })}
          />
          {errors.email && (
            <Text
              color="red.500"
              fontSize={{ base: "12px", md: "16px" }}
              mt="2px"
              fontWeight="600"
            >
              {errors.email.message}
            </Text>
          )}
        </Box>
        <Box mb={["20px", "30px"]}>
          <Input
            id="password"
            fontSize={["16px", "18px"]}
            h={["40px", "58px"]}
            bgColor="brand.50"
            color="dark.50"
            _placeholder={{ color: "dark.50" }}
            _focus={{ boxShadow: "none" }}
            type="password"
            placeholder="Password (8 characters)"
            {...register("password", {
              required: "*Password is Required",
              minLength: {
                value: 8,
                message: "*Password must be more than 8 characters",
              },
            })}
          />
          {errors.password && (
            <Text
              color="red.500"
              fontSize={{ base: "12px", md: "16px" }}
              mt="2px"
              fontWeight="600"
            >
              {errors.password.message}
            </Text>
          )}
        </Box>
      </FormControl>
      <OowambeButton
        type="submit"
        w="100%"
        h={["44px", "58px"]}
        text="Join the waitlist"
      />
      <Box
        mt={["20px", "32px"]}
        fontWeight="700"
        fontSize={["16px", "24px"]}
        lineHeight="1.3"
        // align="center"
        // display="inline-block"
      >
        {/* <Text > */} Please tick if you are a vendor {/* </Text> */}
        <Box display="inline-block" lineHeight="0.8">
          <Checkbox size={["sm", "lg"]} bgColor="#fff"></Checkbox>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
