import { useEffect, useState } from "react"
import { getSuggestions } from "../helpers/getSuggestions"

export const useFetchSuggestions = (word) => {

  const [state, setstate] = useState({
    data: []
  })

  useEffect(() => {

    getSuggestions(word)
      .then(words => {
        setstate({
          data: words
        })
      })

  }, [word])

  return state

}