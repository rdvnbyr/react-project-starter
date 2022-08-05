import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/media/images/argutus-logo.png';

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledHeaderLogo>
          <img src={logo} alt="logo" />
        </StyledHeaderLogo>
        <StyledHeaderLinks>
          <StyledHeaderLink to="/">Home</StyledHeaderLink>
          <StyledHeaderLink to="/about">About us</StyledHeaderLink>
          <StyledHeaderLink to="/services">Services</StyledHeaderLink>
          <StyledHeaderLink to="/contact">Contact</StyledHeaderLink>
        </StyledHeaderLinks>
      </StyledHeaderContainer>
    </StyledHeader>
  );
}

const StyledHeaderContainer = styled.div`
  width: 100%;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 0.375rem 0.5rem;
  }
`;

const StyledHeaderLogo = styled.div`
  width: 12rem;
  max-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 0.5rem;
  }
`;

const StyledHeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 0.5rem;
  }
`;

const StyledHeaderLink = styled(Link)`
  color: #000;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  margin-left: 2rem;
  &:hover {
    color: gray;
  }
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
const StyledHeader = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  padding: 0.5rem 2rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;

`;
