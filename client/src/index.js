import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./store";
import RootRoutes from "./routes";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <GoogleOAuthProvider
          clientId={process.env.REACT_APP_GOOGLE_AUTH_AUDIENCE}
        >
          <BrowserRouter>
            <RootRoutes />
          </BrowserRouter>
        </GoogleOAuthProvider>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
