// import React from 'react'

// const Button = (props) => {
//   return (
//     <div>
//       <button onClick={props.handleClick}>
//         Click Me
//       </button>
//     </div>
//   )
// }

// export default Button


import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props.handleClick}>
        {props.text}

      </button>
    </div>
  )
}

// Adding propTypes validation
Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default Button
