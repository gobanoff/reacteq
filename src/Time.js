import { useEffect, useState } from "react";
import "./Time.css";

function Time() {
  const [date, setDate] = useState(new Date());
  const [color, setColor] = useState("red");

  const tm = () => {
    setDate(new Date());
    setColor(getRandomColor());
  };

  useEffect(() => {
    const clock = setInterval(() => tm(), 1000);

    return () => clearInterval(clock);
  }, [date]);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <>
      <div id="time" style={{ background: color }}></div>

      <p style={{ color: color }}>{date.toString()}</p>
    </>
  );
}

export default Time;
