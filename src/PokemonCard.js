import React, { useState, useEffect } from 'react'
import './pokemonCard.css'

function PokemonCard (props) {

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    fetch(this.props.pokemon.url)
    .then(res => res.json())
    .then(pokemonData => setPokemon(pokemonData))
  }, [])

  return (
    <div className="card">
      <h2 className="name">{pokemon.name}</h2>
    </div>
  )
}


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