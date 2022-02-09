import React from "react";
import styled, { css } from "styled-components";

const StyledInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  min-width: 350px;
  max-width: 350px;
  position: relative;
  ${(props) => props.hasError
    && css`
      padding: 20px 0px 10px 0px;
      & + ${StyledErrorMessage} {
        opacity: 1;
        height: 100%;
        display: block;
      }
    `}
`;

const StyledInput = styled.input`
  border: none;
  color: var(--dsFontPrimary);
  appearance: none;
  outline: none;
  font-size: 14px;
  border-bottom: 1px solid var(--dsBorder);
  &:focus {
    border-bottom: 1px solid var(--dsBorder);
  }
`;

const StyledLabel = styled.label`
  position:absolute;
  top:10px;
  left:0;  
  color: #999;
  transition:.5s;
  pointer-events:none;
  font-size: 14px;
  opacity: .8;
  ${(props) => props.active
    && css`
      transform: translateY(-12px);
      opacity: .8;
    `}
`;

const StyledErrorMessage = styled.p`
  font-size: 12px;
  margin: 0px;
  color: red;
  width: 100%;
  opacity: 0;
  display: none;
`;

const Input = ({
  label,
  type,
  name,
  value,
  placeholder,
  hasError,
  errorMessage,
  onEnter,
  onChange,
  style
}) => {
  return (
    <React.Fragment>
      <StyledInputWrap
        hasError={hasError}
      >
        
        <StyledLabel
         active={value && value !== ""}
        >
          {label}
        </StyledLabel>
        <StyledInput
          type={type}
          name={name}
          value={value || ""}
          onChange={(e) => {
            onChange(e);
          }}
          onEnter={(e) => {
            onEnter(e);
          }}
          style={style}
        />
      </StyledInputWrap>
      <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
    </React.Fragment>
  );
}

export default Input;