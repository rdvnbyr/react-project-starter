import styled, { css } from 'styled-components';
import { memo } from 'react';

export const Padding = memo(function ({ children, ...props }) {
  return <StyledPadding {...props}>{children}</StyledPadding>;
});

export const Margin = memo(function ({ children, ...props }) {
  return <StyledMargin {...props}>{children}</StyledMargin>;
});

const StyledMargin = styled.div`
  margin: ${(props) => props.mt || 0} ${(props) => props.mr || 0}
    ${(props) => props.mb || 0} ${(props) => props.ml || 0};
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `};
  ${(props) =>
    props.my &&
    css`
      padding-top: ${props.my};
      padding-bottom: ${props.my};
    `};
  ${(props) =>
    props.mx &&
    css`
      padding-left: ${props.mx};
      padding-right: ${props.mx};
    `};
`;

const StyledPadding = styled.div`
  padding: ${(props) => props.pt || 0} ${(props) => props.pr || 0}
    ${(props) => props.pb || 0} ${(props) => props.pl || 0};
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `};
  ${(props) =>
    props.py &&
    css`
      padding-top: ${props.py};
      padding-bottom: ${props.py};
    `};
  ${(props) =>
    props.px &&
    css`
      padding-left: ${props.px};
      padding-right: ${props.px};
    `};
`;
