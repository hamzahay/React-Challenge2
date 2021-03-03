import React, { useState, useEffect } from 'react'
import '../style/Home.css'
import PokemonCard from '../components/PokemonCard.js'
import useFetch from '../hooks/useFetch'

function App () {

  const [data] = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const [pokemons, setPokemons] = useState([])
  const [endOfArray, setEnd] = useState(0)
  const [pokemonsData, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (pokemonsData.length > 0) {
      setPokemons(pokemonsData.slice(0, 12))
      setEnd(12)
    }
  }, [pokemonsData])

  useEffect( async () => {
    if (data.results) {
      setLoading(true)
      let newData = []
      for (const pokemon of data.results) {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        let types = []
        for(const key in data.types) {
          types.push(data.types[key].type.name)
        }
        const pokemonData = {
          id: data.id,
          name: data.name,
          url: pokemon.url,
          sprites: data.sprites.front_default,
          originalArt: data.sprites.other['official-artwork'].front_default,
          types: types
        }
        newData.push(pokemonData)
      }
      setData(newData)
      setLoading(false)
    }
  }, [data])

  function next () {
    setPokemons(pokemonsData.slice(endOfArray, endOfArray + 12))
    setEnd(endOfArray + 12)
    document.documentElement.scrollTop = 0
  }

  function previous () {
    setPokemons(pokemonsData.slice(endOfArray - 24, endOfArray - 12))
    setEnd(endOfArray - 12)
    document.documentElement.scrollTop = 0
  }

  const pokemonCard = pokemons.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)

  return (
    <div className="Home">
      { !loading ?  
        <div className="card-container">
          { pokemonCard }
        </div> 
        : 
        <img className="loading-img" src="https://media.giphy.com/media/31vamYdZV5ISQ/giphy.gif" alt="Loading...  "></img>
      }

      { !loading ?
        <div className="btn-container">
          { endOfArray - 12 > 0 ? <button className="nav-btn" onClick={previous}>Previous</button>  : '' }
          { endOfArray < 151 ? <button className="nav-btn" onClick={next}>Next</button> : ''}
        </div>
        :
        ''
      }
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
