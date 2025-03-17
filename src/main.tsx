// import React from "react";
// import ReactDOM from "react-dom/client";
// import { ChakraProvider } from "@chakra-ui/react";
// import theme from "./theme"; // Asegúrate de importar el tema correctamente
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ChakraProvider theme={theme}>
//         <App />
//       </ChakraProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/FilterContext";
import App from "./App";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <FilterProvider>
          <App />
        </FilterProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);


// // src/main.tsx
// import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import "./index.css";

// const theme = extendTheme({
//   config: {
//     initialColorMode: "light",
//     useSystemColorMode: false,
//   },
//   styles: {
//     global: (props: { colorMode: string }) => ({
//       body: {
//         bg: props.colorMode === "light" ? "gray.50" : "gray.900",
//         color: props.colorMode === "light" ? "gray.800" : "white",
//       },
//     }),
//   },
// });

// createRoot(document.getElementById("root")!).render(
//   <ChakraProvider theme={theme}>
//     <App />
//   </ChakraProvider>
// );