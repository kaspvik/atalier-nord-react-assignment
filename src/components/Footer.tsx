import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  padding: 50px 20px;
  max-width: 1200px;
  margin: 1rem auto 0;
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Logo src="src/assets/AtelierNordLogo.png" alt="Atelier Nord Logo" />
    </FooterContainer>
  );
}
