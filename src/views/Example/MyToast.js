import React from "react";
import Swal from "sweetalert2";

class MyToast extends React.Component {
  showToast = () => {
    Swal.fire({
      toast: true, // Enables toast mode
      icon: "error", // Icon for the toast
      title: "You do not permission", // Toast message
      position: "top-end", // Position of the toast
      showConfirmButton: false, // Hides the confirm button
      timer: 900, // Auto-dismiss after 3 seconds
      timerProgressBar: true, // Displays a progress bar
      color: "#d33",
      background: "#ffdddd",
    });
  };
  render() {
    return (
      <>
        <button onClick={this.showToast} className="btn btn-outline-primary">
          Show Toast
        </button>
      </>
    );
  }
}
export default MyToast;
