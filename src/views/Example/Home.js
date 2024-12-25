import React from "react";
import { withRouter } from "react-router";
import { toast } from "react-toastify";
import Color from "../HOC/Color.js";
class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   // this.props.history.push("/");
    //   window.location.reload();
    // }, 1500);
  }
  render() {
    console.log("check props", this.props);
    return (
      <div>
        <h1>Home hello</h1>
      </div>
    );
  }
}

export default Color(Home);
