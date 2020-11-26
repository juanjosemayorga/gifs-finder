import React from 'react'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { GifItem } from '../GifItem/GifItem'
import {
  Container
} from './GifGridStyles'

export const GifGrid = ({ search }) => {

  const { data, loading } = useFetchGifs(search)

  return (
    <Container>
      {
        loading && <h3>Cargando datos...</h3>
      }
      {
        data.map(gif => <GifItem key={gif.id} {...gif}/>)
      }
    </Container>
  )
}
