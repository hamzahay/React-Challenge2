const initialState = {
  favorites: []
}

export default function favoritesReducer (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'FAVORITES/ADDFAVORITE':
      return { ...state, favorites: [...state.favorites, payload] }
    case 'FAVORITES/REMOVEFAVORITE':
      return { ...state, favorites: payload }
    default:
      return state
  }
}