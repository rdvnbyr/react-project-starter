import styled, { css } from 'styled-components';

export function FormControl({ children, label, feedback = null, ...props }) {
  return (
    <StyledFormControlContainer>
      {label && <StyledFormControlLabel {...props}>{label}</StyledFormControlLabel>}
      <StyledFormControlInput {...props} />
      {feedback && (
        <StyledFormControlFeedback {...props}>{feedback}</StyledFormControlFeedback>
      )}
    </StyledFormControlContainer>
  );
}
const StyledFontHelper = css`
  font-size: 1.25rem;
  font-weight: normal;
  color: #000;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.05rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const StyledFormControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
`;
const StyledFormControlLabel = styled.label`
  ${StyledFontHelper}
  margin-bottom: 0.25rem;
  color: ${(props) => props.theme.colors.dark.base};
  text-align: left;
`;

const StyledFormControlInput = styled.input`
  // input css here
  ${StyledFontHelper}
  font-size: 1rem;
  outline: none;
  width: 100%;
  height: ${(props) => props.theme.form.input.height[props.size || "md"]};
  padding: 0.5rem 0.75rem;
  border: ${(props) =>
    `${props.bw || '1px'} solid ${props.theme.colors[props.color || 'primary'].base}`};
  border-radius: ${(props) => props.theme.shape.borderRadius[props.br] || '0'};
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme.colors.gray[600]};
  }
  &:focus {
    border-color: ${(props) => props.theme.colors[props.color || 'primary'].dark};
  }
  &:focus::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.gray[400]};
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors[props.color || 'primary'].light};
    border-color: ${(props) => props.theme.colors[props.color || 'primary'].light};
  }
  &:invalid {
    border-color: ${(props) => props.theme.colors[props.color || 'primary'].error};
  }
  &:valid {
    border-color: ${(props) => props.theme.colors[props.color || 'primary'].success};
  }
  &:focus:invalid {
    border-color: ${(props) => props.theme.colors[props.color || 'primary'].error};
  }
  &:focus:valid {
    border-color: ${(props) => props.theme.colors[props.color || 'primary'].success};
  }
`;
const StyledFormControlFeedback = styled.p`
  ${StyledFontHelper}
  font-size: 0.675rem;
  margin-top: 0.25rem;
  color: ${(props) => props.theme.colors.gray[700]};
  text-align: left;
  letter-spacing: 0.05rem;
`;
