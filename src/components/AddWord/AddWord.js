import React, { useState } from 'react'
import { useFetchSuggestions } from '../../hooks/useFetchSuggestions'
import {
  Form,
  Input,
  Button
} from './AddWordStyles'

export const AddWord = ({setSearch}) => {

  const [state, setState] = useState('')
  const { data } = useFetchSuggestions(state)

  const handleChange = e => {
    setState(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSearch(state)
    setState('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        list="word"
        value={state}
        onChange={handleChange}
        placeholder="¿Qué Gif quieres buscar?"
      />
      <datalist id="word" onChange={handleSubmit}>
        {
          data.map(word => {
            return <option key={word} value={word} onClick={handleSubmit}/>
          })
        }
      </datalist>
      <Button>BUSCAR</Button>
    </Form>
  )
}
