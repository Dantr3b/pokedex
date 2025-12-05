import { useState } from 'react'
import Header from './components/Header'
import PokemonList from './components/PokemonList'
import pokemonData from './data.json'
import './index.css'

function App() {
  const [pokemons] = useState(pokemonData)

  return (
    <div className="app">
      <Header />
      <main>
        <PokemonList pokemons={pokemons} />
      </main>
    </div>
  )
}

export default App
