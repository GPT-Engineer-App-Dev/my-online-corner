import { Container, VStack, Box, Heading, Text, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Introduction Section */}
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Personal Website</Heading>
          <Text fontSize="lg">Hi, I'm [Your Name], a passionate web developer.</Text>
        </Box>

        {/* Portfolio Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>Portfolio</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Project 1</Heading>
              <Text mt={4}>Description of project 1.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Project 2</Heading>
              <Text mt={4}>Description of project 2.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Project 3</Heading>
              <Text mt={4}>Description of project 3.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box textAlign="center" py={10}>
          <Heading as="h2" size="xl" mb={4}>Contact Me</Heading>
          <Text fontSize="lg" mb={4}>Feel free to reach out to me via the following platforms:</Text>
          <HStack spacing={4} justify="center">
            <IconButton as="a" href="https://github.com" aria-label="GitHub" icon={<FaGithub />} size="lg" />
            <IconButton as="a" href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            <IconButton as="a" href="mailto:your-email@example.com" aria-label="Email" icon={<FaEnvelope />} size="lg" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;