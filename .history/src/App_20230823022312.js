import logo from './logo.svg';
import React ,{useState} from 'react';
import './App.css';
import  './User';
import Student from './Student';

function App() {

  const [name,setName] = useState(0);
  const[value,setValue] = useState(null);
  const[status,setStatus] = useState(true);

  //simple function
  
  function apple()
  {
    setName(name+1)
  }

  function getValue(val)
  {
    console.log(val.target.value);
    setValue(val.target.value);
  }

  console.log("===================================================")
  return (
    <div className="App">
      {/* <h1>{name}</h1> */}
      {/* <button onClick={apple}>
        click me
      </button> */}
      {/* with the help of arrow function() */}
      {/* <button onClick={()=>{apple()}}>
        click me
      </button>
      <Student name={name} email={"shahbaz@gmail.com"} />
      <button onClick={()=>{setName("shahbaz")}}>
        update name
      </button> */}

      {/* get input value from box */}
      {/* <h2>{value}</h2>
      <input type='text' onChange={getValue}></input> */}


      {/* {
        status?<h1>hello world</h1>:null  
      } */}
      {/* <button onClick={setStatus(false)}>Hide</button>
      <button onClick={setStatus(true)}>Show</button> */}

      <h1>Handle from in react</h1>


    </div>
    
  );
}

export default App;
