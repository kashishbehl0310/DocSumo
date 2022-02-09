import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  color: var(--dsFontPrimary);
  margin: 0;
  font-size: 22px;
  text-align: center;
  font-weight: 600;
  margin: 32px 0px;
`;

const Home = () => {
  return (
    <div>
      <StyledHeading>Hello, {window.sessionStorage.getItem("uname")}</StyledHeading>
    </div>
  )
}

export default Home;