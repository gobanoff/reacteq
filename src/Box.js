import { useState, useEffect } from "react";
import "./Box.css";
import App from "./App";

function Box() {
  
  const [count1, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <App cnt={count1} />;
}

export default Box;
