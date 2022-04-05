import { FunctionComponent } from "react";
import useFetchApiData from "../hooks/useFetchWeatherData";
import { Flex, Spinner } from "@chakra-ui/react";
import WeatherCard from "./WeatherCard";
import { City } from "../types";

interface WeatherPanelProps {
  city: City;
}

const WeatherPanel: FunctionComponent<WeatherPanelProps> = ({ city }) => {
  const { data: fetchedWeatherData, isLoading } = useFetchApiData(city);
  console.log(fetchedWeatherData);
  if (isLoading) return <Spinner w="100%" />;
  return (
    <Flex
      w="100%"
      justify={"center"}
      align={"center"}
      borderRadius={"2xl"}
      bg="white"
      shadow={"xl"}
      overflow="hidden"
    >
      <WeatherCard fetchedWeatherData={fetchedWeatherData} />
    </Flex>
  );
};

export default WeatherPanel;
