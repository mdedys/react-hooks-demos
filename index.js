import React from "react"
import ReactDOM from "react-dom"
import styled, { createGlobalStyle } from "styled-components"

import Input from "./components/input"
import Button from "./components/button"

import Example1 from "./examples/use-state/Example1"
// import Example2 from "./examples/use-state/Example2"
// import Example3 from "./examples/use-state/Example3"
// import Example1 from "./examples/memo-callback/Example1"
// import Example2 from "./examples/use-effect/Example2"

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

// Add or modify the container below to add the examples

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Container>
      <Example1 />
    </Container>
  </React.Fragment>,
  document.getElementById("app")
)
