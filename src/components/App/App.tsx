import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <Switch>
              <Route path="/" exact component={HomePage} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
