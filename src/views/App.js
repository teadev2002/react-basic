import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import MyButton from "./Example/MyButton";
import MyProfile from "./Example/MyProfile";
import MySweetAlert from "./Example/MySweetAlert";
import MyToast from "./Example/MyToast";
import MyToastUseEffect from "./Example/MyToastUseEffect";
import MyInputState from "./Example/MyInputState";
import MyInputForm from "./Example/MyInputForm";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/**
 * 2 components: class component / function component ( function, arrow)
 * state là 1 object gồm key và value
 */
function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyProfile /> */}
        {/* <MyButton /> */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* <MyComponent /> */}
        {/* <MySweetAlert /> <br></br>
        <MyToast />  */}
        {/* <MyInputState /> */}
        {/* <MyToastUseEffect /> */}
        {/* <MyInputForm /> */}
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
