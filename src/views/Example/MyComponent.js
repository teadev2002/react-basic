import React from "react";
import Swal from "sweetalert2";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "001", title: "DEV", salary: "100" },
      { id: "002", title: "Test", salary: "120" },
      { id: "003", title: "BA", salary: "140" },
    ],
  };

  addNewJob = (job) => {
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

  componentDidUpdate(preProps, preState) {
    console.log(
      ">> run didUpdate:  ",
      "prev state: ",
      preState,
      " current state: ",
      this.state
    );
  }

  componentDidMount() {
    console.log("componentDidMount check dùng để lấy api, gọi api");
  }

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
