import { useState } from "react";
import "./App.css";

const App = (props) => {
  const [colorb, setColorb] = useState("");
  const [count, setCount] = useState(0);
  const [colorb1, setColorb1] = useState("");

  const cl = () => {
    setColorb("red");
    setCount(count + 1);
    setColorb1("rgb(13, 230, 13)");
  };
  const cl1 = () => {
    setColorb("blue");
    setCount(count + 1);
    setColorb1("red");
  };
  const cl2 = () => {
    setColorb("rgb(13, 230, 13)");
    setCount(count + 1);
    setColorb1("yellow");
  };
  const cl3 = () => {
    setColorb("yellow");
    setCount(count + 1);
    setColorb1("blue");
  };

  return (
    <div className="App">
      <div className="box" style={{ background: colorb }}>
        <p style={{ color: colorb1 }}>{count}</p>
        <button className="btn btn-success" onClick={cl}>
          change
        </button>
        <button className="btn btn-info" onClick={cl1}>
          change
        </button>{" "}
        <button className="btn btn-primary" onClick={cl3}>
          change
        </button>
        <button className="btn btn-warning" onClick={cl2}>
          change
        </button>
        <div className="box1">{props.cnt}</div>
      </div>
    </div>
  );
};

export default App;
