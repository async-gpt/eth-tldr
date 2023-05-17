import HeaderLayout from "@/layouts/HeaderLayout";
import { Box, Heading, Container, Stack, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <HeaderLayout title="Homepage">
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight="85vh"
        gap={4}
        mb={8}
        w="full"
      >
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Home Page <br />
            </Heading>
          </Stack>
        </Container>
      </Flex>
    </HeaderLayout>
  );
}
