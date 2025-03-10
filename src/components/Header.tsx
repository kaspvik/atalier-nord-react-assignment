import { useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e4e4e4;
  color: #0746fd;
  padding: 50px 20px;
  font-family: "Aileron Black", sans-serif;
  font-size: 1.5rem;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 20px 20px 0px 0px;
`;

const Logo = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  font-size: 3rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const MenuIcon = styled.span`
  font-size: 2.5rem;
  cursor: pointer;
  position: absolute;
  padding: 10px;
  left: 0;

  &:hover {
    color: rgb(123, 156, 255);
  }
`;

const Menu = styled.nav<{ open: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  width: 320px;
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
  padding: 1rem 0;

  a {
    text-decoration: none;
    color: #0746fd;
    font-size: 1.5rem;
    font-weight: 600;

    &:hover {
      color: rgb(123, 156, 255);
    }
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>☰</MenuIcon>
      <Logo>ATELIER NORD</Logo>
      <Menu open={isOpen}>
        <MenuList>
          <MenuItem>
            <Link to="/" onClick={() => setIsOpen(false)}>
              HOMEPAGE
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/Spectrum" onClick={() => setIsOpen(false)}>
              SPECTRUM COLLECTION
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/Botanical" onClick={() => setIsOpen(false)}>
              BOTANICAL COLLECTION
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/About" onClick={() => setIsOpen(false)}>
              ABOUT US
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </HeaderContainer>
  );
}
