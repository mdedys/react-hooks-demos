import React from "react"
import Input from "../../components/input"

const LIST = [1, 2, 3, 4, 5, 6, 7, 9]

/**
 * 1. Show a useMemo with a list of items and how if dependency doesn't change value is not calculated
 * 2. Show useCallback with incorrect dependency tree on a button click
 * 3. Show useCallback with correct depedency tree
 */

const FuncComponent = () => {
  return <Input />
}

export default FuncComponent
