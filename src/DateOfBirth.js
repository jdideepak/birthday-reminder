import "./DateOfBirth.css"

const DateOfBirth = ({ personDetail, setPersonDetail }) => {
  // const dobYear = personDetail.dob.substring(0, 4)
  // const dobMonth = personDetail.dob.substring(5, 7)
  // const dobDay = personDetail.dob.substring(8)

  function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str
    return str.substring(0, index) + chr + str.substring(index + 1)
  }
  function handleDayChange(e) {
    let day = e.target.value
    day = "" + day
    let updatedDate = personDetail.dob
    updatedDate = setCharAt(updatedDate, 8, day[0])
    updatedDate = setCharAt(updatedDate, 9, day[1])
    // console.log(personDetail.dob)
    // console.log(updatedDate)
    setPersonDetail({ ...personDetail, dob: updatedDate })
  }
  function handleMonthChange(e) {
    let month = e.target.value
    month = "" + month
    // console.log("see focus here", month)
    let updatedDate = personDetail.dob
    updatedDate = setCharAt(updatedDate, 5, month[0])
    updatedDate = setCharAt(updatedDate, 6, month[1])
    setPersonDetail({ ...personDetail, dob: updatedDate })
  }
  function handleYearChange(e) {
    let year = e.target.value
    let updatedDate = personDetail.dob
    updatedDate = setCharAt(updatedDate, 0, year[0])
    updatedDate = setCharAt(updatedDate, 1, year[1])
    updatedDate = setCharAt(updatedDate, 2, year[2])
    updatedDate = setCharAt(updatedDate, 3, year[3])
    setPersonDetail({ ...personDetail, dob: updatedDate })
  }

  // monthList
  // const monthName = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ]
  let monthList = []
  for (let i = 1; i <= 12; i++) {
    let temp = i
    temp = "" + temp
    if (i < 10) temp = "0" + temp
    monthList.push(temp)
  }

  //daysList
  let daysList = []
  for (let i = 1; i <= 31; i++) {
    let temp = i
    temp = "" + temp
    if (i < 10) temp = "0" + temp
    daysList.push(temp)
  }

  //yearList
  let yearList = []
  for (let i = 1900; i <= 2030; i++) {
    let temp = i
    temp = "" + temp
    yearList.push(temp)
  }

  // console.log(dobDay, dobMonth, dobYear)
  return (
    <div className="dob-container">
      <div className="dob-item">
        <label htmlFor="month">Month</label>
        <select className="month" onChange={(e) => handleMonthChange(e)}>
          {monthList.map((month) => {
            return (
              <option key={month} value={month}>
                {month}
              </option>
            )
          })}
        </select>
        {/* <input
          name="month"
          className="month"
          list="month"
          onChange={(e) => handleMonthChange(e)}
          // value={dobMonth}
          placeholder={dobMonth}
        />
        <datalist id="month">
          {monthList.map((month) => {
            return <option key={month} value={month} />
          })}
        </datalist> */}
      </div>
      <div className="dob-item">
        <label htmlFor="">Day</label>
        {/* <input
          list="day"
          className="day"
          type="text"
          pattern="Internet Explorer|Firefox|Chrome|Opera|Safari"
          // min="1"
          // max="31"
          onChange={(e) => handleDayChange(e)}
          // value={dobDay}
          placeholder={dobDay}
        /> */}
        <select className="day" onChange={(e) => handleDayChange(e)}>
          {daysList.map((day) => {
            return (
              <option key={day} value={day}>
                {day}
              </option>
            )
          })}
        </select>
        <datalist id="day">
          {daysList.map((day) => {
            return <option key={day} value={day} />
          })}
        </datalist>
      </div>
      <div className="dob-item">
        <label htmlFor="">Year</label>
        {/* <input
          list="year"
          className="year"
          type="text"
          onChange={(e) => handleYearChange(e)}
          // value={dobYear}
          placeholder={dobYear}
        /> */}
        <select className="year" onChange={(e) => handleYearChange(e)}>
          {yearList.map((year) => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            )
          })}
        </select>
        <datalist id="year">
          {yearList.map((year) => {
            return <option key={year} value={year} />
          })}
        </datalist>
      </div>
    </div>
  )
}

export default DateOfBirth
