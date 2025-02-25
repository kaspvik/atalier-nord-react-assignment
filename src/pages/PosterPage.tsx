import styled from "styled-components";
import PosterCard from "../components/PosterCard";
import { posters } from "../Data";

const Heading = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
  color: #333;
  margin-bottom: 10px;
  font-family: "Aileron Black", sans-serif;
`;

const SubHeading = styled.h3`
  font-size: 20px;
  font-style: bold;
  text-align: left;
  color: #666;
  margin-bottom: 20px;
  font-family: "Aileron Black", sans-serif;
`;

const Description = styled.p`
  text-align: left;
  font-family: "Aileron Black", sans-serif;
`;

export default function PosterPage() {
  return (
    <main>
      <Heading>THE SPECTRUM COLLECTION</Heading>
      <SubHeading>WHERE TWO COLORS MEET, A NEW BEAUTY EMERGES</SubHeading>
      <Description>
        DISCOVER THE ELEGANCE OF CONTRAST AND UNITY IN SPECTRUM. SPECTRUM IS A
        COLLECTION THAT CELEBRATES THE POWER OF COLOR IN CONTEMPORARY ART.
        PERFECT FOR THOSE WHO APPRECIATE HOW COLOR TRANSFORMS A SPACE,
        "SPECTRUM" BRINGS DYNAMIC ENERGY AND CREATIVITY INTO ANY ROOM.
      </Description>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {posters.map((poster) => (
          <PosterCard
            key={poster.id}
            image={poster.image}
            title={poster.title}
          />
        ))}
      </div>
    </main>
  );
}
