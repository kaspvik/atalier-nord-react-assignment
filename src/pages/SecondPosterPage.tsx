import styled from "styled-components";
import { posters } from "../Data";

const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f4f4f4;
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
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
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
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

const FinalHeading = styled.h2`
  font-size: 30px;
  text-align: center;
  margin-top: 40px;
  font-family: "Aileron Black", sans-serif;
  color: #333;
`;

const HighlightedLink = styled.a`
  color: #f16521;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export default function PosterPage() {
  const descriptions = [
    "IMMERSE YOURSELF IN THE SERENE BEAUTY OF NATURE WITH THE BOTANICAL COLLECTION.",
    "EACH PIECE CAPTURES THE DELICATE BALANCE BETWEEN VIBRANT LIFE AND TRANQUIL ELEGANCE.",
    "PERFECT FOR THOSE WHO FIND INSPIRATION IN THE ORGANIC FORMS OF THE NATURAL WORLD.",
    '"THE BOTANICAL COLLECTION’ BRINGS A TOUCH OF EVERLASTING BLOOM TO ANY SPACE.',
  ];

  return (
    <MainContainer>
      <Heading>THE BOTANICAL COLLECTION</Heading>
      <SubHeading>WHERE NATURE MEETS ART</SubHeading>

      {/* Stor bild högst upp */}
      <LargeImage
        src="/assets/BotanicalPosters/Display/SunFlowerDisplay.png"
        alt="Display image for the Botanical collection"
      />

      <PosterContainer>
        {/* Fyra poster-rader med text */}
        {posters.slice(6, 10).map((poster, index) => (
          <PosterRow key={poster.id} reverse={index % 2 === 1}>
            <StyledImage src={poster.image} alt={poster.title} loading="lazy" />
            <Description>{descriptions[index]}</Description>
          </PosterRow>
        ))}
      </PosterContainer>

      {/* Avslutande två bilder bredvid varandra */}
      <FinalRow>
        {posters.slice(10, 12).map((poster) => (
          <StyledImage
            key={poster.id}
            src={poster.image}
            alt={poster.title}
            loading="lazy"
          />
        ))}
      </FinalRow>
      <FinalHeading>
        SOON AVAILABLE AT{" "}
        <HighlightedLink
          href="https://ateliernordart.etsy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ETSY.COM
        </HighlightedLink>
      </FinalHeading>
    </MainContainer>
  );
}
