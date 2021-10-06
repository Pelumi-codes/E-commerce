import ContactUs from "pages/ContactUs";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import B2C_general from "sectors/B2C_general";
import E_commerce from "./sectors/E_commerce";

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

          <Route path="/consultation/contact-us" component={ContactUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
