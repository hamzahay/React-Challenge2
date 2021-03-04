import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import '../style/detail.css'
import { useParams } from 'react-router-dom'

export default function Pokemon () {
  const pokemons = useSelector(state => state.pokemons.pokemons)
  const [pokemon, setPokemonDetail] = useState([])
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [imgShow, setImgShow] = useState(null)
  const [stats, setStats] = useState([])
  const [types, setTypes] = useState([])
  const { id } = useParams()

  useEffect(() => {
    if (pokemons.length > 0) {
      setLoading(true)
      const newPok = pokemons.slice()
      const index = newPok.map(pokemon => pokemon.id).indexOf(Number(id))
      if (index > -1) {
        setPokemonDetail(pokemons[index])
        setLoading(false)
      }
    }
  }, [pokemons])

  useEffect(() => {
    if (mounted) {
      setImgShow(pokemon.sprites)
      setStats(pokemon.stats)
      setTypes(pokemon.types)
    } else {
      setMounted(true)
    }
  }, [pokemon])

  if (loading) return <img className="loading-img" src="https://media.giphy.com/media/31vamYdZV5ISQ/giphy.gif" alt="Loading...  "></img>
  
  return (
    <div className="detail">
      <div className="image-container">
        <img className="detail-img" src={imgShow} alt="Pokemon-img"></img>
      </div>
      <div className="detail-content">
        <h1>{ pokemon.name }</h1>
        <h3>Base Stat</h3>
        <ul>
          { stats.map(stat => <li className="statList" key={stat.name}> <h4>{stat.statName}:</h4>  <h4>{stat.baseStat}</h4> </li> ) }
        </ul>
        <h3>Types</h3>
        <ul className="typesList">
          { types.map(type => <li key={type}><h4>{type}</h4></li> ) }
        </ul>
      </div>
    </div>
  )
}