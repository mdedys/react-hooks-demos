import * as React from "react"
import Input from "../../components/input"

/**
 * Simple usage of useState with a input field
 */

const Example1 = () => {
  const [value, setValue] = React.useState("")

  return (
    <React.Fragment>
      <Input value={value} onChange={evt => setValue(evt.target.value)} />
    </React.Fragment>
  )
}

Example1.displayName = "UseState-Example1"

export default Example1
