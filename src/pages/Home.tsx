import { useEffect, useState } from "react";
import { fetchGames } from "../api/api";
import {
  Heading,
  SimpleGrid,
  VStack,
  Container,
  useColorModeValue,
  Text,
  Icon,
  Spinner,
  Button,
  Flex,
} from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { GameCard } from "../components/GameCard";
import { Game } from "../types";
import { useFilters } from "../context/FilterContext";

/**
 * Home page displaying a paginated list of games based on applied filters.
 * Supports light and dark themes with dynamic styling.
 */
const Home = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);
  const { filters } = useFilters();
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.400");
  const gradient = useColorModeValue(
    "linear(to-r, cyan.500, purple.500)",
    "linear(to-r, cyan.400, purple.400)"
  );

  const pageSize = 20;

  /**
   * Fetches games from the API based on filters and pagination.
   * @param page - The page number to fetch.
   */
  const loadGames = async (page: number) => {
    setLoading(true);
    try {
      const appliedFilters = {
        ...filters,
        ordering: filters.ordering || "-metacritic",
      };

      const apiFilters = {
        dates: appliedFilters.dates || (appliedFilters.year ? `${appliedFilters.year}-01-01,${appliedFilters.year}-12-31` : undefined),
        genres: appliedFilters.genres || appliedFilters.genre,
        platforms: appliedFilters.platforms || appliedFilters.platform,
        tags: appliedFilters.tags || appliedFilters.tag,
        developers: appliedFilters.developers || appliedFilters.developer,
        search: appliedFilters.search,
        ordering: appliedFilters.ordering,
      };

      console.log("Filtros enviados a la API desde Home:", apiFilters);
      const data = await fetchGames(apiFilters, page, pageSize);
      setGames(data.results);
      setTotalCount(data.count);
      setHasNext(!!data.next);
      setHasPrevious(!!data.previous);
    } catch (error) {
      console.error("Error loading games:", error);
      setGames([]);
      setTotalCount(0);
      setHasNext(false);
      setHasPrevious(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    loadGames(1);
  }, [filters]);

  useEffect(() => {
    loadGames(currentPage);
  }, [currentPage]);

  const totalPages = Math.ceil(totalCount / pageSize);

  /** Generates a dynamic title based on active filters. */
  const getDynamicTitle = () => {
    if (filters.search) return `Resultados de tu búsqueda: "${filters.search}"`;
    if (filters.year) return `Juegos de ${filters.year}`;
    if (filters.genre) {
      const genreNames: { [key: string]: string } = {
        action: "Acción",
        adventure: "Aventura",
        "role-playing-games-rpg": "RPG",
        shooter: "Tiros",
        strategy: "Estrategia",
        sports: "Deportes",
        racing: "Carreras",
        simulation: "Simulación",
        fighting: "Peleas",
        puzzle: "Puzzles",
      };
      return `Juegos de ${genreNames[filters.genre] || filters.genre}`;
    }
    if (filters.platform) {
      const platformNames: { [key: string]: string } = {
        "4": "PC",
        "1": "Xbox One",
        "18": "PlayStation 4",
        "7": "Nintendo Switch",
        "187": "PlayStation 5",
        "186": "Xbox Series X/S",
        "3": "iOS",
        "21": "Android",
        "8": "Nintendo 3DS",
        "14": "Xbox 360",
        "16": "PlayStation 3",
        "10": "Wii U",
      };
      return `Juegos de la plataforma ${platformNames[filters.platform] || filters.platform}`;
    }
    if (filters.tag) {
      const tagNames: { [key: string]: string } = {
        singleplayer: "Un Jugador",
        multiplayer: "Multijugador",
        "open-world": "Mundo Abierto",
        "co-op": "Cooperativo",
      };
      return `Juegos de ${tagNames[filters.tag] || filters.tag}`;
    }
    if (filters.developer) {
      const developerNames: { [key: string]: string } = {
        "rockstar-games": "Rockstar Games",
        ubisoft: "Ubisoft",
        "cd-projekt-red": "CD Projekt Red",
        "naughty-dog": "Naughty Dog",
        "electronic-arts": "Electronic Arts (EA)",
        activision: "Activision",
        "square-enix": "Square Enix",
        "bethesda-softworks": "Bethesda Softworks",
        nintendo: "Nintendo",
        capcom: "Capcom",
        "epic-games": "Epic Games",
        "valve-software": "Valve",
        bungie: "Bungie",
        fromsoftware: "FromSoftware",
        "kojima-productions": "Kojima Productions",
      };
      return `Juegos de ${developerNames[filters.developer] || filters.developer}`;
    }
    if (filters.dates) {
      if (filters.dates === "1885-01-01,2000-12-31") return "Clásicos";
      if (filters.ordering === "-added") {
        const [startDate] = filters.dates.split(",");
        const start = new Date(startDate);
        const now = new Date();
        const monthsDiff = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
        if (monthsDiff > 1) return "Nuevos Últimos 6 Meses";
        return "Nuevos Último Mes";
      }
      if (filters.ordering === "-rating_count") {
        if (filters.dates.includes("2025")) return "Más Votados 2025";
        if (filters.dates.includes("2024")) return "Más Votados 2024";
        if (filters.dates.includes("2023")) return "Más Votados 2023";
        if (filters.dates.includes("2010")) return "Top Década 2010";
        if (filters.dates.includes("2000")) return "Top Década 2000";
      }
    }
    if (filters.ordering === "-rating_count") return "Mejor Puntuación (Más Votados)";
    return "Mejor Puntuados en Metacritic";
  };

  return (
    <Container 
      maxW={{ base: "100%", md: "container.xl" }} 
      py={{ base: 6, md: 10 }} 
      px={{ base: 4, md: 0 }} 
      bg={bgColor}>
      {loading ? (
        <VStack spacing={4} py={10}>
          <Spinner size={{ base: "lg", md: "xl" }} color="cyan.400" />
          <Text fontSize={{ base: "md", md: "lg" }} color={textColor}>
            Cargando juegos...
          </Text>
        </VStack>
      ) : (
        <VStack spacing={{ base: 8, md: 10 }}>
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            textAlign="center"
            bgGradient={gradient}
            bgClip="text"
            //lineHeight="1.2"
            lineHeight={{ base: "1.4", md: "1.5" }} // Aumentado para evitar recorte
            mb={{ base: 6, md: 8 }} // Mantener espaciado con tarjetas
            py={2} // Padding vertical para más espacio interno
          >
            {getDynamicTitle()}
          </Heading>
          {games.length > 0 ? (
            <>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={{ base: 4, md: 6 }} w="full">
                {games.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </SimpleGrid>
              <Flex justify="space-between" align="center" w="full" mt={4}>
                <Button
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  isDisabled={!hasPrevious}
                  colorScheme="cyan"
                  variant="outline"
                  size={{ base: "sm", md: "md" }}
                  color={textColor}
                >
                  Anterior
                </Button>
                <Text fontSize={{ base: "sm", md: "md" }} color={textColor}>
                  Página {currentPage} de {totalPages}
                </Text>
                <Button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  isDisabled={!hasNext}
                  colorScheme="cyan"
                  variant="outline"
                  size={{ base: "sm", md: "md" }}
                  color={textColor}
                >
                  Siguiente
                </Button>
              </Flex>
            </>
          ) : (
            <VStack spacing={4} py={10}>
              <Icon as={WarningIcon} w={{ base: 8, md: 10 }} h={{ base: 8, md: 10 }} color="red.400" />
              <Text fontSize={{ base: "md", md: "lg" }} color={textColor} textAlign="center">
                No se encontraron resultados. Prueba con otro título o filtro.
              </Text>
            </VStack>
          )}
        </VStack>
      )}
    </Container>
  );
};

export default Home;