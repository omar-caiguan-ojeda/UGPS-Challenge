import { useEffect, useState } from "react";
import { fetchGameDetails } from "../api/api";
import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  Badge,
  SimpleGrid,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Game } from "../types";
import { motion } from "framer-motion";

/**
 * Responsive page displaying detailed information about a specific game.
 * Adapts to light and dark themes with dynamic styling.
 */
const GameDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const subTextColor = useColorModeValue("gray.600", "gray.300");

  useEffect(() => {
    if (id) {
      fetchGameDetails(id)
        .then((data) => {
          setGame(data);
          window.scrollTo(0, 0);
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  if (!game) return <Text textAlign="center" py={10} color={textColor}>Cargando...</Text>;

  return (
    <Container maxW={{ base: "100%", md: "container.lg" }} py={{ base: 6, md: 10 }} px={{ base: 4, md: 0 }} bg={bgColor}>
      <Box
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition="all 0.5s ease"//{{ duration: 0.5, ease: "easeInOut" }}
      >
        <VStack spacing={{ base: 6, md: 8 }} align="start">
          <Image
            src={game.background_image}
            alt={game.name}
            borderRadius="lg"
            w="full"
            maxH={{ base: "250px", md: "400px" }}
            objectFit="cover"
            boxShadow="lg"
          />
          <Heading
            as="h1"
            size={{ base: "lg", md: "2xl" }}
            color={textColor}
            lineHeight="1.2"
          >
            {game.name}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 3, md: 4 }}>
            <VStack align="start" spacing={{ base: 2, md: 2 }}>
              <Badge fontSize={{ base: "sm", md: "md" }} colorScheme="green">
                Metacritic: {game.metacritic ?? "N/A"}
              </Badge>
              <Text color={subTextColor} fontSize={{ base: "sm", md: "md" }}>
                Lanzamiento: {game.released}
              </Text>
              <Text color={subTextColor} fontSize={{ base: "sm", md: "md" }}>
                Géneros: {game.genres.map((g) => g.name).join(", ")}
              </Text>
              <Text color={subTextColor} fontSize={{ base: "sm", md: "md" }}>
                Plataformas: {game.platforms.map((p) => p.platform.name).join(", ")}
              </Text>
              <Text color={subTextColor} fontSize={{ base: "sm", md: "md" }}>
                Desarrolladores: {game.developers.map((d) => d.name).join(", ")}
              </Text>
            </VStack>
            <Text color={textColor} fontSize={{ base: "sm", md: "md" }}>
              {game.description_raw}
            </Text>
          </SimpleGrid>
        </VStack>
      </Box>
    </Container>
  );
};

export default GameDetails;