import styled from "styled-components";
import WeatherPoster from "../api/WeatherPoster";
import PosterCard from "../components/PosterCard";

const StyledHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #0746fd;
  margin: 20px 0;
  text-align: left;
  font-family: "Aileron Black", sans-serif;
`;

const YourComponent = () => {
  return (
    <div>
      <WeatherPoster />
      <StyledHeading>THE COLLECTIONS:</StyledHeading>
      <PosterCard
        image="src/assets/DisplayPosters/PrimaryDisplay2.png"
        title="THE SPECTRUM COLLECTION"
      />
    </div>
  );
};

export default YourComponent;
