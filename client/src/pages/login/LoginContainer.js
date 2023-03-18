import { useEffect, useState } from "react";
import { Button, Box, Heading } from "@chakra-ui/react";
import { useLoginUserMutation } from "../../api";
import { GoogleLogin } from "@react-oauth/google";

const LoginContainer = () => {
  const [isGoogleError, setIsGoogleError] = useState(false);
  const [triggerLoginUserApi, loginUserApiResult] = useLoginUserMutation();

  useEffect(() => {
    if (loginUserApiResult.isSuccess) {
      console.log("SUCCESS");
    } else if (loginUserApiResult.isError) {
      setIsGoogleError(true);
    }
  }, [loginUserApiResult]);

  if (isGoogleError) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <Heading>Google Login Demo</Heading>
        <Heading size="md" mt={4} mb={4}>
          There was an error logging in
        </Heading>
        <Button onClick={() => setIsGoogleError(false)} colorScheme="blue">
          Back to login
        </Button>
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Heading>Google Login Demo</Heading>
      <Heading size="md" mt={4} mb={4}>
        Login Sample App
      </Heading>
      <GoogleLogin
        onSuccess={(response) => {
          triggerLoginUserApi({ credential: response.credential });
        }}
        onError={() => {
          console.log("Login Failed");
          setIsGoogleError(true);
        }}
      />
    </Box>
  );
};

export default LoginContainer;
