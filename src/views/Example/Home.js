import React from "react";
import { withRouter } from "react-router";
import { toast } from "react-toastify";
import Color from "../HOC/Color.js";
import corgi from "../../assets/images/1.jpg";
import { connect } from "react-redux";
import Swal from "sweetalert2";
class Home extends React.Component {
  componentDidMount() {}

  handleDeleteUser = (user) => {
    console.log("check click delete: ", user);
    this.props.deleteUserRedux(user);
    Swal.fire({
      toast: true,
      icon: "info",
      title: "Delete success",
      timer: 1000,
      showConfirmButton: false,
      position: "top",
    });
  };
  hanldeCreateUser = () => {
    this.props.addUserRedux();
    Swal.fire({
      toast: true,
      icon: "success",
      title: "Add success",
      timer: 1000,
      showConfirmButton: false,
      position: "top",
    });
  };
  render() {
    console.log("check props", this.props.dataRedux);

    let listUser = this.props.dataRedux;
    return (
      <div>
        <h1>Home hello</h1>
        <div>
          <img src={corgi} />
        </div>
        <div>
          <button
            className="btn btn-outline-success"
            onClick={() => this.hanldeCreateUser()}
          >
            Add User
          </button>
        </div>
        <div>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div key={item.id}>
                  {" "}
                  {index + 1} - {item.name}{" "}
                  <span onClick={() => this.handleDeleteUser(item)}>✖️</span>
                </div>
              );
            })}
        </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
