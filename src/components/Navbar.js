import React from 'react'
import '../style/navbar.css'
import { useHistory } from 'react-router-dom'

export default function Navbar () {
  
  const history = useHistory()

  function goHome () {
    history.push('/')
  }

  function goFavorites () {
    history.push('/favorites')
  }

  return (
    <div className="navbar">
      <h1 onClick={goHome}>PokePoke</h1>
      <h3 onClick={goFavorites}>Favorites</h3>
    </div>
  )
}