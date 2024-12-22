import React from "react";
import Swal from "sweetalert2";

// class ChildComponent extends React.Component {
//   render() {
//     let { name, age, arrJobs } = this.props;
//     console.log("Check props\n name: ", name, " | age: ", age);

//     return (
//       <>
//         <div className="first">
//           Props: {name} - {age}
//         </div>
//         <div className="jobList">
//           {arrJobs.map((item, index) => {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary}
//               </div>
//             );
//           })}
//         </div>
//       </>
//     );
//   }
// }

const ChildComponent = (props) => {
  console.log("Check Child props", props);
  let { arrJobs } = props;
  return (
    <>
      <div className="list-jobs">
        {arrJobs.map((item, index) => {
          return (
            <div key={item.id}>
              {item.title} - {item.salary}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChildComponent;
