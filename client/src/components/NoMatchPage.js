import { Button, Box, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NoMatchPage = () => {
  const navigate = useNavigate();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Heading>Ooops!</Heading>
      <Heading size="md" mt={4} mb={4}>
        You reached somewhere you shouldnt
      </Heading>
      <Button onClick={() => navigate("/")} colorScheme="blue">
        Back to login
      </Button>
    </Box>
  );
};

export default NoMatchPage;
