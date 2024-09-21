import React, {useContext} from 'react'

import { themeContext, userContext} from '../App'




const ChildC = () => {
    const user = useContext(userContext); 
    const {theme, setTheme} = useContext(themeContext);
    function handleClick(){
        if(theme === 'light'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }
  return (
    <div>
       
       
        {/* {theme} */ }
        <button onClick={handleClick}>
            Change Theme
        </button>
       {/* {user.name} */}
       
       {user.name};
    </div>
  )
}

export default ChildC

