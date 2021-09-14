import Person from "./Person"
// import birthDayList from "./data"
import Heading from "./Heading"
import "./Add.css"
import EditForm from "./EditForm"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { Link, useHistory } from "react-router-dom"
import randomImagesList from "./randomImages"

const Add = ({ birthDayList, setBirthDayList }) => {
  const history = useHistory()

  function getRandomImage() {
    const randNum = Math.floor(Math.random() * randomImagesList.length + 1)
    return `https://source.unsplash.com/${randomImagesList[randNum]}/100x100`
  }

  const [personDetail, setPersonDetail] = useState({
    id: uuidv4(),
    name: "Name of Person",
    dob: "2010-06-15",
    profile_pic: getRandomImage(),
  })

  function handleCancelButton(e) {
    history.push("/")
  }

  function handleSaveButton(e) {
    // console.log(birthDayList)
    birthDayList.push(personDetail)
    localStorage.setItem("birthDayList", JSON.stringify(birthDayList))
    setBirthDayList(birthDayList)

    history.push("/")
  }

  return (
    <div className="edit-section">
      <div className="top-heading-container">
        <Heading headingText="Add a new person" />
        <Link className="icon" to="/">
          <i className="fas fa-times"></i>
        </Link>
      </div>
      <Person person_details={personDetail} />
      <EditForm personDetail={personDetail} setPersonDetail={setPersonDetail} />
      <div className="small-btn-section">
        <button
          className="small-btn danger"
          onClick={(e) => handleCancelButton(e)}
        >
          Cancel
        </button>
        <button
          className="small-btn primary"
          onClick={(e) => handleSaveButton(e)}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default Add
