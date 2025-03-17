// // src/components/Footer.tsx
// import { Box, Flex, Text, Link, useColorModeValue } from "@chakra-ui/react";
// import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

// /**
//  * Responsive footer with useful links and info.
//  */
// export const Footer = () => {
//   const bgColor = useColorModeValue("gray.200", "gray.900");

//   return (
//     <Box as="footer" bg={bgColor} py={{ base: 4, md: 6 }} px={{ base: 4, md: 6 }}>
//       <Flex
//         direction={{ base: "column", md: "row" }}
//         justify="space-between"
//         align={{ base: "center", md: "start" }}
//         maxW="container.xl"
//         mx="auto"
//         textAlign={{ base: "center", md: "left" }}
//       >
//         <Box mb={{ base: 4, md: 0 }}>
//           <Text fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
//             GameHub
//           </Text>
//           <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
//             © 2025 GameHub. Todos los derechos reservados.
//           </Text>
//         </Box>
//         <Flex direction={{ base: "column", md: "row" }} gap={{ base: 2, md: 6 }}>
//           <Link href="#" fontSize={{ base: "xs", md: "sm" }} color="cyan.400">
//             Términos de Servicio
//           </Link>
//           <Link href="#" fontSize={{ base: "xs", md: "sm" }} color="cyan.400">
//             Política de Privacidad
//           </Link>
//           <Link href="#" fontSize={{ base: "xs", md: "sm" }} color="cyan.400">
//             Contacto
//           </Link>
//         </Flex>
//         <Flex gap={4}>
//           <Link href="https://github.com" isExternal>
//             <FaGithub size={20} />
//           </Link>
//           <Link href="https://twitter.com" isExternal>
//             <FaTwitter size={20} />
//           </Link>
//           <Link href="mailto:support@gamehub.com">
//             <FaEnvelope size={20} />
//           </Link>
//         </Flex>
//       </Flex>
//     </Box>
//   );
// };


// src/components/Footer.tsx
import { Box, Flex, Text, Link, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

/**
 * Responsive footer with useful links and social media icons.
 * Adapts to light and dark themes.
 */
export const Footer = () => {
  const bgColor = useColorModeValue("gray.200", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.500");
  const linkColor = useColorModeValue("cyan.500", "cyan.400");

  return (
    <Box as="footer" bg={bgColor} py={{ base: 4, md: 6 }} px={{ base: 4, md: 6 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "center", md: "start" }}
        maxW="container.xl"
        mx="auto"
        textAlign={{ base: "center", md: "left" }}
      >
        <Box mb={{ base: 4, md: 0 }}>
          <Text fontSize={{ base: "sm", md: "md" }} fontWeight="bold" color={textColor}>
            GameHub
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }} color={textColor}>
            © 2025 GameHub. Todos los derechos reservados.
          </Text>
        </Box>
        <Flex direction={{ base: "column", md: "row" }} gap={{ base: 2, md: 6 }}>
          <Link href="#" fontSize={{ base: "xs", md: "sm" }} color={linkColor}>
            Términos de Servicio
          </Link>
          <Link href="#" fontSize={{ base: "xs", md: "sm" }} color={linkColor}>
            Política de Privacidad
          </Link>
          <Link href="#" fontSize={{ base: "xs", md: "sm" }} color={linkColor}>
            Contacto
          </Link>
        </Flex>
        <Flex gap={4}>
          <Link href="https://github.com" isExternal color={linkColor}>
            <FaGithub size={20} />
          </Link>
          <Link href="https://twitter.com" isExternal color={linkColor}>
            <FaTwitter size={20} />
          </Link>
          <Link href="mailto:support@gamehub.com" color={linkColor}>
            <FaEnvelope size={20} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};