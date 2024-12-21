import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class MyInputState extends React.Component {
  state = {
    name: ``,
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
    console.log(this.state);
  };
  render() {
    return (
      <>
        <div className="first">
          <input
            className="form-control"
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChangeName(event)}
          />
          <br></br>
          This is GOAT: {this.state.name}
        </div>
      </>
    );
  }
}
export default MyInputState;
