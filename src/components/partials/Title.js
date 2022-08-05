import { memo } from 'react';
import styled from 'styled-components';

export const Title = memo(function ({ children, ...props }) {
  return (
    <>
      <StyledBorder {...props} />
      <StyledH1 {...props}>{children}</StyledH1>
    </>
  );
});

const StyledBorder = styled.div`
  border-top: 0.35rem solid
    ${(props) => props.theme.colors[props.color || 'primary'].base};
  text-align: end;
  align-self: center;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors[props.color || 'primary'].base};
  text-align: left;
  letter-spacing: 0.05rem;
`;
