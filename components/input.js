import React from "react"
import styled from "styled-components"

export default styled.input`
  border: 2px solid rgb(79, 94, 100, 0.2);
  border-radius: 4px;
  font-size: 24px;
  outline: none;

  padding: 8px 4px;
  width: 80%;
  transition: ease-in 200ms;

  &:focus {
    border-color: #2a228eff;
  }
`
