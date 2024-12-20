import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import MyButton from "./Example/MyButton";
import MyProfile from "./Example/MyProfile";
/**
 * 2 components: class component / function component ( function, arrow)
 *
 */
function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MyProfile />
        <MyButton />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1> Hello World</h1>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
