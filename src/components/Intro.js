import styled from 'styled-components';
import bg from "../assets/media/images/arg-bg-1.jpg"

export default function Intro() {
  return (
    <StyledContainer>
      <StyledBg>
        <img src={bg} alt="intro-bg" />
      </StyledBg>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: 72vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 0.375rem 0.5rem;
  }
`;

const StyledBg = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
