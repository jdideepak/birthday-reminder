import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Add from "./Add"
import App from "./App"
import EditDetails from "./EditDetails"
import ViewAll from "./ViewAll"
// import BirthDayListContext from "./BirthDayList.context"
import bDList from "./data"
import { useState } from "react"

const MainApp = () => {
  // console.log(bDList)
  const [birthDayList, setBirthDayList] = useState(bDList)
  return (
    <div className="content">
      <Router>
        <Switch>
          <Route path="/viewall">
            <ViewAll
              birthDayList={birthDayList}
              setBirthDayList={setBirthDayList}
            />
          </Route>
          <Route path="/edit:id">
            <EditDetails
              birthDayList={birthDayList}
              setBirthDayList={setBirthDayList}
            />
          </Route>
          <Route path="/add">
            <Add
              birthDayList={birthDayList}
              setBirthDayList={setBirthDayList}
            />
          </Route>
          <Route path="/">
            <App
              birthDayList={birthDayList}
              setBirthDayList={setBirthDayList}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default MainApp
