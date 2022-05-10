export const Loader = ({trys}) => {
  return (
    <figure className='container column' id="loader">
      <img src='https://samherbert.net/svg-loaders/svg-loaders/grid.svg' alt='loader' />
      <figcaption>Loading... Remember, you have {trys} trys.</figcaption>
    </figure>
  )
}