import { useState } from "react";
import "./Calc.css";

function Calc() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [action, setAction] = useState();
  const [sum, setSum] = useState();

  const result = (e) => {
    if (first === "" || second === "") return;
    const act = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
    };
    setSum(act[action](+first, +second));
  };
  const clear = (e) => {
    setFirst("");
    setSecond("");
    setAction();
    setSum();
  };

  return (
    <>
      <div className="calc">
        <div className="numb">
          <button
            className="btn btn-danger"
            onClick={(e) => {
              if (!action) {
                if (first === "0") return;
                setFirst(first + e.target.textContent);
              } else {
                if (second === "0" || typeof sum !== "undefined") return;
                setSecond((value) => value + e.target.textContent);
              }
            }}
          >
            7
          </button>

          <button
            className="btn btn-danger"
            onClick={(e) => {
              if (!action) {
                if (first === "0") return;
                setFirst(first + e.target.textContent);
              } else {
                if (second === "0" || typeof sum !== "undefined") return;
                setSecond((value) => value + e.target.textContent);
              }
            }}
          >
            8
          </button>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              if (!action) {
                if (first === "0") return;
                setFirst(first + e.target.textContent);
              } else {
                if (second === "0" || typeof sum !== "undefined") return;
                setSecond((value) => value + e.target.textContent);
              }
            }}
          >
            9
          </button>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              if (!action) {
                if (first === "0") return;
                setFirst(first + e.target.textContent);
              } else {
                if (second === "0" || typeof sum !== "undefined") return;
                setSecond((value) => value + e.target.textContent);
              }
            }}
          >
            4
          </button>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              if (!action) {
                if (first === "0") return;
                setFirst(first + e.target.textContent);
              } else {
                if (second === "0" || typeof sum !== "undefined") return;
                setSecond((value) => value + e.target.textContent);
              }
            }}
          >
            5
          </button>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              if (!action) {
                if (first === "0") return;
                setFirst(first + e.target.textContent);
              } else {
                if (second === "0" || typeof sum !== "undefined") return;
                setSecond((value) => value + e.target.textContent);
              }
            }}
          >
            6
          </button>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              if (!action) {
                if (first === "0") return;
                setFirst(first + e.target.textContent);
              } else {
                if (second === "0" || typeof sum !== "undefined") return;
                setSecond((value) => value + e.target.textContent);
              }
            }}
          >
            1
          </button>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              if (!action) {
                if (first === "0") return;
                setFirst(first + e.target.textContent);
              } else {
                if (second === "0" || typeof sum !== "undefined") return;
                setSecond((value) => value + e.target.textContent);
              }
            }}
          >
            2
          </button>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              if (!action) {
                if (first === "0") return;
                setFirst(first + e.target.textContent);
              } else {
                if (second === "0" || typeof sum !== "undefined") return;
                setSecond((value) => value + e.target.textContent);
              }
            }}
          >
            3
          </button>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              if (!action) {
                if (first === "0") return;
                setFirst(first + e.target.textContent);
              } else {
                if (second === "0" || typeof sum !== "undefined") return;
                setSecond((value) => value + e.target.textContent);
              }
            }}
          >
            0
          </button>
          <button className="btn btn-danger" onClick={clear}>
            C
          </button>

          <button className="btn btn-danger" onClick={result}>
            =
          </button>
        </div>
        <div className="actions">
          <button
            className="btn btn-danger"
            onClick={(e) => {
              if (first !== "" && typeof sum === "undefined")
                setAction(e.target.textContent);
            }}
          >
            +
          </button>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              if (first !== "" && typeof sum === "undefined")
                setAction(e.target.textContent);
            }}
          >
            -
          </button>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              if (first !== "" && typeof sum === "undefined")
                setAction(e.target.textContent);
            }}
          >
            *
          </button>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              if (first !== "" && typeof sum === "undefined")
                setAction(e.target.textContent);
            }}
          >
            /
          </button>
        </div>
      </div>

      <div className="rez">
        {first}
        {action}
        {second}
        {sum}
      </div>
    </>
  );
}

export default Calc;
