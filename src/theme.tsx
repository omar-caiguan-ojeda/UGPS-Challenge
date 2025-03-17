// // src/theme.tsx
// import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// const config: ThemeConfig = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
// };

// const theme = extendTheme({
//   config,
//   breakpoints: {
//     base: "0em", // 0px
//     sm: "30em", // 480px
//     md: "48em", // 768px
//     lg: "62em", // 992px
//     xl: "80em", // 1280px
//   },
//   colors: {
//     gray: {
//       900: "#1a202c",
//       800: "#2d3748",
//     },
//     cyan: {
//       400: "#00bcd4",
//     },
//   },
//   styles: {
//     global: {
//       body: {
//         bg: "gray.900",
//         color: "white",
//       },
//     },
//   },
// });

// export default theme;


// src/theme.tsx
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark", // Mantienes "dark" como inicial
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  breakpoints: {
    base: "0em", // 0px
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
  },
  colors: {
    gray: {
      900: "#1a202c",
      800: "#2d3748",
    },
    cyan: {
      400: "#00bcd4",
    },
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === "light" ? "gray.50" : "gray.900",
        color: props.colorMode === "light" ? "gray.800" : "white",
      },
    }),
  },
});

export default theme;