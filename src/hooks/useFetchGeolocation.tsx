import axios from "axios";
import { useQuery } from "react-query";

const useFetchGeolocation = (cityName: string) => {
  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const result = useQuery(
    [cityName],
    () =>
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}&limit=1`,
          {}
        )
        .then((r) => r.data),
    {
      refetchInterval: 1000 * 60 * 2,
    }
  );
  return result;
};

export default useFetchGeolocation;
