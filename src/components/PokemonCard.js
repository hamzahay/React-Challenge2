import React from 'react'
import useFetch from '../hooks/useFetch'
import '../style/pokemonCard.css'

function PokemonCard (props) {

  const [data, loading] = useFetch(props.pokemon.url)

  return (
    <div>
      { loading === false? 
        <div className="card">
          <div className="card-top">
            <h5 className="name">{data.name}
            </h5></div>
          { data.sprites && <img className="card-img" src={data.sprites.front_default} alt="pokemon_image"></img> }
        </div>
        :
        <img src="https://media.giphy.com/media/31vamYdZV5ISQ/giphy.gif" alt="loading ..."></img>
      }
    </div>
  )
}

/*
  useEffect(() => {
    setLoading(true)
    fetch(props.pokemon.url)
      .then(res => res.json())
      .then(pokemonData => {
        console.log(pokemonData)
        setPokemon(pokemonData)})
      .finally(() => setLoading(false))
  }, [props])
  */

/*
class PokemonCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pokemon: {}
    }
  }

  componentDidMount () {
    fetch(this.props.pokemon.url)
    .then(res => res.json())
    .then(pokemonData => {
      this.setState({
        pokemon: pokemonData
      })
    })
  }

  render () {
    return (
      <div className="card">
        <h2 className="name">{this.state.pokemon.name}</h2>
      </div>
    )
  }
}
*/

export default PokemonCard