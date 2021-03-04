export function setNewPokemons (payload) {
  return  { type: 'POKEMONS/SETPOKEMONS', payload }
}

export function setPokemonLoading (payload) {
  return  { type: 'POKEMONS/SETLOADING', payload }
}

export function setFilter (payload) {
  return  { type: 'POKEMONS/SETFILTER', payload }
}

export function fetchPokemons () {
  return async (dispatch) => {
    try {
      dispatch(setPokemonLoading(true))
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      const data = await res.json()
      const newData = []
      for (const pokemon of data.results) {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        let types = []
        for(const key in data.types) {
          types.push(data.types[key].type.name)
        }
        let stats = []
        for (const key in data.stats) {
          stats.push({ 
            baseStat: data.stats[key].base_stat,
            statName: data.stats[key].stat.name
          })
        }
        const pokemonData = {
          id: data.id,
          name: data.name,
          url: pokemon.url,
          sprites: data.sprites.front_default,
          originalArt: data.sprites.other['official-artwork'].front_default,
          types: types,
          stats: stats
        }
        newData.push(pokemonData)
      }
      dispatch(setNewPokemons(newData))
      dispatch(setPokemonLoading(false))
    } catch(err) {
      console.log(err)
    }
  }
}

export function addFavorite (payload) {
  return { type: 'FAVORITES/ADDFAVORITE', payload }
}

export function removeFavorite (payload) {
  return { type: 'FAVORITES/REMOVEFAVORITE', payload}
}