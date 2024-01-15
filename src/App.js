import {  useState } from "react";
import './App.css';

function App() {
  const [colorb, setColorb] = useState("");

const cl= () => {
  setColorb('red');
}
const cl1= () => {
  setColorb('blue');
}
const cl2= () => {
  setColorb('green');
}
const cl3= () => {
  setColorb('yellow');
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
          
          
          
          
          </div>







    </div>
  );
}

export default App;
