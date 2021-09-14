import { createContext } from "react"
import bDList from "./data"

const BirthDayListContext = createContext({
  birthDayList: bDList,
  setBirthDayList: () => {},
})

export default BirthDayListContext
