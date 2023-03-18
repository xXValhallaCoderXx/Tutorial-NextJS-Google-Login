import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";
const ProfileContainer = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  console.log("USER: ", user);
  useEffect(() => {
    if (user.email === "") {
      navigate("/");
    }
  }, []);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Heading>Profile</Heading>
      <Heading size="md" mt={4} mb={4}>
        User {user.email}
      </Heading>
    </Box>
  );
};

export default ProfileContainer;
