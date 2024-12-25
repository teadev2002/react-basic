import React from "react";
import Swal from "sweetalert2";
class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      Swal.fire({
        toast: true,
        icon: "info",
        title: "No Data",
        timer: 700,
        position: "top-end",
        showConfirmButton: false,
      });
      return;
    }
    Swal.fire({
      toast: true,
      icon: "success",
      title: `Job: ${this.state.title} \n Salary: ${this.state.salary} \n Has Added `,
      timer: 1000,
      position: "top-end",
      showConfirmButton: false,
    });

    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <>
        <form
          style={{
            display: "block",
            margin: "20px auto",
            width: "30%",
          }}
        >
          <div>
            <input
              placeholder="Title Job"
              className="form-control text-center"
              type="text"
              value={this.state.title}
              onChange={(event) => this.handleChangeTitle(event)}
            />
          </div>
          <div>
            <input
              placeholder="Salary"
              className="form-control text-center"
              type="number"
              value={this.state.salary}
              onChange={(event) => this.handleChangeSalary(event)}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <button
              className="btn btn-success"
              onClick={(event) => this.handleSubmit(event)}
            >
              Submit
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default AddComponent;
