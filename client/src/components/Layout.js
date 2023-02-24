import { Outlet } from "react-router-dom";
import { Button, Box, Heading, Flex } from "@chakra-ui/react";

const RouteGuard = () => {
  return (
    <Flex
      bg="whitesmoke"
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {/* <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/nothing-here">Nothing Here</Link>
              </li>
            </ul>
          </nav> */}

      {/* An <Outlet> renders whatever child route is currently active,
              so you can think about this <Outlet> as a placeholder for
              the child routes we defined above. */}
      <Outlet />
    </Flex>
  );
};

export default RouteGuard;
