import React, { useState, useEffect } from 'react'
import '../style/navbar.css'
import { useHistory, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setFilter } from '../store/actions'
import logo from '../assets/pokemon-logo.png'

export default function Navbar () {
  
  const history = useHistory()
  const dispatch = useDispatch()
  const [mounted, setMounted] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (mounted) {

    } else {
      setMounted(true)
    }
  }, [])

  function goHome () {
    history.push('/')
    dispatch(setFilter(''))
    setSearchValue('')
  }

  function emptySearch () {
    dispatch(setFilter(''))
    setSearchValue('')
  }

  async function search (e) {
    setSearchValue(e.target.value)
    await setTimeout(() => {
      dispatch(setFilter(e.target.value))
    }, 1000)
  }

  return (
    <div className="navbar">
      <div className="nav-left">
        <img className="logo-img" onClick={goHome} src={logo} alt="pokemon-logo"></img>
        <div className="search-container">
          <input className="search-bar" placeholder="Search by name..." onChange={search} value={searchValue}></input>
        </div>
      </div>
      <div className="nav-right">
        <NavLink className="navigation" activeClassName="inHome" exact to="/" onClick={emptySearch}>Home</NavLink>
        <NavLink className="navigation" activeClassName="inFav" to="/favorites" onClick={emptySearch}>Favorites</NavLink>
      </div>
    </div>
  )
}