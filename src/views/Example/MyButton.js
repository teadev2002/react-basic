import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class MyButton extends React.Component {
  render() {
    return (
      <a
        target="_blank"
        href="https://www.facebook.com/"
        className="btn btn-outline-primary"
      >
        Click me
      </a>
    );
  }
}
export default MyButton;
