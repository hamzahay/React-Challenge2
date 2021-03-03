import { createStore } from 'redux'

const initialState = {
  pokemons: [],
  favorites: []
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'POKEMONS/SETPOKEMONS':
      return { ...state, pokemons: payload }
    case 'FAVORITES/ADDFAVORITE':
      return { ...state, favorites: [...state.favorites, payload] }
    case 'FAVORITES/REMOVEFAVORITE':
      return { ...state, favorites: payload }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store