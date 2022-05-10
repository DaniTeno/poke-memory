import { BtnLinkTo } from "./BtnLinkTo"

export const Menu = () => {
  return (
    <article id="menu">
      <BtnLinkTo text={"Play"} to={"play"}/>
      <BtnLinkTo text={"Options"} to={"options"}/>
    </article>
  )
}