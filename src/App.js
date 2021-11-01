import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import Nav from "./Nav";
import React from "react";
import Employeeform from "./Form";
import Aboutus from "./Aboutus";
import TableForm from "./components/TableForm";
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Aboutus} />
          <Route path="/aboutus" exact component={Aboutus} />
          <Route path="/form" exact component={Employeeform} />
         < Route path="/table" exact component={TableForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;