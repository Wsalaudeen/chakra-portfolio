import React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useColorModeValue,
  extendTheme,
} from "@chakra-ui/react";

import { Global } from "@emotion/react";

// defining the custom fonts
const fonts = {
  heading: `'SUSE', sans-serif`,
  body: `'Open Sans', sans-serif`,
};

// extending the theme
const theme = extendTheme({ fonts });

// define the fonts component
const FontsComponent = () => (
  <Global
    styles={`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=SUSE:wght@100..800&display=swap');`}
  />
);

const Project = ({ title, description, link }) => (
  <Box borderWidth="1px" borderRadius="lg" p={4} _hover={{ shadow: "md" }}>
    <Heading size="md" mb={2}>
      {title}
    </Heading>
    <Text>{description}</Text>
    <Button as="a" href={link} target="_blank" colorScheme="blue">
      View Project
    </Button>
  </Box>
);

const Skill = ({ name }) => (
  <Box
    bg={useColorModeValue("gray.100", "gray.700")}
    px={3}
    py={1}
    borderRadius="full"
  >
    {name}
  </Box>
);

function Portfolio() {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  return (
    <ChakraProvider theme={theme}>
      <FontsComponent />
      <Box bg={bgColor} color={textColor} minHeight="100vh" py={8}>
        <VStack
          spacing={12}
          align="stretch"
          maxWidth="800px"
          margin="auto"
          px={4}
        >
          {/* About me section */}
          <Box>
            <Heading mb={4}>Olanrewaju / About Me</Heading>
            <Text>
              {" "}
              Hello! I'm a web developer passionate about creating beautiful and
              functional websites. With expertise in React.js and a keen eye for
              design, I strive to build user-friendly and responsive web
              applications.
            </Text>
          </Box>
          {/* Projects Section */}
          <Box>
            <Heading mb={4}>My Projects</Heading>
            <SimpleGrid columns={[1, null, 2]} spacing={4}>
              <Project
                title="careFinder"
                description="Carefinder is a simple tool that aims to help users find, export, and share hospitals within the region."
                link="https://the-care-finder.vercel.app"
              />
              <Project
                title="coinFlux"
                description="This project utilizes the CoinGecko API (a cryptocurrency API) to dynamically display coin prices, including the name, logo, current price, and the 24-hour price change"
                link="https://coin-flux-yfd8.vercel.app/"
              />
            </SimpleGrid>
          </Box>
          {/* Skills section */}

          <Box>
            <Heading mb={4}>Skills & Experience</Heading>
            <SimpleGrid columns={[2, 3, 4]} spacing={2}>
              <Skill name="React.js" />
              <Skill name="JavaScript" />
              <Skill name="HTML/CSS" />
              <Skill name="React.js" />
              <Skill name="Git" />
              <Skill name="Responsive Design" />
              <Skill name="web accessibility" />
              <Skill name="Tailwind css" />
              <Skill name="chakra UI" />
            </SimpleGrid>
          </Box>
          {/* contact form */}
          <Box>
            <Heading mb={4}>Contact Me</Heading>
            <form>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Your name" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="your.email@example.com" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea placeholder="Your message" />
                </FormControl>
                <Button type="submit" colorScheme="blue">
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default Portfolio;
