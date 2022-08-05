import { memo } from 'react';
import styled from 'styled-components';

export const Container = memo(function (props) {
  return <StyledContainer>{props.children}</StyledContainer>;
});
const StyledContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20vw 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    padding-right: 2%;
  }
`;
