// src/components/Sidebar.tsx
// import { Box, VStack, Heading, Button, useColorModeValue } from "@chakra-ui/react";
// import { useFilters } from "../context/FilterContext";
// import { useNavigate } from "react-router-dom";

// export const Sidebar = () => {
//   const { setFilters } = useFilters();
//   const navigate = useNavigate();
//   const bgColor = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("gray.800", "gray.100");
//   const borderColor = useColorModeValue("gray.200", "gray.700");

//   const applyFilter = (filter: Record<string, string>) => {
//     console.log("Filtros aplicados desde Sidebar:", filter);
//     setFilters(filter);
//     navigate("/");
//   };

//   const today = new Date();
//   const oneMonthAgo = new Date(today);
//   oneMonthAgo.setMonth(today.getMonth() - 1);
//   const sixMonthsAgo = new Date(today);
//   sixMonthsAgo.setMonth(today.getMonth() - 6);
//   const formatDate = (date: Date) => date.toISOString().split("T")[0];

//   return (
//     <Box
//       as="aside"
//       w={{ base: "full", md: "250px" }}
//       bg={bgColor}
//       p={4}
//       position={{ base: "static", md: "fixed" }}
//       top={{ md: "70px" }}
//       h={{ base: "auto", md: "calc(100vh - 70px - 80px)" }}
//       overflowY="auto"
//       zIndex={5}
//       borderRight={{ md: "1px solid" }}
//       borderColor={borderColor}
//     >
//       <VStack align="start" spacing={6}>
//         <Heading size="md" color="cyan.400">
//           Explora
//         </Heading>

//         <VStack align="start" spacing={2}>
//           <Heading size="sm" color={textColor}>Lo Más Votado</Heading>
//           <Button
//             variant="link"
//             color={textColor}
//             onClick={() => applyFilter({ ordering: "-rating_count", dates: "2025-01-01,2025-12-31" })}
//           >
//             2025
//           </Button>
//           <Button
//             variant="link"
//             color={textColor}
//             onClick={() => applyFilter({ ordering: "-rating_count", dates: "2024-01-01,2024-12-31" })}
//           >
//             2024
//           </Button>
//           <Button
//             variant="link"
//             color={textColor}
//             onClick={() => applyFilter({ ordering: "-rating_count", dates: "2023-01-01,2023-12-31" })}
//           >
//             2023
//           </Button>
//         </VStack>

//         <VStack align="start" spacing={2}>
//           <Heading size="sm" color={textColor}>Top Juegos</Heading>
//           <Button variant="link" color={textColor} onClick={() => applyFilter({ ordering: "-rating_count" })}>
//             Mejor Puntuación
//           </Button>
//           <Button
//             variant="link"
//             color={textColor}
//             onClick={() => applyFilter({ ordering: "-rating_count", dates: "2010-01-01,2019-12-31" })}
//           >
//             Década 2010
//           </Button>
//           <Button
//             variant="link"
//             color={textColor}
//             onClick={() => applyFilter({ ordering: "-rating_count", dates: "2000-01-01,2009-12-31" })}
//           >
//             Década 2000
//           </Button>
//         </VStack>

//         <VStack align="start" spacing={2}>
//           <Heading size="sm" color={textColor}>Novedades y Clásicos</Heading>
//           <Button
//             variant="link"
//             color={textColor}
//             onClick={() =>
//               applyFilter({
//                 ordering: "-added",
//                 dates: `${formatDate(oneMonthAgo)},${formatDate(today)}`,
//               })
//             }
//           >
//             Nuevos Último Mes
//           </Button>
//           <Button
//             variant="link"
//             color={textColor}
//             onClick={() =>
//               applyFilter({
//                 ordering: "-added",
//                 dates: `${formatDate(sixMonthsAgo)},${formatDate(today)}`,
//               })
//             }
//           >
//             Nuevos Últimos 6 Meses
//           </Button>
//           <Button
//             variant="link"
//             color={textColor}
//             onClick={() => applyFilter({ ordering: "-rating_count", dates: "1885-01-01,2000-12-31" })}
//           >
//             Clásicos
//           </Button>
//         </VStack>
//       </VStack>
//     </Box>
//   );
// };



// src/components/Sidebar.tsx
import { Box, VStack, Heading, Button, useColorModeValue } from "@chakra-ui/react";
import { useFilters } from "../context/FilterContext";
import { useNavigate } from "react-router-dom";

/**
 * Sidebar component with filter options for game exploration.
 * Fixed on desktop, adapts to light/dark themes.
 */
export const Sidebar = () => {
  const { setFilters } = useFilters();
  const navigate = useNavigate();
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  /**
   * Applies a filter and navigates to the home page.
   * @param filter - The filter object to apply.
   */
  const applyFilter = (filter: Record<string, string>) => {
    console.log("Filtros aplicados desde Sidebar:", filter);
    setFilters(filter);
    navigate("/");
  };

  const today = new Date();
  const oneMonthAgo = new Date(today);
  oneMonthAgo.setMonth(today.getMonth() - 1);
  const sixMonthsAgo = new Date(today);
  sixMonthsAgo.setMonth(today.getMonth() - 6);
  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  return (
    <Box
      as="aside"
      w={{ base: "full", md: "250px" }}
      bg={bgColor}
      p={4}
      position={{ base: "static", md: "fixed" }}
      top={{ md: "70px" }}
      h={{ base: "auto", md: "calc(100vh - 70px - 80px)" }}
      overflowY="auto"
      zIndex={5}
      borderRight={{ md: "1px solid" }}
      borderColor={borderColor}
    >
      <VStack align="start" spacing={6}>
        <Heading size="md" color="cyan.400">
          Explora
        </Heading>

        <VStack align="start" spacing={2}>
          <Heading size="sm" color={textColor}>Lo Más Votado</Heading>
          <Button
            variant="link"
            color={textColor}
            onClick={() => applyFilter({ ordering: "-rating_count", dates: "2025-01-01,2025-12-31" })}
          >
            2025
          </Button>
          <Button
            variant="link"
            color={textColor}
            onClick={() => applyFilter({ ordering: "-rating_count", dates: "2024-01-01,2024-12-31" })}
          >
            2024
          </Button>
          <Button
            variant="link"
            color={textColor}
            onClick={() => applyFilter({ ordering: "-rating_count", dates: "2023-01-01,2023-12-31" })}
          >
            2023
          </Button>
        </VStack>

        <VStack align="start" spacing={2}>
          <Heading size="sm" color={textColor}>Top Juegos</Heading>
          <Button variant="link" color={textColor} onClick={() => applyFilter({ ordering: "-rating_count" })}>
            Mejor Puntuación
          </Button>
          <Button
            variant="link"
            color={textColor}
            onClick={() => applyFilter({ ordering: "-rating_count", dates: "2010-01-01,2019-12-31" })}
          >
            Década 2010
          </Button>
          <Button
            variant="link"
            color={textColor}
            onClick={() => applyFilter({ ordering: "-rating_count", dates: "2000-01-01,2009-12-31" })}
          >
            Década 2000
          </Button>
        </VStack>

        <VStack align="start" spacing={2}>
          <Heading size="sm" color={textColor}>Novedades y Clásicos</Heading>
          <Button
            variant="link"
            color={textColor}
            onClick={() =>
              applyFilter({
                ordering: "-added",
                dates: `${formatDate(oneMonthAgo)},${formatDate(today)}`,
              })
            }
          >
            Nuevos Último Mes
          </Button>
          <Button
            variant="link"
            color={textColor}
            onClick={() =>
              applyFilter({
                ordering: "-added",
                dates: `${formatDate(sixMonthsAgo)},${formatDate(today)}`,
              })
            }
          >
            Nuevos Últimos 6 Meses
          </Button>
          <Button
            variant="link"
            color={textColor}
            onClick={() => applyFilter({ ordering: "-rating_count", dates: "1885-01-01,2000-12-31" })}
          >
            Clásicos
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};