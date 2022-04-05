import { Flex, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { Daily, WeatherAPIResponse } from "../types";

const MILLISECONDS_IN_ONE_SECOND = 1000;

interface WeatherCardProps {
  fetchedWeatherData: WeatherAPIResponse;
}

const WeatherCard: FunctionComponent<WeatherCardProps> = ({
  fetchedWeatherData,
}) => {
  return (
    <Flex w="100%">
      <Flex w="100%" justify={"center"}>
        <Grid
          gap={["2"]}
          w="100%"
          m={["0.3rem"]}
          templateRows={["repeat(6, 1fr)", "repeat(3, 1fr)"]}
          templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]}
        >
          <GridItem rowSpan={2} colSpan={4} h="100%">
            <Flex
              w="100%"
              h="100%"
              justify={"center"}
              align="center"
              bg={"#EEF6FB"}
              borderTopRadius={["2xl"]}
              direction="column"
              p="1rem"
            >
              <Text fontSize={"3rem"} fontWeight={["light"]}>
                Today
              </Text>
              <Flex justify={"center"} align="center">
                <Image
                  src={` http://openweathermap.org/img/wn/${fetchedWeatherData?.current?.weather[0]?.icon}@2x.png`}
                  alt="Image unavailable"
                ></Image>
                <Flex direction={"column"}>
                  <Text fontSize={"2rem"} fontWeight="500">
                    {fetchedWeatherData?.current?.temp}°
                  </Text>
                  <Text>{fetchedWeatherData?.current?.weather[0]?.main}</Text>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>
          {fetchedWeatherData?.daily?.slice(0, 4).map((dayWeather: Daily) => {
            const fetchedDayWeatherDayOfTheWeek = new Date(
              dayWeather.dt * MILLISECONDS_IN_ONE_SECOND
            )
              .toDateString()
              .slice(0, 3);

            return (
              <GridItem rowSpan={1} colSpan={[4, 4, 2, 1]}>
                <Flex
                  w="100%"
                  justify={"center"}
                  align="center"
                  bg={"#EEF6FB"}
                  direction="column"
                  p="1rem"
                  borderRadius={"2xl"}
                >
                  <Text fontSize={"2rem"} fontWeight={"light"}>
                    {fetchedDayWeatherDayOfTheWeek}
                  </Text>
                  <Image
                    src={` http://openweathermap.org/img/wn/${dayWeather.weather[0]?.icon}@2x.png`}
                    alt="Image unavailable"
                  ></Image>
                  <Text fontSize={"1.5rem"} fontWeight="500">
                    {dayWeather.temp.day}°
                  </Text>
                </Flex>
              </GridItem>
            );
          })}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default WeatherCard;
