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
            ml={{ base: 0, md: "250px" }}
            px={{ base: 0, md: 4 }}
            minH={{ base: "auto", md: "calc(100vh - 70px)" }}
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