import { memo } from 'react';
import styled from 'styled-components';

export const Text = memo(function (props) {
  return <StyledText {...props}>{props.children}</StyledText>;
});

const StyledText = styled.div`
  font-size: 1.25rem;
  font-weight: normal;
  color: #000;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.05rem;
  a {
    color: ${(props) => props.theme.colors[props.color || 'primary'].base};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
