import React from "react"
import Button from "../../components/button"

import api from "./api"

/**
 * This example will how a state value changes can trigger a useEffect
 */

const Example2 = props => {
  const [getApi, setGetApi] = React.useState(false)
  const [res, setResponse] = React.useState("")

  React.useEffect(() => {
    if (getApi) {
      console.log("GET API")
      api.get().then(value => {
        setResponse(value)
        setGetApi(false)
      })
    }
  }, [getApi])

  return (
    <React.Fragment>
      <p>Fetching state: {getApi.toString()} </p>
      <p>{res}</p>
      <Button onClick={() => setGetApi(true)}>Fetch Data</Button>
    </React.Fragment>
  )
}

Example2.displayName = "UseEffect-Example2"

export default Example2
