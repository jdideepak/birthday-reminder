import Person from "./Person"
import { Link, useLocation, useHistory } from "react-router-dom"
// import birthDayList from "./data"
import Heading from "./Heading"
import "./EditDetails.css"
import EditForm from "./EditForm"
import { useState } from "react"

const EditDetails = ({ birthDayList, setBirthDayList }) => {
  const location = useLocation()
  const history = useHistory()

  const id = location.pathname.substr(6)
  const person = birthDayList.filter((item) => {
    return item.id === id
  })

  function handleUpdateButton() {
    const name = document.querySelector("#name").value
    const imgUrl = document.querySelector("#img-url").value
    const dobDay = document.querySelector(".day").value
    const dobMonth = document.querySelector(".month").value
    const dobYear = document.querySelector(".year").value

    let newBirthdayListAfterUpdate = birthDayList.filter((item) => {
      return item.id !== id
    })
    newBirthdayListAfterUpdate.push({
      id: id,
      name: name,
      profile_pic: imgUrl,
      dob: `${dobYear}-${dobMonth}-${dobDay}`,
    })

    localStorage.setItem(
      "birthDayList",
      JSON.stringify(newBirthdayListAfterUpdate)
    )

    // console.log("seee hereee", birthDayList)
    // console.log("seee hereee again", newBirthdayListAfterUpdate)
    setBirthDayList(newBirthdayListAfterUpdate)

    history.push("/")
  }
  function handleDeleteButton() {
    const birthDayListAfterDeletion = birthDayList.filter((item) => {
      return item.id !== id
    })
    localStorage.setItem(
      "birthDayList",
      JSON.stringify(birthDayListAfterDeletion)
    )

    setBirthDayList(birthDayListAfterDeletion)
    history.push("/")
  }

  const [personDetail, setPersonDetail] = useState(person[0])
  return (
    <div className="edit-section">
      <div className="top-heading-container">
        <Heading headingText="Edit" />
        <Link className="icon" to="/">
          <i className="fas fa-times"></i>
        </Link>
      </div>
      {/* {console.log("okay", personDetail)} */}
      <Person person_details={personDetail} />
      <EditForm personDetail={personDetail} setPersonDetail={setPersonDetail} />
      <div className="small-btn-section">
        <button
          className="small-btn primary"
          onClick={(e) => handleUpdateButton(e)}
        >
          Update
        </button>
        <button
          className="small-btn danger"
          onClick={(e) => handleDeleteButton(e)}
        >
          Delete this person
        </button>
      </div>
    </div>
  )
}

export default EditDetails
