export const getSuggestions = async (word) => {

  const url = `https://api.giphy.com/v1/gifs/search/tags?api_key=4afJPEKxfb1Gung5xFStl97MAwPGUVIY&q=${encodeURI(word)}`
  const resp = await fetch(url)
  const {data} = await resp.json()

  const words = data.map(word => word.name)
  return words

}