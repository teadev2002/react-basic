import React from "react";
import Swal from "sweetalert2";

class MyToastUseEffect extends React.Component {
  componentDidMount() {
    Swal.fire({
      toast: true,
      icon: "info",
      title: "Welcome back!",
      position: "top-end",
      showConfirmButton: false,
      timer: 900,
      timerProgressBar: true,
    });
  }

  showToast = () => {
    Swal.fire({
      toast: true,
      icon: "info",
      title: "Triggered from button!",
      position: "bottom-end",
      showConfirmButton: false,
      timer: 1200,
      timerProgressBar: true,
    });
  };
  render() {
    return (
      <>
        {/* <button onClick={this.showToast} className="btn btn-outline-warning">
          Show Toast effect
        </button> */}
      </>
    );
  }
}
export default MyToastUseEffect;
