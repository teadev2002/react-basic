import React from "react";
import Swal from "sweetalert2";

class ChildComponent extends React.Component {
  render() {
    // let name = "Im child guy";

    return (
      <>
        <div className="first">Hello {this.props.name} </div>
      </>
    );
  }
}
export default ChildComponent;
