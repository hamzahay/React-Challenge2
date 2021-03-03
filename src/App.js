import React from 'react'
import Home from './pages/Home.js'
import Navbar from './components/Navbar'
import Pokemon from './pages/Pokemon'
import Favorites from './pages/Favorites'
import { Route, Switch } from 'react-router-dom'

function App () {
  return (
    <Route>
      <Navbar />
      <Switch>
        <Pokemon path="/pokemon/:id" />
        <Favorites path="/favorites" />
        <Home path="/" />
      </Switch>
    </Route>
  )
}

/*
let types = []
  for(const key in data.types) {
    types.push(data.types[key].type.name)
  }
const pokemonData = [{
  id: data.id,
  name: data.name,
  url: pokemon.url,
  sprites: data.sprites.front_default,
  originalArt: data.sprites.other['official-artwork'].front_default,
  types: types
}]
*/

/*
useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
    .then(res => res.json())
    .then(data => setPokemons(data.results))
    .catch(err => console.log(err))
}, [])
*/

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
