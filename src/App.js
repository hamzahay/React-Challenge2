import React, { useState, useEffect } from 'react'
import './App.css'
import PokemonCard from './PokemonCard.js'


function App () {

  const [pokemons, setPokemon] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
    .then(res => res.json())
    .then(data => setPokemon(data.results))
  }, [])

  const pokemonCard = pokemons.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)

  return (
    <div className="card-container">
        {pokemonCard}
    </div>
  )
}

/*
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: [],
      test: ['test', 'eas']
    }
  }

  componentDidMount () {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemons: data.results
      })
    })
  }

  render () {
    const pokemonCard = this.state.pokemons.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)

    return (
      <div className="card-container">
          {pokemonCard}
      </div>
    )
  }
}
*/

export default App;
