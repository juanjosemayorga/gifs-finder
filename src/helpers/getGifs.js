export const getGifs = async (search) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(search)}&limit=20&api_key=4afJPEKxfb1Gung5xFStl97MAwPGUVIY`
  const resp = await fetch(url)
  const {data} = await resp.json()

  const gifs = data.map(gif => {
    return {
      id: gif.id,
      url: gif.images.original.url,
      title: gif.title
    }
  })

  return gifs

}