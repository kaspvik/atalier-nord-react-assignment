import styled from "styled-components";
import WeatherPoster from "../api/WeatherPoster";
import PosterCard from "../components/PosterCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #0746fd;
  margin: 20px 0;
  text-align: left;
  font-family: "Aileron Black", sans-serif;
`;

const PosterContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const YourComponent = () => {
  return (
    <Wrapper>
      <WeatherPoster />
      <StyledHeading>THE COLLECTIONS:</StyledHeading>
      <PosterContainer>
        <PosterCard
          image="src/assets/PrimaryPosters/Display/PrimaryDisplay2.png"
          title="THE SPECTRUM COLLECTION"
        />
        <PosterCard
          image="src/assets/BotanicalPosters/Posters/BlueVine.png"
          title="THE BOTANICAL COLLECTION"
        />
      </PosterContainer>
    </Wrapper>
  );
};

export default YourComponent;
