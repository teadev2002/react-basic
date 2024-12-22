import React from "react";
import Swal from "sweetalert2";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  /**
   * JSX => return block <div> </div> bọc tất cả phần tử hoặc có thể dùng:
   * fragment của react:    <> </>     để bọc
   *
   *
   */

  state = {
    firstName: "",
    age: "",
    arrJobs: [
      { id: "abcJob1", title: "BE", salary: "1000 " },
      { id: "abcJob2", title: "FE", salary: "900 " },
      { id: "abcJob3", title: "Tester", salary: "800" },
    ],
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  name = "Anh Hoang";

  handleClickButton = () => {
    Swal.fire({
      toast: true,
      position: "top",
      showConfirmButton: false,
      icon: "info",
      title: ` Great , ${this.name} `,
      timer: 1000,
      timerProgressBar: true,
    });
    console.log("check state: ", this.state.name);
  };

  render() {
    return (
      <>
        <div>
          <input
            className="form-control"
            placeholder="FirstName"
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
        </div>
        <div>
          <input
            className="form-control"
            placeholder="age"
            type="number"
            value={this.state.age}
            onChange={(event) => this.handleChangeAge(event)}
          />
        </div>

        {/* <div className="second">
          <button
            className="btn btn-danger"
            onClick={() => this.handleClickButton()}
          >
            Click me
          </button>
        </div> */}

        <ChildComponent
          name={this.state.firstName}
          age={this.state.age}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}
export default MyComponent;
