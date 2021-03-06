import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { MyComponent } from "./components/common/myComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CustomersPage } from "./components/pages/customers.page";
import { CustomersEditPage } from "./components/pages/customers.edit.page";
import { CustomersDeletePage } from "./components/pages/customers.delete.page";
import { AddressesPage } from "./components/pages/addresses.page";
import { NotesPage } from "./components/pages/notes.page";
import { AddressesEditPage } from "./components/pages/addresses.edit.page";
import { AddressesDeletePage } from "./components/pages/addresses.delete.page";
import { NotesEditPage } from "./components/pages/notes.edit.page";
import { NotesDeletePage } from "./components/pages/notes.delete.page";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/customers/edit/:id"
            render={(props) => <CustomersEditPage {...props} />}
          />
          <Route
            path="/customers/:customerId/addresses/:addressId/delete"
            render={(props) => <AddressesDeletePage {...props} />}
          />
          <Route
            path="/customers/:customerId/addresses/edit/:addressId"
            render={(props) => <AddressesEditPage {...props} />}
          />
          <Route
            path="/customers/:customerId/addresses/create"
            render={(props) => <AddressesEditPage {...props} />}
          />

          <Route
            path="/customers/:customerId/notes/:noteId/delete"
            render={(props) => <NotesDeletePage {...props} />}
          />
          <Route
            path="/customers/:customerId/notes/edit/:noteId"
            render={(props) => <NotesEditPage {...props} />}
          />
          <Route
            path="/customers/:customerId/notes/create"
            render={(props) => <NotesEditPage {...props} />}
          />

          <Route
            path="/customers/:customerId/addresses"
            render={(props) => <AddressesPage {...props} />}
          />
          <Route
            path="/customers/:customerId/notes"
            render={(props) => <NotesPage {...props} />}
          />
          <Route
            path="/customers/:id/delete"
            render={(props) => <CustomersDeletePage {...props} />}
          />
          <Route
            path="/customers/create"
            render={(props) => <CustomersEditPage {...props} />}
          />
          <Route path="/customers">
            <CustomersPage />
          </Route>
          <Route path="/">
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload!
                </p>
                <MyComponent />
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
