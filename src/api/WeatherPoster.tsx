import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = "91fa9dc15784519b1da1be601d109b69"; // Ersätt med din OpenWeather API-nyckel
const CITY = "Gothenburg"; // Kan ändras till användarens plats
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

const WeatherPoster: React.FC = () => {
  const [poster, setPoster] = useState<string>("");
  const [headline, setHeadline] = useState<string>("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(API_URL);
        const temp = response.data.main.temp;

        console.log("Temperatur:", temp);

        let selectedPoster = "/assets/default-poster.png";
        let selectedHeadline = "Enjoy this artwork!"; // Standardrubrik

        if (temp < 5) {
          selectedPoster = "src/assets/DisplayPosters/PrimaryDisplay2.png";
          selectedHeadline = "It's cold outside, you better warm it up with:";
        } else if (temp < 20) {
          selectedPoster = "src/assets/DisplayPosters/CandyDisplay2.png";
          selectedHeadline = "A cozy day calls for a beautiful piece of:";
        } else {
          selectedPoster = "src/assets/DisplayPosters/GlaucusDisplay2.png";
          selectedHeadline = "Does the ice cream melt? Cool it down with:";
        }

        console.log("Vald poster:", selectedPoster);
        setPoster(selectedPoster);
        setHeadline(selectedHeadline);
      } catch (error) {
        console.error("Kunde inte hämta väderdata:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <h2>{headline}</h2>
      {poster && (
        <img
          src={poster}
          alt="Rekommenderad poster"
          style={{ width: "300px", borderRadius: "10px" }}
        />
      )}
    </div>
  );
};

export default WeatherPoster;
