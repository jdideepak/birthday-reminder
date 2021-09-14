import DateOfBirth from "./DateOfBirth"
import "./EditForm.css"

const EditForm = ({ personDetail, setPersonDetail }) => {
  function handleOnChangeName(e) {
    // console.log(e.target.value)
    // console.log(personDetail)
    setPersonDetail({ ...personDetail, name: e.target.value })
  }
  function handleOnChangeImageURL(e) {
    setPersonDetail({ ...personDetail, profile_pic: e.target.value })
  }
  return (
    <form action="#" className="edit-form">
      <div className="form-item">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={personDetail.name}
          onChange={(e) => handleOnChangeName(e)}
        />
      </div>
      <div className="form-item">
        <label htmlFor="img-url">Profile Pic Url</label>
        <input
          id="img-url"
          type="text"
          value={personDetail.profile_pic}
          onChange={(e) => handleOnChangeImageURL(e)}
        />
      </div>
      <div className="form-item">
        <label className="label-birth-date" htmlFor="">
          Birth Date
        </label>
        <DateOfBirth
          personDetail={personDetail}
          setPersonDetail={setPersonDetail}
        />
      </div>
    </form>
  )
}

export default EditForm
