
import './App.css'
import { useState} from 'react'
import LoginBtn from './Components/LoginBtn';
import LogoutBtn from './Components/LogoutBtn';

function App() {
  // usestate miss hoa to changes update nhi honge
  const[isLoggedIn, setLoggedIn] = useState(true);
  // using ternary operator 
  return(isLoggedIn ? <LogoutBtn/> :  <LoginBtn />)

//   if(isLoggedIn){
//     return(
//       <LogoutBtn/>
//     )

//   }else{
//     return(
//       <LoginBtn />
//     )
//   }
// }
}
export default App
