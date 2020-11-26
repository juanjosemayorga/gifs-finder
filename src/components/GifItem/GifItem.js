import React from 'react'
import {
  Container
} from './GifItemStyles'

export const GifItem = ({ url, title }) => {
  return (
    <Container>
      <img src={url} alt={title}/>
    </Container>
  )
}
