// import birthdayList from "./data"
import Person from "./Person"
import "./App.css"
import TodaysCount from "./TodaysCount"
import Button from "./Button"
// import birthDayList from "./data"

const App = ({ birthDayList, setBirthDayList }) => {
  // Function to check whether the person have their birthday on today's date
  function isBirthdayToday(dateString) {
    const today = new Date()
    const birthDate = new Date(dateString)
    if (
      today.getUTCMonth() === birthDate.getMonth() &&
      today.getDate() === birthDate.getDate()
    ) {
      return true
    }
    return false
  }

  // console.log("in app", birthDayList)
  let todaysBirthdayList = birthDayList.filter((person) => {
    return isBirthdayToday(person.dob) === true
  })

  let birthdayOnTodayCnt = todaysBirthdayList.length

  return (
    <>
      <TodaysCount birthdayOnTodayCnt={birthdayOnTodayCnt} />
      {todaysBirthdayList.map((person) => {
        return <Person key={person.id} person_details={person} />
      })}
      <div className="btn-container">
        <Button link="/add" btnTitle="Add a new Person" />
        <Button link="/viewall" btnTitle="View All" />
      </div>
    </>
  )
}

export default App
