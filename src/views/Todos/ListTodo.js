import React from "react";
import "./todo-styles.scss";
import AddTodo from "./AddTodo";
import { ToastContainer, toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Learn" },
      { id: "todo2", title: "Fixbug" },
      { id: "todo3", title: "Debug" },
    ],
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
  };

  render() {
    let { listTodos } = this.state;
    return (
      <>
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="List-todo-container">
          <div className="List-todo-content"></div>
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {index + 1} | {item.title}{" "}
                  </span>
                  <span className="btn btn-outline-warning">🛠️</span>
                  <span className="btn btn-outline-danger">❌</span>
                  <hr></hr>
                </div>
              );
            })}
        </div>

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    );
  }
}

export default ListTodo;
