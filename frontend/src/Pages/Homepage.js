import React from "react";
import { Container, Box, Text, Tabs, TabList, TabPanel, Tab, TabPanels } from "@chakra-ui/react";
import Signup from "../components/Authenticaton/Signup";
import Login from "../components/Authenticaton/Login";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

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
               <Login/>
            </TabPanel>
            <TabPanel>
               <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
