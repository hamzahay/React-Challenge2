const initialState = {
  search: ''
}

export default function pokemonsReducer (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'SEARCH/SETSEARCH':
      return { ...state, search: payload }
    default:
      return state
  }
}