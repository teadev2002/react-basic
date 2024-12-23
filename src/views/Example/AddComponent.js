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
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        title: "No Data has sent",
        position: "top",
      });
      return;
    }
    Swal.fire({
      toast: true,
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
      title: "Data has sent",
      position: "top",
    });
    console.log(this.state);
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
      <div>
        <form>
          <input
            className="form-control"
            placeholder="Title"
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleChangeTitle(event)}
          />
          <br />
          <input
            className="form-control"
            placeholder="Salary"
            type="number"
            value={this.state.salary}
            onChange={(event) => this.handleChangeSalary(event)}
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
    );
  }
}

export default AddComponent;
