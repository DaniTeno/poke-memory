export const fetchingData = async (url) => {
  return await fetch(url)
  .then(res => res.ok ? res.json() : Promise.reject(res))
}
