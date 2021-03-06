import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { store } from "../../store/store";
import { Provider } from "react-redux";
import { AccomodationDetailsPage } from "../../pages/AccomodationDetailsPage/AccomodationDetailsPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <div className="wrapper">
            <div className="main">
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/:id" exact component={AccomodationDetailsPage} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
