import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import Library from "./components/Library";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestRegister from "./components/testRegister";
function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* Homes */}
          <Route
            path="/"
            exact
            render={(routerProps) => {
              return (
                <Layout>
                  <Library {...routerProps} />
                </Layout>
              );
            }}
          />
          {/* // Registration */}
          <Route
            path="/register"
            exact
            render={(routerProps) => {
              return (
                <Layout>
                  <Register {...routerProps} />
                  {/* <TestRegister /> */}
                </Layout>
              );
            }}
          />
          {/* DEFAULT */}
          <Route
            render={() => (
              <h1 className="text-danger text-center pt-5">404 - NOT FOUND</h1>
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
