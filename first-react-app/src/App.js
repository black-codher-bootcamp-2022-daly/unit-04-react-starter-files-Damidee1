import logo from "./logo.svg";
import avartar from "./avatar.jpg";
import "./App.css";

function Header(props) {
  const { name, color, alias } = props;
  return (
    <h1>
      {props.name} is {props.color} like {props.alias}
    </h1>
  );
}
function Footer(props) {
  return <div>goodbye {props.nickname}</div>;
}
function App() {
  return (
    <div className="App">
      <Header name="dami" color="blue" alias="boom" />
      <header className="App-header">
        <img src={avartar} className="App-logo" alt="logo" />
        <p>
          learn<code>src/App.js</code> with me.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer nickname="portable" />
    </div>
  );
}

export default App;
