import "./TodaysCount.css"
// import logo from "./images/chair-ballon.png"
import logo from "./images/girl-with-ballon.png"

const TodaysCount = ({ birthdayOnTodayCnt }) => {
  if (birthdayOnTodayCnt !== 0)
    return (
      <h1 className="birthday-cnt-heading">
        {birthdayOnTodayCnt} birthdays today
      </h1>
    )
  else
    return (
      <>
        <h1>No birthdays today</h1>
        <img className="empty-img" src={logo} alt="nothing showcase" />
      </>
    )
}

export default TodaysCount
