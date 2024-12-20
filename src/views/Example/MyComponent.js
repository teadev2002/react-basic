import React from "react";
import Swal from "sweetalert2";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  /**
   * JSX => return block <div> </div> bọc tất cả phần tử hoặc có thể dùng:
   * fragment của react:    <> </>     để bọc
   *
   *
   */
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
  };

  render() {
    let name = "The Anh";

    return (
      <>
        <div className="first">Hello {name} </div>
        <div className="second">
          <button
            className="btn btn-danger"
            onClick={() => this.handleClickButton()}
          >
            Touch me
          </button>
        </div>
        <ChildComponent name={"child 1"} />
        <ChildComponent name={"child 2"} />
        <ChildComponent name={"child 3"} />
      </>
    );
  }
}
export default MyComponent;
