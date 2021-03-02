import React from 'react'
import './pokemonCard.css'

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

export default PokemonCard