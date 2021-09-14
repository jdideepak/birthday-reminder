import Button from "./Button"
// import birthdayList from "./data"
import Heading from "./Heading"
import Person from "./Person"
import SmallHeading from "./SmallHeading"

const ViewAll = ({ birthDayList, setBirthDayList }) => {
  return (
    <>
      <Heading headingText="Full Birthdays list" />
      <SmallHeading smallHeadingText={`${birthDayList.length} items`} />
      {birthDayList.map((person) => {
        return <Person key={person.id} person_details={person} />
      })}
      <div className="btn-container">
        <Button link="/add" btnTitle="Add a new Person" />
        <Button link="/" btnTitle="Today's birthday" />
      </div>
    </>
  )
}

export default ViewAll
