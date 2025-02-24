import { useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(190, 190, 190);
  color: #0746fd;
  padding: 1rem;
  font-family: "Aileron Black", sans-serif;
  font-size: 1.5rem;
  position: relative;
  border-radius: 40px 10px;
`;

const Logo = styled.h1`
  margin: 0;
`;

const MenuIcon = styled.span`
  font-size: 4rem;
  cursor: pointer;

  &:hover {
    color: rgb(123, 156, 255);
  }
`;

const Menu = styled.nav<{ open: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  width: 200px;
  display: ${({ open }) => (open ? "block" : "none")};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 8px;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  padding: 0.5rem 0;

  a {
    text-decoration: none;
    color: #0746fd;
    font-size: 1.2rem;

    &:hover {
      color: rgb(123, 156, 255);
    }
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>=</MenuIcon>
      <Logo>ATELIER NORD</Logo>
      <Menu open={isOpen}>
        <MenuList>
          <MenuItem>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Homepage
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/posters" onClick={() => setIsOpen(false)}>
              Posters
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </HeaderContainer>
  );
}
