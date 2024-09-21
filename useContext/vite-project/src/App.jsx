

import './App.css'
import {createContext, useState} from 'react'
import ChildA from './Components/ChildA';

//Step1:  crete context
// Step2: wrap all the child inside the provider
// step3: pass the value
// step4: consumer ke andar jakar consume karlo


const userContext = createContext(); 
const themeContext = createContext();

function App() {
  const [user, setUser] = useState({name:"Mohd Nawaz"});

  const [theme,setTheme] = useState("light");
  return (
    <>
    
    <userContext.Provider value={user}>
    
    <themeContext.Provider value={{theme, setTheme}}>
      <div id="container" style={{backgroundColor:theme === 'light'? "beige":"black"}}>
      <ChildA/>
      </div>
    </themeContext.Provider>


    </userContext.Provider>
    
   { /* <userContext.Provider value={user}>
    <ChildA />
    </userContext.Provider> */}
    
    </>
  )
}

export default App
export {userContext} 
export {themeContext};
