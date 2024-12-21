import React from "react";

class MyComponent extends React.Component {
  /**
   * JSX => return block <div> </div> bọc tất cả phần tử hoặc có thể dùng:
   * fragment của react:    <> </>     để bọc
   *
   *
   */

  render() {
    let name = "The Anh";

    return (
      <>
        <div>Hello {name}</div>
        {console.log(name + ` is my nam, i log in console.log`)}
      </>
    );
  }
}
export default MyComponent;
