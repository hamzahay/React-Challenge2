import React, { useState, useEffect } from 'react'
import '../style/Home.css'
import PokemonCard from '../components/PokemonCard.js'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokemons } from '../store/actions'

function App () {

  const dispatch = useDispatch()
  const pokemonsData = useSelector(state => state.pokemons.pokemons)
  const [showData, setShowData] = useState([])
  const [show, setShow] = useState({ start: 0, end: 12 })
  const loading = useSelector(state => state.pokemons.loading)
  const filter = useSelector(state => state.pokemons.filter)

  useEffect(() => {
    dispatch(fetchPokemons())
  }, [])

  useEffect(() => {
    const newData = pokemonsData.filter(filterData => filterData.name.includes(filter))
    setShowData(newData)
  }, [filter, pokemonsData])

  function next () {
    setShow({ start: show.end, end: show.end + 12})
    document.documentElement.scrollTop = 0 
  }

  function previous () {
    setShow({ start: show.start - 12, end: show.start })
    document.documentElement.scrollTop = 0
  }
  
  const showContent = showData.slice(show.start, show.end)
  const pokemonCard = showContent.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)

  if (loading) return <img className="loading-img" src="https://media.giphy.com/media/31vamYdZV5ISQ/giphy.gif" alt="Loading...  "></img>

  return (
    <div className="Home">
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

export default App;
