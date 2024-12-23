import React from "react";
import Swal from "sweetalert2";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    firstName: "",
    age: "",
    arrJobs: [
      { id: "abcJob1", title: "BE", salary: "1000 " },
      { id: "abcJob2", title: "FE", salary: "900 " },
      { id: "abcJob3", title: "Tester", salary: "800" },
    ],
  };

  addNewJob = (job) => {
    console.log("check job from parent", job);

    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJob,
    });
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
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}
export default MyComponent;
