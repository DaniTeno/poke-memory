import { End } from "./End"

export const Playground = ({ pokemon, handlerShow, show, difficulty }) => {
  const setColumnsGrid = {
    8: 'columns-4',
    10: 'columns-5',
    12: 'columns-6',
  }
  return (
    <>
      {show.hp > 0
        ? show.revealed === difficulty
          ? <End text='Nice, you win' />
          : <article id="playground" className={setColumnsGrid[difficulty]}>
            {pokemon.map((el) => {
              return (
                <div className='card-container' key={el.name + "card"}>
                  <img src={el.sprite} key={"card-" + el.name} alt={el.name} className={el.id + "-" + el.name} />
                  <span data-card={`${el.id}`} className='cover' onClick={(e) => handlerShow(e)}></span>
                </div>
              )
            })}
          </article>
        : <End text='Sorry, you lose' />
      }
    </>
  )
}