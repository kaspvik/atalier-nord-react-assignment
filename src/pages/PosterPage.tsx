import styled from "styled-components";
import { posters } from "../Data";

const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px; /* Ger luft på sidorna */
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center; /* Centrerad rubrik */
  color: #333;
  margin-bottom: 10px;
  font-family: "Aileron Black", sans-serif;
`;

const SubHeading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  font-family: "Aileron Black", sans-serif;
`;

const PosterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

const PosterRow = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  gap: 60px;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LargeImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 60px;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

const Description = styled.p`
  flex: 1;
  max-width: 50%;
  font-size: 30px;
  line-height: 1.6;
  text-align: left;
  font-weight: 700;
  font-family: "Aileron Black", sans-serif;

  @media (max-width: 1024px) {
    max-width: 60%;
    font-size: 25px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const FinalRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export default function PosterPage() {
  const descriptions = [
    "DISCOVER THE ELEGANCE OF CONTRAST AND UNITY IN SPECTRUM.",
    "SPECTRUM IS A COLLECTION THAT CELEBRATES THE POWER OF COLOR IN CONTEMPORARY ART.",
    "PERFECT FOR THOSE WHO APPRECIATE HOW COLOR TRANSFORMS A SPACE.",
    '"SPECTRUM" BRINGS DYNAMIC ENERGY AND CREATIVITY INTO ANY ROOM.',
  ];

  return (
    <MainContainer>
      <Heading>THE SPECTRUM COLLECTION</Heading>
      <SubHeading>WHERE TWO COLORS MEET, A NEW BEAUTY EMERGES</SubHeading>

      {/* Stor bild högst upp */}
      <LargeImage
        src="src/assets/PrimaryPosters/Posters/SpectrumDisplay.png"
        alt="Display image for Spectrum"
      />

      <PosterContainer>
        {/* Fyra poster-rader med text */}
        {posters.slice(0, 4).map((poster, index) => (
          <PosterRow key={poster.id} reverse={index % 2 === 1}>
            <StyledImage src={poster.image} alt={poster.title} />
            <Description>{descriptions[index]}</Description>
          </PosterRow>
        ))}
      </PosterContainer>

      {/* Avslutande två bilder bredvid varandra */}
      <FinalRow>
        {posters.slice(4, 6).map((poster) => (
          <StyledImage key={poster.id} src={poster.image} alt={poster.title} />
        ))}
      </FinalRow>
    </MainContainer>
  );
}
