import React, { useState, useEffect } from 'react'
import '../style/Home.css'
import PokemonCard from '../components/PokemonCard.js'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokemons } from '../store/actions'

function App () {

  const dispatch = useDispatch()
  const pokemonsData = useSelector(state => state.pokemons.pokemons)
  const [show, setShow] = useState({ start: 0, end: 12 })
  const loading = useSelector(state => state.pokemons.loading)

  useEffect(() => {
    dispatch(fetchPokemons())
  }, [])

  function next () {
    setShow({ start: show.end, end: show.end + 12})
    document.documentElement.scrollTop = 0 
  }

  function previous () {
    setShow({ start: show.start - 12, end: show.start })
    document.documentElement.scrollTop = 0
  }
  
  const showContent = pokemonsData.slice(show.start, show.end)
  const pokemonCard = showContent.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)

  if (loading) return <img className="loading-img" src="https://media.giphy.com/media/31vamYdZV5ISQ/giphy.gif" alt="Loading...  "></img>

  return (
    <div className="Home">
      <div className="card-container">
        { pokemonCard }
      </div>
      <div className="btn-container">
        { show.start - 12 >= 0 ? <button className="nav-btn" onClick={previous}>Previous</button>  : '' }
        { show.start + 12 <= pokemonsData.length ? <button className="nav-btn" onClick={next}>Next</button> : ''}
      </div>
    </div>
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
