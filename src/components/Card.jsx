import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  box-shadow :0 2px 4px hsl(0deg 0% 43% / 50%);
  padding: 24px;
  border-radius: 5px;
  border: 1px solid #eee;

  background: white;
`;

const Card = ({
  children,
  ...props
}) => {
  return (
    <StyledCard {...props}>
      {children}
    </StyledCard>
  );
}

export default Card;