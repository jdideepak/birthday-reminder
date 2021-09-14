import { Link } from "react-router-dom"
import "./Person.css"

const Person = ({ person_details }) => {
  // console.log(person_details)
  // Age calculation from person dob
  function getAge(dateString) {
    var today = new Date()
    var birthDate = new Date(dateString)
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }
  const age = getAge(person_details.dob)
  return (
    <div className="person-details">
      <img
        className="person-profile-pic"
        src={person_details.profile_pic}
        alt="profile pic"
      />
      <div className="person-name-age-wrapper">
        <h1 className="person-name">{person_details.name}</h1>
        <small className="person-age">{age} years</small>
      </div>
      <Link className="edit-icon" to={`edit:${person_details.id}`}>
        <i className="fas fa-pencil-alt"></i>
      </Link>
    </div>
  )
}

export default Person
