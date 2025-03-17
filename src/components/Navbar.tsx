import { useState } from "react";
import {
    Box,
    Flex,
    Heading,
    Input,
    Select,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    VStack,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, SunIcon, MoonIcon, SearchIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useFilters } from "../context/FilterContext";



const MotionBox = motion(Box);

interface Filters {
  search?: string;
  year?: string;
  genre?: string;
  platform?: string;
  tag?: string;
  developer?: string;
  ordering?: string;
  dates?: string;
  genres?: string;
  platforms?: string;
  tags?: string;
  developers?: string;
}

/**
 * Responsive navigation bar with search and filter options.
 * Supports light and dark themes with dynamic color adjustments.
 */
export const Navbar = () => {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const [tag, setTag] = useState("");
  const [developer, setDeveloper] = useState("");
  const { setFilters } = useFilters();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  // Dynamic colors for light/dark themes
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const inputBg = useColorModeValue("gray.100", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  /**
   * Applies a filter and navigates to the home page, resetting local filter states.
   * @param filterType - The type of filter to apply (e.g., "year", "genre").
   * @param value - The value of the filter.
   */
  const handleFilterChange = (
    filterType: "year" | "genre" | "platform" | "tag" | "developer",
    value: string
  ) => {
    const newFilters: Filters = { [filterType]: value };
    setFilters(newFilters);
    navigate("/");
    setYear("");
    setGenre("");
    setPlatform("");
    setTag("");
    setDeveloper("");
  };

  /** Triggers a search and resets the search input. */
  const handleSearch = () => {
    if (search.trim()) {
      setFilters({ search });
      setSearch("");
      onClose();
      navigate("/");
    }
  };

  const currentYear = new Date().getFullYear();
  const startYear = 1980;
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => currentYear - i
  );

  return (
    <MotionBox
      as="nav"
      bg={bgColor}
      py={{ base: 2, md: 4 }}
      px={{ base: 4, md: 6 }}
      boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
      position="sticky"
      top={0}
      zIndex={10}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="container.xl"
        mx="auto"
        gap={{ base: 2, sm: 4, md: 6 }}
      >
        <Heading
          as={RouterLink}
          to="/"
          size={{ base: "md", md: "lg" }}
          bgGradient="linear(to-r, cyan.400, purple.400)"
          bgClip="text"
          _hover={{ opacity: 0.8 }}
          onClick={() => setFilters({})}
        >
          GameHub
        </Heading>

        <Flex
          align="center"
          gap={{ base: 1, md: 2 }}
          display={{ base: "none", md: "flex" }}
          flexWrap="wrap"
        >
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            colorScheme="cyan"
            size={{ base: "sm", md: "md" }}
            onClick={handleSearch}
          />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Busca un juego..."
            bg={inputBg}
            border="1px solid"
            borderColor={borderColor}
            color={textColor}
            _focus={{ borderColor: "cyan.400" }}
            w={{ base: "150px", md: "200px" }}
            size={{ base: "sm", md: "md" }}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
          <Select
            value={year}
            onChange={(e) => handleFilterChange("year", e.target.value)}
            placeholder="Año"
            bg={inputBg}
            border="1px solid"
            borderColor={borderColor}
            color={textColor}
            w={{ base: "100px", md: "120px" }}
            size={{ base: "sm", md: "md" }}
          >
            {years.map((yearOption) => (
              <option key={yearOption} value={yearOption}>
                {yearOption}
              </option>
            ))}
          </Select>
          <Select
            value={genre}
            onChange={(e) => handleFilterChange("genre", e.target.value)}
            placeholder="Género"
            bg={inputBg}
            border="1px solid"
            borderColor={borderColor}
            color={textColor}
            w={{ base: "100px", md: "120px" }}
            size={{ base: "sm", md: "md" }}
          >
            <option value="action">Acción</option>
            <option value="adventure">Aventura</option>
            <option value="role-playing-games-rpg">RPG</option>
            <option value="shooter">Tiros</option>
            <option value="strategy">Estrategia</option>
            <option value="sports">Deportes</option>
            <option value="racing">Carreras</option>
            <option value="simulation">Simulación</option>
            <option value="fighting">Peleas</option>
            <option value="puzzle">Puzzles</option>
          </Select>
          <Select
            value={platform}
            onChange={(e) => handleFilterChange("platform", e.target.value)}
            placeholder="Plataforma"
            bg={inputBg}
            border="1px solid"
            borderColor={borderColor}
            color={textColor}
            w={{ base: "120px", md: "140px" }}
            size={{ base: "sm", md: "md" }}
          >
            <option value="4">PC</option>
            <option value="1">Xbox One</option>
            <option value="18">PlayStation 4</option>
            <option value="7">Nintendo Switch</option>
            <option value="187">PlayStation 5</option>
            <option value="186">Xbox Series X/S</option>
            <option value="3">iOS</option>
            <option value="21">Android</option>
            <option value="8">Nintendo 3DS</option>
            <option value="14">Xbox 360</option>
            <option value="16">PlayStation 3</option>
            <option value="10">Wii U</option>
          </Select>
          <Select
            value={tag}
            onChange={(e) => handleFilterChange("tag", e.target.value)}
            placeholder="Modo"
            bg={inputBg}
            border="1px solid"
            borderColor={borderColor}
            color={textColor}
            w={{ base: "100px", md: "120px" }}
            size={{ base: "sm", md: "md" }}
          >
            <option value="singleplayer">Un Jugador</option>
            <option value="multiplayer">Multijugador</option>
            <option value="open-world">Mundo Abierto</option>
            <option value="co-op">Cooperativo</option>
          </Select>
          <Select
            value={developer}
            onChange={(e) => handleFilterChange("developer", e.target.value)}
            placeholder="Distribuidora"
            bg={inputBg}
            border="1px solid"
            borderColor={borderColor}
            color={textColor}
            w={{ base: "140px", md: "160px" }}
            size={{ base: "sm", md: "md" }}
          >
            <option value="rockstar-games">Rockstar Games</option>
            <option value="ubisoft">Ubisoft</option>
            <option value="cd-projekt-red">CD Projekt Red</option>
            <option value="naughty-dog">Naughty Dog</option>
            <option value="electronic-arts">Electronic Arts (EA)</option>
            <option value="activision">Activision</option>
            <option value="square-enix">Square Enix</option>
            <option value="bethesda-softworks">Bethesda Softworks</option>
            <option value="nintendo">Nintendo</option>
            <option value="capcom">Capcom</option>
            <option value="epic-games">Epic Games</option>
            <option value="valve-software">Valve</option>
            <option value="bungie">Bungie</option>
            <option value="fromsoftware">FromSoftware</option>
            <option value="kojima-productions">Kojima Productions</option>
          </Select>
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            color={textColor}
            size={{ base: "sm", md: "md" }}
          />
        </Flex>

        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          colorScheme="cyan"
          variant="ghost"
          size="md"
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={bgColor}>
          <DrawerHeader
            bgGradient="linear(to-r, cyan.400, purple.400)"
            bgClip="text"
            fontSize={{ base: "lg", md: "xl" }}
            color={textColor}
          >
            Filtros
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={3}>
              <Flex w="full" gap={2}>
                <IconButton
                  aria-label="Search"
                  icon={<SearchIcon />}
                  colorScheme="cyan"
                  onClick={handleSearch}
                  size="sm"
                />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Busca un juego..."
                  bg={inputBg}
                  border="1px solid"
                  borderColor={borderColor}
                  color={textColor}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  size="sm"
                />
              </Flex>
              <Select
                value={year}
                onChange={(e) => handleFilterChange("year", e.target.value)}
                placeholder="Año"
                bg={inputBg}
                border="1px solid"
                borderColor={borderColor}
                color={textColor}
                size="sm"
              >
                {years.map((yearOption) => (
                  <option key={yearOption} value={yearOption}>
                    {yearOption}
                  </option>
                ))}
              </Select>
              <Select
                value={genre}
                onChange={(e) => handleFilterChange("genre", e.target.value)}
                placeholder="Género"
                bg={inputBg}
                border="1px solid"
                borderColor={borderColor}
                color={textColor}
                size="sm"
              >
                <option value="action">Acción</option>
                <option value="adventure">Aventura</option>
                <option value="role-playing-games-rpg">RPG</option>
                <option value="shooter">Tiros</option>
                <option value="strategy">Estrategia</option>
                <option value="sports">Deportes</option>
                <option value="racing">Carreras</option>
                <option value="simulation">Simulación</option>
                <option value="fighting">Peleas</option>
                <option value="puzzle">Puzzles</option>
              </Select>
              <Select
                value={platform}
                onChange={(e) => handleFilterChange("platform", e.target.value)}
                placeholder="Plataforma"
                bg={inputBg}
                border="1px solid"
                borderColor={borderColor}
                color={textColor}
                size="sm"
                w="full"
              >
                <option value="4">PC</option>
                <option value="1">Xbox One</option>
                <option value="18">PlayStation 4</option>
                <option value="7">Nintendo Switch</option>
                <option value="187">PlayStation 5</option>
                <option value="186">Xbox Series X/S</option>
                <option value="3">iOS</option>
                <option value="21">Android</option>
                <option value="8">Nintendo 3DS</option>
                <option value="14">Xbox 360</option>
                <option value="16">PlayStation 3</option>
                <option value="10">Wii U</option>
              </Select>
              <Select
                value={tag}
                onChange={(e) => handleFilterChange("tag", e.target.value)}
                placeholder="Modo"
                bg={inputBg}
                border="1px solid"
                borderColor={borderColor}
                color={textColor}
                size="sm"
              >
                <option value="singleplayer">Un Jugador</option>
                <option value="multiplayer">Multijugador</option>
                <option value="open-world">Mundo Abierto</option>
                <option value="co-op">Cooperativo</option>
              </Select>
              <Select
                value={developer}
                onChange={(e) => handleFilterChange("developer", e.target.value)}
                placeholder="Distribuidora"
                bg={inputBg}
                border="1px solid"
                borderColor={borderColor}
                color={textColor}
                size="sm"
                w="full"
              >
                <option value="rockstar-games">Rockstar Games</option>
                <option value="ubisoft">Ubisoft</option>
                <option value="cd-projekt-red">CD Projekt Red</option>
                <option value="naughty-dog">Naughty Dog</option>
                <option value="electronic-arts">Electronic Arts (EA)</option>
                <option value="activision">Activision</option>
                <option value="square-enix">Square Enix</option>
                <option value="bethesda-softworks">Bethesda Softworks</option>
                <option value="nintendo">Nintendo</option>
                <option value="capcom">Capcom</option>
                <option value="epic-games">Epic Games</option>
                <option value="valve-software">Valve</option>
                <option value="bungie">Bungie</option>
                <option value="fromsoftware">FromSoftware</option>
                <option value="kojima-productions">Kojima Productions</option>
              </Select>
              <IconButton
                aria-label="Toggle color mode"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                variant="ghost"
                color={textColor}
                w="full"
                size="sm"
              />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MotionBox>
  );
};