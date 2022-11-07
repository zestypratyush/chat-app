import React from "react";
import { Container, Box, Text, Tabs, TabList, TabPanel, Tab, TabPanels } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Nunito" color="#4e8497">
          {" "}
          Chatter{" "}
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded"  >
          <TabList mb="1em" >
            <Tab color="#4e8497" width="50%">Login</Tab>
            <Tab color="#4e8497" width="50%">Sign-up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
               {/* {Login} */}
            </TabPanel>
            <TabPanel>
               {/* {Sign-up} */}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
