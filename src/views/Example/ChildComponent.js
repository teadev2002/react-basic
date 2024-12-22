import React from "react";
import Swal from "sweetalert2";

class ChildComponent extends React.Component {
  render() {
    // let name = this.props.name;
    // let age = this.props.age;
    // let name = "Im child guy";

    let { name, age, arrJobs } = this.props;
    console.log("Check props\n name: ", name, " | age: ", age);

    return (
      <>
        <div className="first">
          Props: {name} - {age}
        </div>
        <div className="jobList">
          {arrJobs.map((item) => {
            return (
              <div key={item.id}>
                {item.title} - {item.salary}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default ChildComponent;
