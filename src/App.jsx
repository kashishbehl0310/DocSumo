import React from 'react';
import styled from "styled-components";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Routes from './Routes';
import "./theme/colors.css";

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  return (
    <FlexDiv>
      <Router>
        <Routes />
      </Router>
    </FlexDiv>
  );
}

export default App;
