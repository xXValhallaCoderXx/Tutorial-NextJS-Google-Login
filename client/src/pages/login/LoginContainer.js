import { Button, Box, Heading, Flex } from "@chakra-ui/react";
import { useGetProfileQuery } from "../../api";

const LoginContainer = () => {
  const { data } = useGetProfileQuery();
  console.log("DATA: ", data);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Heading>Google Login Demo</Heading>
      <Heading size="md" mt={4} mb={4}>
        Login Sample App
      </Heading>
      <Button colorScheme="blue">Login With Google</Button>
    </Box>
  );
};

export default LoginContainer;
