import * as React from "react"
import Input from "../../components/input"

/**
 * Two input fields using a custom hook
 */

function useInput(defaultValue) {
  const [value, setValue] = React.useState(defaultValue)

  const onChange = evt => setValue(evt.target.value)

  return {
    value,
    setValue
  }
}

const Example2 = () => {
  const inputOne = useInput("A")
  const inputTwo = useInput("B")

  return (
    <React.Fragment>
      <Input value={inputOne.value} onChange={inputOne.onChange} />
      <Input value={inputTwo.value} onChange={inputTwo.onChange} />
    </React.Fragment>
  )
}

Example2.displayName = "UseState-Example2"

export default Example2
