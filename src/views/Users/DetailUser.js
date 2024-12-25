import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
class DetailUser extends React.Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;

      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      console.log(res.data.data);

      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }
  hanldeBack = () => {
    this.props.history.push(`/user`);
  };
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    console.log("check props from detail", this.props);
    return (
      <div>
        {isEmptyObj === false && (
          <div style={{ margin: 10 }}>
            <div>
              <img
                style={{
                  borderRadius: 100,
                  boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
                }}
                src={user.avatar}
              />
            </div>
            <div>
              {user.first_name} - {user.last_name}
            </div>
            <div> {user.email}</div>
            <button
              className="btn btn-outline-secondary"
              style={{ margin: 10 }}
              onClick={() => this.hanldeBack()}
            >
              ↩
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(DetailUser);
