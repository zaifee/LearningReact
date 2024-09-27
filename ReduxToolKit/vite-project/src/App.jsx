
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/CounterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector( (state) => state.counter.value);
  const dispatch = useDispatch();


  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }

  function handleResetClick(){
    dispatch(reset());
  }

   function handleIncrementByAmount(){
     dispatch(incrementByAmount(amount))
   }

  return (
    <>
     <div className='container'>
          <button onClick={handleIncrementClick}> + </button>
          <p>Count: {count}</p>
          <button onClick={handleDecrementClick}> - </button>
          <br />
          <br />
          <button onClick={handleResetClick}> Dispatch Click </button>
          <br />
          <br />
          <input type="Number"
          value = {amount} 
          placeholder='Enter amount' 
          onChange={(e) => setAmount(e.target.value)}/>
            <button onClick={handleIncrementByAmount}> IncrementByAmount </button>
      </div>
    </>
  )
}

export default App
