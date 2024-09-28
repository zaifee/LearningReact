import { useMemo, useState } from 'react'

import './App.css'

function App() {

  function expensiveTask(num){
    console.log("Expensive task begin.");
    // expensive opeation that's why we are using useMemo 
    for(let i=0; i<1000000000; i++) {}
          return num *= 2;
  }
  
  
  // const doubleVal = expensiveTask(input);
 

  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)
  let doubleVal = useMemo( () => expensiveTask(input), [input]);

  return (
    <>
     <div>
      <button onClick={ () => setCount(count+1)}>
        Increment Count
      </button>
      </div>
      <br />



      <div>
       Value of Count : {count}
      </div>     

       <input type="number"
        value={input}
       placeholder='Enter any number..' 
       onChange= { (e) => setInput(e.target.value)}

     
       />

       <div>
        Double: {doubleVal}
       </div>

    </>
  )
}

export default App
