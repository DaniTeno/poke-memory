import { BtnLinkTo } from "./BtnLinkTo"

export const End = ({ text }) => {
  return (
    <div id="end-screen">
      <p className="white">{text}</p>
      <BtnLinkTo text={'Back'} to='/'/>
    </div>
  )
}