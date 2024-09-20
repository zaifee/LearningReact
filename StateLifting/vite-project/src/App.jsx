
import { useState } from 'react'
import './App.css'
import Card from './Components/card'
import Card1 from './Components/Card1';

function App() {
 
  const [name, setName] = useState('');
  return (
    <>
      <div>
       <Card  name={name} setName={setName}/>
       {/* <p>I'm inside the parent component and value of name is : {name}</p> */}
       <Card1 name={name} setName={setName}/>
      </div>
    </>
  )
}

export default App
