import React from "react"
import ReactDOM from "react-dom"
import styled, { createGlobalStyle } from "styled-components"

import Input from "./components/input"
import Button from "./components/button"

const GlobalStyle = createGlobalStyle`

  body {
    padding: 0;
    margin: 0;
  }

  #app {
    color: ${props => (props.whiteColor ? "white" : "black")};
  }
`

const Container = styled.div`
  align-items: center;
  background-color: #f2f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  width: 100%;
`

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Container>
      <Input />
      <Button>Click Me!</Button>
    </Container>
  </React.Fragment>,
  document.getElementById("app")
)
