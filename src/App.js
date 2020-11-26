import { useState } from 'react';
import { AddWord } from './components/AddWord/AddWord';
import { GifGrid } from './components/GifGrid/GifGrid';
import {
  Container,
  H1
} from './AppStyles'

function App() {

  const [search, setSearch] = useState('search')

  return (
    <Container>
      <H1>Busca los GIF's más divertidos!</H1>
      <AddWord setSearch={setSearch}/>
      <hr/>
      <GifGrid search={search}/>
    </Container>
  );
}

export default App;
