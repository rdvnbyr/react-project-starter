import styled from 'styled-components';
import { Margin, Padding } from './partials';
import { useWindowResizeHandler } from '../hooks/useWindowResizeHandler';

export default function Welcome() {
  const pageWidth = useWindowResizeHandler();
  return (
    <StyledWelcomePage>
      <Margin my="1vh" />
      <Padding padding={pageWidth >= 768 ? '3vh 20% 3vh 0' : '3vh'}></Padding>
      <Margin my="1vh" />
    </StyledWelcomePage>
  );
}
const StyledWelcomePage = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;