import React from "react";
import "./todo-styles.scss";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };
  AddTodoChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddTodo = () => {
    if (!this.state.title) {
      toast.info("No Data");
      return;
    }
    toast.success(`Add Successfull  ${this.state.title}`);
    let todo = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);

    this.setState({
      title: "",
    });
  };
  render() {
    return (
      <>
        <div className="add-todo">
          <input
            className="form-control"
            type="text"
            placeholder="Todo"
            value={this.state.title}
            onChange={(event) => this.AddTodoChange(event)}
          />
          <button
            className="btn btn-success"
            onClick={() => this.handleAddTodo()}
          >
            Add
          </button>
        </div>
      </>
    );
  }
}
export default AddTodo;
