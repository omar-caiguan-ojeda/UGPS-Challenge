import { useState } from "react";
import {
  Box,
  Input,
  Select,
  Button,
  VStack,
  FormControl,
  FormLabel,
  useColorModeValue,
} from "@chakra-ui/react";

interface FiltersProps {
  onFilter: (filters: {
    search?: string;
    year?: string;
    genre?: string;
    platform?: string;
    tag?: string;
    developer?: string;
  }) => void;
}

/**
 * Component to handle game filtering and search with theme support.
 */
export const Filters = ({ onFilter }: FiltersProps) => {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const [tag] = useState("");
  const [developer] = useState("");
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const inputBg = useColorModeValue("gray.100", "gray.800");

  /** Applies the current filter values via the onFilter callback. */
  const handleSubmit = () => {
    onFilter({ search, year, genre, platform, tag, developer });
  };

  return (
    <Box bg={bgColor} p={5} borderRadius="lg" boxShadow="lg">
      <VStack spacing={4}>
        <FormControl>
          <FormLabel color={textColor}>Buscar</FormLabel>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Busca un juego..."
            bg={inputBg}
            color={textColor}
            _focus={{ borderColor: "cyan.400" }}
          />
        </FormControl>
        <FormControl>
          <FormLabel color={textColor}>Año</FormLabel>
          <Input
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Ej: 2023"
            bg={inputBg}
            color={textColor}
            type="number"
          />
        </FormControl>
        <FormControl>
          <FormLabel color={textColor}>Género</FormLabel>
          <Select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            bg={inputBg}
            color={textColor}
          >
            <option value="">Género</option>
            <option value="action">Acción</option>
            <option value="adventure">Aventura</option>
            <option value="rpg">RPG</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel color={textColor}>Plataforma</FormLabel>
          <Select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            bg={inputBg}
            color={textColor}
          >
            <option value="">Todas</option>
            <option value="4">PC</option>
            <option value="1">Xbox</option>
            <option value="18">PlayStation</option>
          </Select>
        </FormControl>
        <Button
          colorScheme="cyan"
          onClick={handleSubmit}
          w="full"
          _hover={{ transform: "scale(1.05)" }}
          transition="all 0.2s"
        >
          Filtrar
        </Button>
      </VStack>
    </Box>
  );
};