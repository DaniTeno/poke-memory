import { Link, useLocation } from "react-router-dom"
import { BtnLinkTo } from "./BtnLinkTo"
const difficultyLevel = {
  8: "easy",
  10: "medium",
  12: "hard"
}
const pokeapiLogo = 'https://daniteno.000webhostapp.com/project-folder/memory-game/component/title.png'

export const Header = ({ settings }) => {
  const { trys, difficulty } = settings
  const pathPlay = useLocation().pathname === '/play'
  const pathMenu = useLocation().pathname !== '/'
  return (
    <header>
      {pathPlay
        ? <>
          <div id='title' className="column">
            <h1>
              <p className="yellow">
                POKE
              </p>
              -
              <p className="red">
                MEMORY
              </p>
            </h1>
          </div>
          <nav className="column">
            <a className="btn" href="https://new-portfolio-gules.vercel.app" target='_blank' rel='noreferrer'>
              <p>Portfolio</p>
              <span id='slide'></span>
            </a>
            {pathMenu
              ? <BtnLinkTo text="Back to menu" to="/" id={'home-btn'} />
              : null
            }
          </nav>
        </>
        : <>
          <Link to="/options">
            <section id="settings" >
              <b className="white">Settings</b>
              <p className="l-grey">Trys: {trys}</p>
              <p className="l-grey">Difficulty: {difficultyLevel[difficulty]}</p>
            </section>
          </Link>
          <div id='title' className="column">
            <h1>
              <p className="yellow">
                POKE
              </p>
              -
              <p className="red">
                MEMORY
              </p>
            </h1>
            <p className="l-grey">powered by:
              <a href="https://pokeapi.co" rel='noreferrer' target="_blank">
                <img src={pokeapiLogo} alt="pokeapi" />
              </a>
            </p>
          </div>
          <nav className="column">
            <a className="btn" href="https://new-portfolio-gules.vercel.app" target='_blank' rel='noreferrer'>
              <p>Portfolio</p>
              <span id='slide'></span>
            </a>
            {pathMenu
              ? <BtnLinkTo text="Back to menu" to="/" id={'home-btn'} />
              : null
            }
          </nav>
        </>
      }
    </header>
  )
}