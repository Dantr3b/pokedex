import React from 'react'
import './style.css'

function PokemonCard({ id, name, types, image }) {
  return (
    <div className="pokemon-card">
      {/* Affichage du numéro formaté, ex: No.001 */}
      <span className="pokemon-id">No.{id.toString().padStart(3, '0')}</span>

      <h2 className="pokemon-name">{name}</h2>

      <img src={image} alt={name} className="pokemon-image" />

      <div className="pokemon-types">
        {types.map((type, index) => {
          // Support pour l'ancien format (string) et le nouveau format (object)
          const typeName = typeof type === 'string' ? type : type.name
          const typeClass = typeof type === 'string' ? type.toLowerCase() : type.englishName?.toLowerCase() || 'normal'
          
          return (
            <span key={index} className={`type-badge type-${typeClass}`}>
              {typeName}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default PokemonCard
