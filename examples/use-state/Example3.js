import * as React from "react"
import Button from "../../components/button"

/**
 * This example shows that the setter does not merge the
 * value like in this.setState in a class component. It instead
 * replace the value entirely
 */

const Example3 = () => {
  const [value, setValue] = React.useState({ a: "Value A", b: "Value B" })

  return (
    <React.Fragment>
      This is the value a: {value.a} and value b: {value.b}
      <Button onClick={() => setValue({ a: "Changed A" })}>
        Set State Correctly
      </Button>
      <Button onClick={() => setValue({ a: "Changed A", b: "Value B" })}>
        Set State Incorrectly
      </Button>
    </React.Fragment>
  )
}

Example3.displayName = "UseState-Example3"

export default Example3
