import React, { useState, useEffect } from 'react'
import '../style/navbar.css'
import { useHistory, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../assets/pokemon-logo.png'

export default function Navbar () {
  
  const history = useHistory()
  const dispatch = useDispatch()

  const [searchKey, setSearchKey] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (mounted) {

    } else {
      setMounted(true)
    }
  }, [])

  function goHome () {
    history.push('/')
  }

  function search (e) {
    setSearchKey(e.target.value)
    console.log(searchKey)
  }

  return (
    <div className="navbar">
      <div className="nav-left">
        <img className="logo-img" onClick={goHome} src={logo} alt="pokemon-logo"></img>
        <div className="search-container">
          <input className="search-bar" placeholder="Search..." onChange={search}></input>
          <button className="search-btn">Search</button>
        </div>
      </div>
      <div className="nav-right">
        <NavLink className="navigation" activeClassName="inHome" exact to="/">Home</NavLink>
        <NavLink className="navigation" activeClassName="inFav" to="/favorites">Favorites</NavLink>
      </div>
    </div>
  )
}