import React from "react";
import Swal from "sweetalert2";
class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = (status) => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleDelete = (job) => {
    console.log("handleDelete", job);
    this.props.deleteJob(job);
    Swal.fire({
      toast: true,
      icon: "error",
      title: `Delete ${job.title}`,
      showConfirmButton: false,
      timer: 1000,
      position: "top",
    });
  };
  render() {
    let { arrJobs } = this.props;
    let showJobs = this.state.showJobs;

    return (
      <>
        {showJobs === false ? (
          <div>
            <button
              className="btn btn-primary"
              onClick={() => this.handleShowHide()}
            >
              Show
            </button>
          </div>
        ) : (
          <>
            <div>
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} &nbsp;{" "}
                    <span onClick={() => this.handleDelete(item)}>❌</span>
                  </div>
                );
              })}
            </div>

            <div>
              <button
                className="btn btn-danger"
                onClick={() => this.handleShowHide()}
              >
                Hide
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
