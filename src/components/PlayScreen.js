import { useEffect, useState } from "react"
import { fetchingData } from "../utils/fetchingData"
import { Loader } from "./Loader"
import { Playground } from "./Playground"


export const PlayScreen = ({ settings }) => {
  const { trys, difficulty } = settings
  const start = {
    selected: null,
    lastElement: null,
    revealed: 0,
    hp: trys
  }
  const [pokemon, setPokemon] = useState([])
  const [show, setShow] = useState(start)

  useEffect(() => {
    const getCards = async (url) => {
      const data = await fetchingData(url);
      let res = [];
      for (let i = 1; i <= difficulty; i++) {
        let { id, sprites, name } = await fetchingData(data.results[i].url)
        let card = {
          id,
          name,
          sprite: sprites.front_default
        }
        let cardAlt = {
          id,
          name: name + '-alt',
          sprite: sprites.front_default
        }
        res = [...res, card, cardAlt].sort(() => Math.random() - 0.5)
      }
      setPokemon(res)
    }
    const randomIn20 = `${Math.round(Math.random() * 8)}0`


    getCards(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${randomIn20}`)
    return setPokemon([])
  }, [difficulty])

  const handlerShow = (e) => {
    const element = e.target;
    const current = element.dataset.card;
    const isSelected = Array.from(element.classList).includes('hidden')

    if (!show.selected && !isSelected) {
      console.log(isSelected)
      element.classList.add('hidden')
      setShow({ ...show, selected: current, lastElement: element })
    }
    if (show.selected) {
      if (isSelected) return
      element.classList.add('hidden')
      if (show.selected === current) {
        setShow({ ...show, revealed: show.revealed++ })
      }
      else {
        setTimeout(() => {
          element.classList.remove('hidden')
          show.lastElement.classList.remove('hidden')
        }, 800)
        setShow({ ...show, hp: show.hp-- })
      }
      setShow({ ...show, selected: null, lastElement: null })
    }
  }

  return (
    <>
      {difficulty * 2 === pokemon.length
        ? <Playground pokemon={pokemon} handlerShow={handlerShow} show={show} difficulty={difficulty} />
        : <Loader trys={trys} />
      }
    </>
  )
}