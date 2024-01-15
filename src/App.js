import {  useEffect, useState } from "react";
import './App.css';

function App() {
  const [colorb, setColorb] = useState("");
  const [count, setCount] = useState(0);

 


const cl= () => {
  setColorb('red'); setCount(count+1) ;
}
const cl1= () => {
  setColorb('blue');setCount(count+1) ;
}
const cl2= () => {
  setColorb('green');setCount(count+1) ;
}
const cl3= () => {
  setColorb('yellow');setCount(count+1) ;
}
  return ( 
    <div className="App">
      <div className='box'style={{ background: colorb }}><button className="btn btn-success"   onClick={cl}
          >change</button>
          <button className="btn btn-info"   onClick={cl1}
          >change</button>
          <button className="btn btn-warning"   onClick={cl2}
          >change</button>
          <button className="btn btn-primary"   onClick={cl3}
          >change</button>
          
          <div className='box1'>{count}
          
          
          
          
          </div>
          
          
          </div>







    </div>
  );
}

export default App;
