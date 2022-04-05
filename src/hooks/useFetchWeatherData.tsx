import axios from "axios";
import { useQuery } from "react-query";
import { City } from "../types";

const useFetchWeatherData = (city: City) => {
  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const result = useQuery(
    [city],
    () =>
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&appid=08313567211c1552f840ee92747c9a9e&units=metric`,
          {}
        )
        .then((r) => r.data),
    {
      refetchInterval: 1000 * 60,
    }
  );
  return result;
};

export default useFetchWeatherData;
