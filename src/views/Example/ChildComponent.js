import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = (status) => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  render() {
    let { arrJobs } = this.props;
    let showJobs = this.state.showJobs;

    return (
      <>
        {showJobs === false ? (
          <div>
            <button
              className="btn btn-primary"
              onClick={() => this.handleShowHide()}
            >
              Show
            </button>
          </div>
        ) : (
          <>
            <div>
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}
                  </div>
                );
              })}
            </div>

            <div>
              <button
                className="btn btn-danger"
                onClick={() => this.handleShowHide()}
              >
                Hide
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

// dùng  function component như thế này khi chúng ta chỉ có props và render dữ liệu và khi dùng với thg hook

// const ChildComponent = (props) => {
//   console.log("Check Child props", props);
//   let { name, age, arrJobs } = props;

//   return (
//     <>
//       <div className="props">
//         Props: {name} - {age}
//       </div>
//       <div className="list-jobs">
//         {arrJobs.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {item.title} - {item.salary}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

export default ChildComponent;
