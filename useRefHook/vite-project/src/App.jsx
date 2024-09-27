import { useState } from 'react'

import './App.css'
import { useEffect, useRef } from 'react' 


function App() {
//   let val = useRef(0);
//   let btnRef = useRef(0);
  
//   const [count, setCount] = useState(0);

//   function handleIncrement(){
//     val.current = val.current + 1;
//     console.log("Value of val: ", val.current);
//     setCount(count+1);
//   }

//   useEffect(() => {
//    console.log("main firse render ho gya ho")
  
//   }
// )

// function changeColor(){
//   btnRef.current.style.backgroundColor = "red";
// }
  const [time, setTime] = useState(0);

  // useRef me null dena tha
  let timerRef = useRef(null);

  
  function startTimer(){
     timerRef.current = setInterval(() => {
      setTime(time => time+1)
     }, 1000)
  }

  function stopWatch(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }


  function resetWatch(){
    stopWatch();
    setTime(0);
  }

  return (
    <>
      <div>
        {/* stop-watch code */}
        <h1>StopWatch: {time} seconds</h1>

        <button onClick={startTimer}>
            Start
        </button>
        <br />
        <br />

        <button onClick={stopWatch}>
          Stop 
        </button>
        <br />
        <br />


        <button onClick={resetWatch}>
          Reset 
        </button>



        {/* Section-1 code  */}
        {/* <button ref = {btnRef} 
        onClick={handleIncrement}>
          Increment
        </button> */}

        {/* <br />

        <div>
          count: {count}
        </div> */}

      
{/*       
      <br />

      <button onClick={changeColor}>
        Change button BackGround color
      </button> */}

      </div>
    </>
  )
}

export default App
