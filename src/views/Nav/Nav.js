import React from "react";
import "./nav-style.scss";
class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <a className="active" href="/">
            Home
          </a>
          <a href="/todo">Todo</a>

          <a href="/about">About</a>
        </div>
      </div>
    );
  }
}
export default Nav;
