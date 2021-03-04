const initialState = {
  pokemons: [],
  loading: false,
  filter: ''
}

export default function pokemonsReducer (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'POKEMONS/SETPOKEMONS':
      return { ...state, pokemons: payload }
    case 'POKEMONS/SETLOADING':
      return { ...state, loading: payload }
    case 'POKEMONS/SETFILTER':
      return { ...state, filter: payload }
    default:
      return state
  }
}