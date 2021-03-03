import React, { useState, useEffect } from 'react'
import '../style/favorites.css'
import PokemonCard from '../components/PokemonCard'
import { useSelector } from 'react-redux'

function Favorites () {

  const favorites = useSelector(state => state.favorites)
  const pokemons = useSelector(state => state.pokemons)
  const [favoritesData, setData] = useState([])
  const [show, setShow] = useState({ start: 0, end: 12 })
  const [loading, setLoading] = useState(false)

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

  const showContent = favoritesData.slice(show.start, show.end)
  const pokemonCard = showContent.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)
  const content = (
    <div className="Favorites">
      <div className="card-container">
        { pokemonCard }
      </div>
      <div className="btn-container">
        { show.start - 12 >= 0 ? <button className="nav-btn" onClick={previous}>Previous</button>  : '' }
        { show.start + 12 <= favoritesData.length ? <button className="nav-btn" onClick={next}>Next</button> : ''}
      </div>
    </div>
  )

  return (
    <div>
      { !loading ? 
        content
        : 
        <img className="loading-img" src="https://media.giphy.com/media/31vamYdZV5ISQ/giphy.gif" alt="Loading...  "></img>
      }
    </div>
  )
}

export default Favorites