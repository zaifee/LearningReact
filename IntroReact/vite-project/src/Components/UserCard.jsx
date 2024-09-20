
import "./UserCard.css"
 

const UserCard = (props) => {
  return (
    <div className="user-container" style={props.style}>
      <p id="title">{props.name}</p>
      <img id='user-img' src={props.image} alt="Mohd"/>
      <p id='user-desc'>{props.desc}</p>
    </div>
  )

}

export default UserCard
