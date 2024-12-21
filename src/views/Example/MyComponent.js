import React from "react";
import Swal from "sweetalert2";

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
      icon: "question",
      title: ` Great , ${this.name} `,
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
      </>
    );
  }
}
export default MyComponent;
