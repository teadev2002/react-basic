import React from "react";
import { withRouter } from "react-router";
import { toast } from "react-toastify";
class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/todo");
      toast.success("Welcome");
    }, 300);
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

export default withRouter(Home);
