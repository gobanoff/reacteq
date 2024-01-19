import { useState,useEffect } from "react";
import "./Box.css";

function Box() {
  const [count, setCount] = useState(0);
useEffect(()=>{
  const timer = setInterval(() => {setCount((count)=>count+1)}, 1000);
  return () => clearInterval(timer);
},[])
  
  return (
    
      <div className="box2" >
        <span>{count}</span>
    </div>
  );
}

export default Box ;
