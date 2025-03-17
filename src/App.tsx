
// // src/App.tsx
// import { Routes, Route } from "react-router-dom";
// import { Box, Flex } from "@chakra-ui/react";
// import { Navbar } from "./components/Navbar";
// import { Sidebar } from "./components/Sidebar";
// import { Footer } from "./components/Footer";
// import Home from "./pages/Home";
// import GameDetails from "./pages/GameDetails";

// const App = () => {
//   return (
//     <Box minH="100vh" display="flex" flexDirection="column">
//       <Navbar />
//       <Flex direction={{ base: "column", md: "row" }} flex="1">
//         <Sidebar />
//         <Box flex="1">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/game/:id" element={<GameDetails />} />
//           </Routes>
//         </Box>
//       </Flex>
//       <Footer />
//     </Box>
//   );
// };

// export default App;





// src/App.tsx
// import { Routes, Route } from "react-router-dom";
// import { Box, Flex } from "@chakra-ui/react";
// import { Navbar } from "./components/Navbar";
// import { Sidebar } from "./components/Sidebar";
// import { Footer } from "./components/Footer";
// import Home from "./pages/Home";
// import GameDetails from "./pages/GameDetails";

// const App = () => {
//   return (
//     <Box minH="100vh" display="flex" flexDirection="column">
//       <Navbar />
//       <Flex
//         direction={{ base: "column", md: "row" }}
//         flex="1"
//         gap={{ base: 4, md: 6 }} // Espaciado entre Sidebar y contenido
//       >
//         <Sidebar />
//         <Box flex="1" px={{ base: 0, md: 4 }}> {/* Margen lateral en desktop */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/game/:id" element={<GameDetails />} />
//           </Routes>
//         </Box>
//       </Flex>
//       <Footer />
//     </Box>
//   );
// };

// export default App;




// // src/App.tsx
// import { Routes, Route } from "react-router-dom";
// import { Box, Flex } from "@chakra-ui/react";
// import { Navbar } from "./components/Navbar";
// import { Sidebar } from "./components/Sidebar";
// import { Footer } from "./components/Footer";
// import Home from "./pages/Home";
// import GameDetails from "./pages/GameDetails";

// const App = () => {
//   return (
//     <Box minH="100vh" display="flex" flexDirection="column">
//       <Navbar />
//       <Flex direction={{ base: "column", md: "row" }} flex="1">
//         <Sidebar />
//         <Box
//           flex="1"
//           ml={{ base: 0, md: "250px" }} // Margen izquierdo igual al ancho del Sidebar en desktop
//           px={{ base: 0, md: 4 }}
//         >
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/game/:id" element={<GameDetails />} />
//           </Routes>
//         </Box>
//       </Flex>
//       <Footer />
//     </Box>
//   );
// };

// export default App;


// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import { FilterProvider } from "./context/FilterContext";

const App = () => {
  return (
    <FilterProvider>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Navbar />
        <Flex direction={{ base: "column", md: "row" }} flex="1">
          <Sidebar />
          <Box
            flex="1"
            ml={{ base: 0, md: "250px" }} // Espacio para el Sidebar en desktop
            px={{ base: 0, md: 4 }}
            minH={{ base: "auto", md: "calc(100vh - 70px)" }} // Asegura que el contenido sea al menos tan alto como la pantalla menos el Navbar
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game/:id" element={<GameDetails />} />
            </Routes>
          </Box>
        </Flex>
        <Footer />
      </Box>
    </FilterProvider>  
  );
};

export default App;