import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Join from "./pages/Join";

function App() {
  return (
    <Router>
      <Routes />
      <Switch>
        <Route path='/Join' exact component={Join} />
        <Route path='/chat/:user_nickName' exact component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;
