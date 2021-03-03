import React, { useState, useEffect } from 'react'
import '../style/pokemonCard.css'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import favBlank from '../assets/favorite-blank-icon.png'
import favFill from '../assets/favorite-red-icon.png'
import { addFavorite, removeFavorite } from '../store/actions'

function PokemonCard (props) {

  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)
  const pokemon = props.pokemon
  const history = useHistory()
  const [favorite, setFavorite ] = useState(false)

  useEffect(() => {
    favorites.forEach(fav => {
      if (fav.id === pokemon.id) {
        setFavorite(true)
      }
    })
  }, [favorites, pokemon])

  function toDetail () {
    history.push(`/pokemon/${pokemon.id}`)
  }

  function addFav () {
    dispatch(addFavorite({ id: pokemon.id }))
  }

  function removeFav () {
    const newFav = favorites.slice()
    const index = newFav.map(fav => fav.id).indexOf(pokemon.id)
    if (index > -1) newFav.splice(index, 1)
    dispatch(removeFavorite(newFav))
    setFavorite(false)
  }

  return (
    <div className="card">
      <div className="card-top">
        <h5 className="name" onClick={toDetail}>{pokemon.name}</h5>
        { !favorite ? 
          <img className="fav-img" src={favBlank} alt="favorite-icon" onClick={addFav}></img> : 
          <img className="fav-img" src={favFill} alt="favorite-icon" onClick={removeFav}></img>
          }
      </div>
      { pokemon.sprites && <img className="card-img" src={pokemon.sprites} alt="pokemon_image" onClick={toDetail}></img> }
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