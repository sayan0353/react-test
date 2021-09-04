import React from "react"
import {BrowserRouter as Router,
Switch,
Route,
Link} from "react-router-dom"
import SignPage from "./components/SignPage"
import Display from "./components/DisplayPage"
const App=()=>{
  return(
    <Router>
    <Switch>
    <Route exact path="/" component={SignPage}/>
    <Route exact path="/add" component={Display}/>
    </Switch>
    </Router>
  )
}
export default App;
