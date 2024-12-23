import React from "react";
import Swal from "sweetalert2";
class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleDelete = (job) => {
    console.log("handleDelete", job); // 2. xem có nhận về 1 cái object đã chọn ko, sau đó qua thg cha
    this.props.deleteJob(job); //5. thg cha truyền về cho props thì nhận. Done
    Swal.fire({
      // thông báo thêm cho đẹp
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
                    {item.title} - {item.salary}{" "}
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
