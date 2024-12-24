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

    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
  };
  handleDeteleTodo = (todo) => {
    let currentTodo = this.state.listTodos;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodo,
    });
    toast.success(`${todo.title} has deleted`);
    if (currentTodo.length === 0) {
      toast.warn("Todo is empty, add more todo now!!");
    }
  };

  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    // save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodoCopy = [...listTodos];

      let objIndex = listTodoCopy.findIndex((item) => item.id === todo.id);

      listTodoCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodoCopy,
        editTodo: {},
      });
      toast.success(` Edit success : ${todo.title}`);
      return;
    }
    //sửa
    this.setState({
      editTodo: todo,
    });
  };
  hanldeOnChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(`check`, isEmptyObj);
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
                  {isEmptyObj === true ? (
                    <span>{item.title}</span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span className="form-group">
                          <input
                            className="form-control"
                            value={editTodo.title}
                            onChange={(event) =>
                              this.hanldeOnChangeEditTodo(event)
                            }
                          />
                        </span>
                      ) : (
                        <span>{item.title}</span>
                      )}
                    </>
                  )}
                  <span
                    className="btn btn-outline-warning"
                    value={this.state.editTodo}
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {isEmptyObj === false && editTodo.id === item.id
                      ? "✔️"
                      : "🛠️"}
                  </span>

                  <span
                    className="btn btn-outline-danger"
                    onClick={() => this.handleDeteleTodo(item)}
                  >
                    ❌
                  </span>
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
