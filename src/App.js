import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AUTO_mobile from "sectors/AUTO_mobile";
import B2B_page from "sectors/B2B_page";
import B2C_general from "sectors/B2C_general";
import HEALTH_sector from "sectors/HEALTH_sector";
import LAW_firms from "sectors/LAW_firms";
import LogisticsAnd_Shipping from "sectors/LogisticsAnd_Shipping";
import E_commerce from "./sectors/E_commerce";
import REAL_estate from "./sectors/REAL_estate";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Redirect to="/e-commerce" />}
          />
          <Route exact path="/e-commerce" component={E_commerce} />
          <Route exact path="/B2C-general" component={B2C_general} />
          <Route exact path="/REAL-estate" component={REAL_estate} />
          <Route exact path="/LAW-firms" component={LAW_firms} />
          <Route exact path="/HEALTH-sector" component={HEALTH_sector} />
          <Route
            exact
            path="/LogisticsAnd-Shipping"
            component={LogisticsAnd_Shipping}
          />
          <Route exact path="/AUTO-mobile" component={AUTO_mobile} />
          <Route exact path="/B2B-page" component={B2B_page} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
