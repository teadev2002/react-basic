import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";

import ListTodo from "./Todos/ListTodo";

import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav.js";
import Home from "./Example/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ListUser from "./Users/ListUser.js";
import DetailUser from "./Users/DetailUser.js";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  // const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/todo" component={ListTodo} />
            <Route path="/about" component={MyComponent} />
            <Route path="/user" component={ListUser} exact />
            <Route path="/user/:id" component={DetailUser} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
