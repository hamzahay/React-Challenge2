export function setNewPokemons (payload) {
  return  { type: 'POKEMONS/SETPOKEMONS', payload }
}

export function addFavorite (payload) {
  return { type: 'FAVORITES/ADDFAVORITE', payload }
}

export function removeFavorite (payload) {
  return { type: 'FAVORITES/REMOVEFAVORITE', payload}
}