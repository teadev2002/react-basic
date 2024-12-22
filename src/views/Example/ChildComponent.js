import React from "react";
import Swal from "sweetalert2";

class ChildComponent extends React.Component {
  render() {
    // let name = this.props.name;
    // let age = this.props.age;
    // let name = "Im child guy";

    let { name, age } = this.props;

    console.log("Check props\n name: ", name, " | age: ", age);

    return (
      <>
        <div className="first">
          Props: {name} - {age}
        </div>
      </>
    );
  }
}
export default ChildComponent;
