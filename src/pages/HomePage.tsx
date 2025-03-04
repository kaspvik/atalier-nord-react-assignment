import styled from "styled-components";
import WeatherPoster from "../api/WeatherPoster";
import PosterCard from "../components/PosterCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 20px;
  background-color: #f4f4f4;
`;

const StyledHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #0746fd;
  margin: 20px 0;
  text-align: center;
  font-family: "Aileron Black", sans-serif;
`;

const PosterContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const YourComponent = () => {
  return (
    <Wrapper>
      <WeatherPoster />
      <StyledHeading>THE COLLECTIONS:</StyledHeading>
      <PosterContainer>
        <PosterCard
          image="public/assets/PrimaryPosters/Display/PrimaryDisplay2.png"
          title="THE SPECTRUM COLLECTION"
          link="/Spectrum"
        />

        <PosterCard
          image="public/assets/BotanicalPosters/Posters/BlueVine.png"
          title="THE BOTANICAL COLLECTION"
          link="/Botanical"
        />
      </PosterContainer>
    </Wrapper>
  );
};

export default YourComponent;
