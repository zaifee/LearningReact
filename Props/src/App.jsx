

import { useState } from 'react';
import './App.css'
import Button from './Components/Button'
import Card from './Components/Card'


function App() {
 
  const [count, setCount] = useState(0);

  function handleClick() {
     setCount(count+1);
  }


  return (
    <>
      <div>
        { 
        
          <Button handleClick={handleClick} text="click me" >
          <h1>{count}</h1>
          </Button> 
            
        /* <Card name="Mohd">
              <h1>Mohd Nawaz</h1>
              <p>Trying to learn react</p>
              <p>I will complete it soon</p>
         </Card >

         <Card Children="Me ek children ho">
              <h1>Hello Ji ! kya hal chal Mitro</h1>
          </Card>  */ }

      </div>
    </>
  )
}

export default App
