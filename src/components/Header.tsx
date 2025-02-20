import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(237, 237, 237);
  color: #0746fd;
  padding: 1rem;
  font-family: "Aileron Black", sans-serif;
  font-size: 1.5rem;
`;

const Logo = styled.h1`
  margin: 0;
`;

const MenuIcon = styled.span`
  font-size: 4rem;
  cursor: pointer;
  color: electricblue;

  &:hover {
    color: rgb(125, 129, 255);
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <MenuIcon>=</MenuIcon>
      <Logo>ATELIER NORD</Logo>
    </HeaderContainer>
  );
}
