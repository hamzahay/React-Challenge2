const initialState = {
  pokemons: [],
  loading: false
}

export default function pokemonsReducer (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'POKEMONS/SETPOKEMONS':
      return { ...state, pokemons: payload }
    case 'POKEMONS/SETLOADING':
      return { ...state, loading: payload }
    default:
      return state
  }
}