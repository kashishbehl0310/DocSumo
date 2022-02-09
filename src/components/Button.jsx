import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border: 2px solid transparent;
  padding: 16px;
  color: white;
  background: var(--dsPrimary);
  transition: 0.3s;
  text-transform: uppercase;
`;

const Button = ({
  children,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      onClick={(e) => {
        onClick(e);
      }}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
