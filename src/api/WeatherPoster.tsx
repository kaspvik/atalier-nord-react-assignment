import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const API_KEY = "91fa9dc15784519b1da1be601d109b69";
const CITY = "Gothenburg";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const StyledH2 = styled.h2`
  font-size: 34px;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
  font-family: "Aileron", sans-serif;
  white-space: pre-line;
`;

const StyledImage = styled.img`
  width: 900px;
  height: 700px; /* Anger höjden för att tvinga bilden att passa in */
  object-fit: cover; /* Detta beskär och skalar bilden för att fylla hela området */
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
`;

const WeatherPoster: React.FC = () => {
  const [poster, setPoster] = useState<string>("");
  const [headline, setHeadline] = useState<string>("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(API_URL);
        const temp = response.data.main.temp;

        console.log("Temperature:", temp);

        let selectedPoster = "";
        let selectedHeadline = "";

        if (temp < 10) {
          selectedPoster =
            "src/assets/PrimaryPosters/Display/PrimaryDisplay2.png";
          selectedHeadline = "IT'S COLD OUTSIDE!\n WARM IT UP WITH:";
        } else if (temp < 20) {
          selectedPoster =
            "src/assets/PrimaryPosters/Display/CandyDisplay2.png";
          selectedHeadline = "A COZY DAY CALLS FOR\n A BEAUTIFUL PIECE OF:";
        } else {
          selectedPoster =
            "src/assets/PrimaryPosters/Display/GlaucusDisplay2.png";
          selectedHeadline = "DOES THE ICE CREAM MELT?\n COOL IT DOWN WITH:";
        }

        console.log("Chosen poster:", selectedPoster);
        setPoster(selectedPoster);
        setHeadline(selectedHeadline);
      } catch (error) {
        console.error("Couldn't find weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <Container>
      <StyledH2>{headline}</StyledH2>
      {poster && (
        <StyledImage
          src={poster}
          alt="Poster recommendation based on the weather"
        />
      )}
    </Container>
  );
};

export default WeatherPoster;
