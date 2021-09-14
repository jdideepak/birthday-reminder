import "./DateOfBirth.css"

const DateOfBirth = ({ personDetail, setPersonDetail }) => {
  const dobYear = personDetail.dob.substring(0, 4)
  const dobMonth = personDetail.dob.substring(5, 7)
  const dobDay = personDetail.dob.substring(8)
  function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str
    return str.substring(0, index) + chr + str.substring(index + 1)
  }
  function handleDayChange(e) {
    let day = e.target.value
    if (day.length === 1) day = "0" + day
    let updatedDate = personDetail.dob
    updatedDate = setCharAt(updatedDate, 8, day[0])
    updatedDate = setCharAt(updatedDate, 9, day[1])

    // console.log(personDetail.dob)
    // console.log(updatedDate)
    setPersonDetail({ ...personDetail, dob: updatedDate })
  }
  function handleMonthChange(e) {
    let month = e.target.value
    if (month.length === 1) month = "0" + month
    let updatedDate = personDetail.dob
    updatedDate = setCharAt(updatedDate, 5, month[0])
    updatedDate = setCharAt(updatedDate, 6, month[1])
    setPersonDetail({ ...personDetail, dob: updatedDate })
  }
  function handleYearChange(e) {
    let year = e.target.value
    if (year.length === 0) year = "0000"
    if (year.length === 1) year = "000" + year
    if (year.length === 2) year = "00" + year
    if (year.length === 3) year = "0" + year
    if (year.length > 4) year = year.substring(0, 4)
    let updatedDate = personDetail.dob
    updatedDate = setCharAt(updatedDate, 0, year[0])
    updatedDate = setCharAt(updatedDate, 1, year[1])
    updatedDate = setCharAt(updatedDate, 2, year[2])
    updatedDate = setCharAt(updatedDate, 3, year[3])
    setPersonDetail({ ...personDetail, dob: updatedDate })
  }

  // console.log(dobDay, dobMonth, dobYear)
  return (
    <div className="dob-container">
      <div className="dob-item">
        <label htmlFor="">Month</label>
        <input
          className="month"
          type="number"
          min="1"
          max="12"
          onChange={(e) => handleMonthChange(e)}
          value={dobMonth}
        />
      </div>
      <div className="dob-item">
        <label htmlFor="">Day</label>
        <input
          className="day"
          type="number"
          min="1"
          max="31"
          onChange={(e) => handleDayChange(e)}
          value={dobDay}
        />
      </div>
      <div className="dob-item">
        <label htmlFor="">Year</label>
        <input
          className="year"
          type="number"
          onChange={(e) => handleYearChange(e)}
          value={dobYear}
        />
      </div>
    </div>
  )
}

export default DateOfBirth
