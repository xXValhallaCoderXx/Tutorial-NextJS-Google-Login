import { useEffect, useState } from "react";
import { Button, Box, Heading } from "@chakra-ui/react";
import { useLoginUserMutation } from "../../api";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../slice/auth-slice";
import { useDispatch } from "react-redux";

const LoginContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isGoogleError, setIsGoogleError] = useState(false);
  const [triggerLoginUserApi, loginUserApiResult] = useLoginUserMutation();

  useEffect(() => {
    if (loginUserApiResult.isSuccess) {
      dispatch(setUser({ ...loginUserApiResult.data.data }));
      navigate(`/profile`);
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
        onSuccess={(response) =>
          triggerLoginUserApi({ credential: response.credential })
        }
        onError={() => setIsGoogleError(true)}
      />
    </Box>
  );
};

export default LoginContainer;
