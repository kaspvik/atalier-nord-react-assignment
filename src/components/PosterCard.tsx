import { Link } from "react-router";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const PosterImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
`;

const PosterTitle = styled.h3`
  margin-top: 12px;
  font-size: 18px;
  font-family: "Aileron Black", sans-serif;
`;

interface PosterCardProps {
  image: string;
  title: string;
}

export default function PosterCard({ image, title }: PosterCardProps) {
  return (
    <Link to="/posters" style={{ textDecoration: "none", color: "inherit" }}>
      <Card>
        <PosterImage src={image} alt={title} />
        <PosterTitle>{title}</PosterTitle>
      </Card>
    </Link>
  );
}
