import React from "react";
import { withRouter } from "react-router";
import { toast } from "react-toastify";
import Color from "../HOC/Color.js";
import corgi from "../../assets/images/1.jpg";
import { connect } from "react-redux";
class Home extends React.Component {
  componentDidMount() {}
  render() {
    console.log("check props", this.props.dataRedux);
    return (
      <div>
        <h1>Home hello</h1>
        <h1>
          <img src={corgi} />
        </h1>
      </div>
    );
  }
}

// map state của rootReducer vào props qua tham số state, ở bên rootReducer
const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};
export default connect(mapStateToProps)(Color(Home));
