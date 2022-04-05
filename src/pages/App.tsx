import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "../theme";
import Dashboard from "./Dashboard";
import "../styling/fonts.css";

export const App = () => {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <QueryClientProvider client={new QueryClient()}>
        <Dashboard />
      </QueryClientProvider>
    </ChakraProvider>
  );
};
