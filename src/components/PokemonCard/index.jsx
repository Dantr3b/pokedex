import './style.css'

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p className="pokemon-type">{pokemon.type}</p>
    </div>
  )
}

export default PokemonCard
