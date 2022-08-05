import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export default function Button({ children, ...props }) {
  if (props.href) {
    return (
      <Link to={props.href}>
        <StyledButton {...props}>{children}</StyledButton>
      </Link>
    );
  } else {
    return <StyledButton {...props}>{children}</StyledButton>;
  }
}

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.default.base};
  color: ${(props) => props.theme.colors.default.contrast};
  border-radius: ${(props) => props.theme.shape.borderRadius[props.radius] || '0'};
  padding: ${(props) => props.theme.units.padding[props.size || 'md']};
  font-size: ${(props) => props.theme.units.font.size[props.size] || 'inherit'};
  font-weight: ${(props) =>
    props.theme.units.font.weight[props.fw] || props.theme.units.font.weight.regular};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.default.dark};
    color: ${(props) => props.theme.colors.default.contrast};
  }
  &:active {
    transform: translateY(0.25rem);
  }
  ${(props) =>
    props.color &&
    !props.outlined &&
    !props.inverted &&
    !props.invertedOutlined &&
    css`
      background-color: ${(props) => props.theme.colors[props.color].base};
      color: ${(props) => props.theme.colors[props.color].contrast};
      border: ${(props) =>
        `${props.bw || '1px'} solid ${props.theme.colors[props.color].base}`};
      &:hover {
        background-color: ${(props) => props.theme.colors[props.color].dark};
        color: ${(props) => props.theme.colors[props.color].contrast};
        border: ${(props) =>
          `${props.bw || '1px'} solid ${props.theme.colors[props.color].dark}`};
      }
    `}
  ${(props) =>
    props.outlined &&
    props.color &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors[props.color].base};
      border: ${(props) =>
        `${props.bw || '1px'} solid ${props.theme.colors[props.color].base}`};
      ${(props) =>
        props.color === 'light' &&
        css`
          color: ${(props) => props.theme.colors[props.color].contrast};
        `}
      &:hover {
        background-color: ${(props) => props.theme.colors[props.color].base};
        color: ${(props) => props.theme.colors[props.color].contrast};
      }
    `}
    ${(props) =>
    props.inverted &&
    props.color &&
    css`
      background-color: ${(props) => props.theme.colors[props.color].contrast};
      color: ${(props) => props.theme.colors[props.color].base};
      border: 1px solid ${(props) => props.theme.colors[props.color].contrast};
      &:hover {
        background-color: ${(props) => props.theme.colors[props.color].light};
        color: ${(props) => props.theme.colors[props.color].dark};
        border: ${(props) =>
          `${props.bw || '1px'} solid ${props.theme.colors[props.color].contrast}`};
      }
    `}
  ${(props) =>
    props.invertedOutlined &&
    props.color &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors[props.color].base};
      border: 1px solid ${(props) => props.theme.colors[props.color].contrast};
      &:hover {
        background-color: ${(props) => props.theme.colors[props.color].contrast};
        color: ${(props) => props.theme.colors[props.color].base};
        border: ${(props) =>
          `${props.bw || '1px'} solid ${props.theme.colors[props.color].base}`};
      }
    `}
    ${(props) =>
    props.link &&
    css`
      background-color: transparent;
      border: none;
      padding: 0;
      color: ${(props) => props.theme.colors[props.color || 'default'].base};
      &:hover {
        text-decoration: underline;
        background-color: transparent;
        border: none;
        color: ${(props) => props.theme.colors[props.color || 'default'].base};
      }
    `}
  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
  ${(props) =>
    props.shape &&
    css`
      border-radius: ${(props) => props.theme.shape.borderRadius[props.shape] || '0'};
    `}
  ${(props) =>
    props.disabled &&
    css`
      background-color: ${(props) => props.theme.colors.gray[500]};
      color: ${(props) => props.theme.colors[props.color].gray[800]};
      border: ${(props) => `${props.bw || '1px'} solid ${props.theme.colors.gray[800]}`};
      &:hover {
        background-color: ${(props) => props.theme.colors.colors.gray[300]};
      }
    `}
`;
