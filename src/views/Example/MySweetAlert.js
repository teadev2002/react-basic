import React from "react";
import Swal from "sweetalert2";

class MySweetAlert extends React.Component {
  handleClick = () => {
    Swal.fire({
      title: `Hello`,
      text: `Thiss is a sweetAlert in React`,
      icon: `success`,
      confirmButtonText: `Cool`,
    });
  };
  render() {
    return (
      <>
        <div className="sweet">
          <button
            onClick={this.handleClick}
            className="btn btn-outline-warning"
          >
            Sweet Alert
          </button>
        </div>
      </>
    );
  }
}
export default MySweetAlert;
