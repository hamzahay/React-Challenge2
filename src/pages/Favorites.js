import React, { useState, useEffect } from 'react'
import '../style/favorites.css'
import PokemonCard from '../components/PokemonCard'
import { useSelector } from 'react-redux'

function Favorites () {

  const favorites = useSelector(state => state.favorites.favorites)
  const pokemons = useSelector(state => state.pokemons.pokemons)
  const [favoritesData, setData] = useState([])
  const [show, setShow] = useState({ start: 0, end: 12 })
  const [showData, setShowData] = useState([])
  const [loading, setLoading] = useState(false)
  const filter = useSelector(state => state.pokemons.filter)

  useEffect(() => {
    setLoading(true)
    const newData = []
    favorites.forEach(fav => {
      pokemons.forEach(pokemon => {
        if (fav.id === pokemon.id) {
          newData.push(pokemon)
        }
      })
    })
    setData(newData)
    setLoading(false)
  }, [favorites, pokemons])

  function next () {
    setShow({ start: show.end, end: show.end + 12})
    document.documentElement.scrollTop = 0 
  }

  function previous () {
    setShow({ start: show.start - 12, end: show.start })
    document.documentElement.scrollTop = 0
  }

  useEffect(() => {
    const newData = favoritesData.filter(filterData => filterData.name.includes(filter))
    setShowData(newData)
  }, [filter, favoritesData])

  const showContent = showData.slice(show.start, show.end)
  const pokemonCard = showContent.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)

  if (loading) return <img className="loading-img" src="https://media.giphy.com/media/31vamYdZV5ISQ/giphy.gif" alt="Loading...  "></img>

  return (
    <div className="Favorites">
      <div className="card-container">
        { pokemonCard }
      </div>
      <div className="btn-container">
        { show.start - 12 >= 0 ? <button className="nav-btn" onClick={previous}>Previous</button>  : '' }
        { show.start + 12 <= showData.length ? <button className="nav-btn" onClick={next}>Next</button> : ''}
      </div>
    </div>
  )
}

export default Favorites