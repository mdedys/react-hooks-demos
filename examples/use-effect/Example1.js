import React from "react"
import Input from "../../components/input"
import Button from "../../components/button"

import api from "./api"

/**
 * This example shows the usage of useEffect. This case triggers only
 * on mount hence the empty [] as the second parameter to useEffect
 */

const FuncComponent = props => {
  const [res, setResponse] = React.useState("")

  React.useEffect(() => {
    api.get().then(value => setResponse(res))
  }, [])

  return (
    <React.Fragment>
      <span>{res}</span>
    </React.Fragment>
  )
}

export default FuncComponent
