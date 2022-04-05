import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import WeatherPanel from "../components/WeatherPanel";
import { City } from "../types";

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const citiesObjects = [
    { name: "OTTAWA", lat: 45.4215, lon: 75.6972 },
    { name: "MOSCOW", lat: 55.7558, lon: 37.6173 },
    { name: "TOKYO", lat: 35.6762, lon: 139.6503 },
  ]; // hardcoded because the API needs a pro subscription and they do offer geolocation for free, but its 1 city per call.

  return (
    <Box w="100%">
      <Flex w="100%" justify={"center"}>
        <Flex w={{ sm: "100%", md: "100%", lg: "80%", xl: "60%" }}>
          <Tabs isFitted variant="unstyled" py="1.5rem" w="100%">
            <TabList>
              {citiesObjects.map((city: City) => (
                <Tab
                  _selected={{ color: "blue.300", fontWeight: "bold" }}
                  fontSize={["2rem"]}
                  fontWeight={["light"]}
                  _focus={{ outline: "none" }}
                >
                  {city.name}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {citiesObjects.map((city: City) => (
                <TabPanel>
                  <WeatherPanel city={city} />
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;
