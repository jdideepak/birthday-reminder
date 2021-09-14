import { Link } from "react-router-dom"
import "./Button.css"

const Button = ({ btnTitle, link }) => {
  // console.log(link)
  return (
    <Link to={link}>
      <button className="btn">{btnTitle}</button>
    </Link>
  )
}

export default Button
