import { Box, Image, Heading, Text, VStack, Badge, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Game } from "../types";
import { GiJoystick } from "react-icons/gi";

interface GameCardProps {
  game: Game;
}

const MotionLink = motion(Link);

/**
 * Responsive game card with clickable area, hover animation, and theme support.
 */
export const GameCard = ({ game }: GameCardProps) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const subTextColor = useColorModeValue("gray.600", "gray.500");
  const fallbackBg = useColorModeValue("gray.200", "gray.700");
  const shadowHover = useColorModeValue(
    "0 10px 20px rgba(0, 0, 0, 0.15)",
    "0 10px 20px rgba(0, 0, 0, 0.5)"
  );

  const metacriticColor = game.metacritic
    ? game.metacritic >= 80
      ? "green.500"
      : game.metacritic >= 60
      ? "yellow.500"
      : "red.500"
    : "gray.500";

  return (
    <Box
      as={MotionLink}
      to={`/game/${game.id}`}
      bg={bgColor}
      borderRadius="lg"
      overflow="hidden"
      whileHover={{ scale: 1.05, boxShadow: shadowHover }}
      transition="all 0.3s ease"//{{ duration: 0.3, ease: "easeInOut" }}
      _hover={{ cursor: "pointer" }}
      display="block"
    >
      {game.background_image ? (
        <Image
          src={game.background_image}
          alt={game.name}
          objectFit="cover"
          h={{ base: "150px", md: "200px" }}
          w="100%"
        />
      ) : (
        <Box
          h={{ base: "150px", md: "200px" }}
          w="100%"
          bg={fallbackBg}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <GiJoystick size={50} color="cyan.400" />
        </Box>
      )}
      <VStack p={{ base: 3, md: 4 }} align="start" spacing={2}>
        <Heading size={{ base: "sm", md: "md" }} color={textColor}>
          {game.name}
        </Heading>
        <Badge
          fontSize={{ base: "md", md: "lg" }}
          bg={metacriticColor}
          color="white"
          px={2}
          borderRadius="md"
        >
          {game.metacritic ?? "N/A"}
        </Badge>
        <Text color={subTextColor} fontSize={{ base: "xs", md: "sm" }}>
          {game.released?.split("-")[0] || "N/A"} •{" "}
          {game.genres?.[0]?.name || "N/A"} •{" "}
          {game.platforms?.[0]?.platform?.name || "N/A"}
        </Text>
      </VStack>
    </Box>
  );
};