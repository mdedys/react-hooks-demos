import * as React from "react"
import Input from "../../components/input"
import Button from "../../components/button"

const LIST = [1, 2, 3, 4, 5, 6, 7, 9]

/**
 * This example shows how useMemo and useCallback can be used
 * It also shows how the dependencies work and when things recompute
 */

function useInput(defaultValue) {
  const [value, setValue] = React.useState(defaultValue)
  const onChange = evt => setValue(evt.target.value)
  return {
    value,
    onChange
  }
}

const Child = props => {
  const [btnVal, setBtnVal] = React.useState("")
  const inputOne = useInput("A")
  const inputTwo = useInput("B")

  // Notice the expensive work is only done once
  const valueA = React.useMemo(() => {
    let b = 0
    console.log("Completing Expensive work IS DONE")
    for (let i = 0; i < LIST.length; i++) {
      b += i
    }
    return b
  }, [])

  const valueB = React.useMemo(() => {
    let b = 0
    for (let i = 0; i < LIST.length; i++) {
      b += i
    }
    return b + inputTwo.value
  }, [inputTwo.value])

  // parentValue is not in dependecy tree so the value will be stale
  const valueBWithIncorrectParent = React.useMemo(() => {
    let b = 0
    for (let i = 0; i < LIST.length; i++) {
      b += i
    }
    return b + props.parentValue
  }, [inputTwo.value])

  // This will have the most recent value of parentValue
  const onClick = React.useCallback(() => {
    setBtnVal(props.parentValue)
  }, [props.parentValue])

  // This will have an old value of props.parentValue
  const onClickBroken = React.useCallback(() => {
    setBtnVal(props.parentValue)
  }, [])

  return (
    <React.Fragment>
      <p>ValueA: {valueA}</p>
      <p>ValueB: {valueB}</p>
      <p>valueBWithIncorrectParent: {valueBWithIncorrectParent}</p>
      <p>btnVal: {btnVal}</p>
      <Input value={inputOne.value} onChange={inputOne.onChange} />
      <Input value={inputTwo.value} onChange={inputTwo.onChange} />
      <Button onClick={onClick}>Click me to set btnVal</Button>
      <Button onClick={onClickBroken}>
        Click me to set btnVal but I am broken
      </Button>
    </React.Fragment>
  )
}

const Parent = () => {
  const input = useInput("")

  return (
    <React.Fragment>
      <p>Parent Input</p>
      <Input value={input.value} onChange={input.onChange} />
      <p>Child Components</p>
      <Child parentValue={input.value} />
    </React.Fragment>
  )
}

Parent.displayName = "Memo&Callback-Example1"

export default Parent
