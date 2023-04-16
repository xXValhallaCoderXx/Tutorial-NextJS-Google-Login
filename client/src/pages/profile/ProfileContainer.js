import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";
const ProfileContainer = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (data.user.email === "") {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Heading>Profile</Heading>
      <img style={{ borderRadius: "50%" }} src={data?.user?.profilePicture} />
      <Heading size="md" mt={4} mb={4}>
        E-mail: {data.user.email}
      </Heading>
      <Heading size="sm" mt={4}>
        First Name: {data.user.name}
      </Heading>
      <Heading size="sm" mt={2} mb={4}>
        Last Name: {data.user.lastName}
      </Heading>
    </Box>
  );
};

export default ProfileContainer;
