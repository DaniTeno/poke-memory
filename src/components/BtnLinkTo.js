import { Link } from "react-router-dom";

export const BtnLinkTo = ({ text, to = "", clickAction = false, id = false, spanClass = false }) => {
  if (typeof text != "string" ||
    typeof to != "string") return console.error('params should be only strings');
  return (
    <Link
      className="btn"
      to={to}
      onClick={clickAction}
      id={id ? id : null}
    >
      <p>{text}</p>
      <span id='slide'></span>
    </Link>
  )
}