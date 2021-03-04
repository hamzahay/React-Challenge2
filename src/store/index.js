import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import pokemonsReducer from './reducers/pokemons'
import favoritesReducer from './reducers/favorites'

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  favorites: favoritesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store