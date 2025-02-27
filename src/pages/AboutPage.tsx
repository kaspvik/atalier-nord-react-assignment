import styled from "styled-components";

const AboutPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  background-color: #f4f4f4;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #333;
  max-width: 800px;
  line-height: 1.6;
  font-family: "Aileron Black", sans-serif;
  font-weight: 600;
  white-space: pre-line;
`;

const AboutPage = () => {
  return (
    <AboutPageWrapper>
      <AboutImage src="src/assets/Logos/logo.png" alt="About us" />
      <AboutText>
        WELCOME TO ATELIER NORD! WE ARE PASSIONATE ABOUT CREATING UNIQUE,
        ARTISTIC PIECES THAT INSPIRE CREATIVITY AND BEAUTY. OUR COLLECTIONS
        FEATURE VIBRANT COLORS, ORGANIC SHAPES, AND A TOUCH OF ELEGANCE THAT
        WILL TRANSFORM ANY SPACE. EXPLORE OUR COLLECTIONS AND DISCOVER THE ART
        THAT SPEAKS TO YOU.
      </AboutText>
    </AboutPageWrapper>
  );
};

export default AboutPage;
