import React from "react";
import Swal from "sweetalert2";

class MyInputForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      toast: true,
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
      title: "Data has sent",
      position: "top",
    });
    console.log(this.state);
    if (this.state.firstName === "" || this.state.lastName === "") {
      Swal.fire({
        toast: true,
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        title: "No Data has sent",
        position: "top",
      });
    }
  };
  render() {
    console.log(`call render: `, this.state);
    return (
      <>
        <div>
          <form>
            <input
              className="form-control"
              placeholder="FirstName"
              type="text"
              value={this.state.firstName}
              onChange={(event) => this.handleChangeFirstName(event)}
            />
            <br />
            <input
              className="form-control"
              placeholder="LastName"
              type="text"
              value={this.state.lastName}
              onChange={(event) => this.handleChangeLastName(event)}
            />
            <br />
            <button
              className="btn btn-success"
              type="submit"
              onClick={(event) => this.handleSubmit(event)}
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default MyInputForm;
