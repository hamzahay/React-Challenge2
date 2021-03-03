import React from 'react'
import useFetch from '../hooks/useFetch'
import '../style/pokemonCard.css'
import { useHistory } from 'react-router-dom'

function PokemonCard (props) {

  const pokemon = props.pokemon
  const history = useHistory()

  function toDetail () {
    history.push(`/pokemon/${pokemon.id}`)
  }

  return (
    <div className="card" onClick={toDetail}>
      <div className="card-top">
        <h5 className="name">{pokemon.name}
        </h5>
      </div>
      { pokemon.sprites && <img className="card-img" src={pokemon.sprites} alt="pokemon_image"></img> }
    </div>
  )
}

/*
  useEffect(() => {
    setLoading(true)
    fetch(props.pokemon.url)
      .then(res => res.json())
      .then(pokemonData => {
        console.log(pokemonData)
        setPokemon(pokemonData)})
      .finally(() => setLoading(false))
  }, [props])
  */

/*
class PokemonCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pokemon: {}
    }
  }

  componentDidMount () {
    fetch(this.props.pokemon.url)
    .then(res => res.json())
    .then(pokemonData => {
      this.setState({
        pokemon: pokemonData
      })
    })
  }

  render () {
    return (
      <div className="card">
        <h2 className="name">{this.state.pokemon.name}</h2>
      </div>
    )
  }
}
*/

export default PokemonCard