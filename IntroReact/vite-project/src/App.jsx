import UserCard from "./Components/userCard"
import  "./App.css"

import profile1 from './assets/profile1.jpeg';
import profile2 from './assets/profile2.jpeg';
import profile3 from './assets/profile3.jpeg';

function App() {
 

  return (                                                                                      
    <>
        <div className="container" >
        <UserCard name="Nawaz" desc="hello" image={profile1} style={{"border-radius": "10px"}}/>
        <UserCard name="Zaifre" desc="kese ho" image={profile2}/>
        <UserCard name="Qureshi" desc="khuch bhi" image={profile3}/>

        </div>
    </>
  )
}

export default App
