import React from 'react'
import PokemonCard from './PokemonCard'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: [],
      pokemonsDetail: [],
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

    return (
      <div>
        <h1>test hello hello</h1>
        <h1> test 2</h1>
        <ul>
          { this.state.pokemons.map((pokemon) => 
            <li key={pokemon.name}>{ pokemon.name }</li>
            )}
        </ul>
      </div>
    )
  }
}

export default App;
