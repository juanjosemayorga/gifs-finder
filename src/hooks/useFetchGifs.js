import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (search) => {

  const [state, setstate] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {

    getGifs(search)
      .then(gifs => {
        setstate({
          data: gifs,
          loading: false
        })
      })

  }, [search])

  return state

}