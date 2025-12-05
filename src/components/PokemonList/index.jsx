import React, { useState, useEffect } from 'react'
import PokemonCard from '../PokemonCard'
import './style.css'

// Mapping des codes de langue pour l'API PokeAPI
const languageMap = {
  'en': 'en',
  'fr': 'fr',
  'es': 'es',
  'ja': 'ja-Hrkt' // Japonais en Hiragana/Katakana
}

function PokemonList({ searchTerm = '', language = 'en' }) {
  const [pokemons, setPokemons] = useState([])
  const [displayedPokemons, setDisplayedPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const observerTarget = React.useRef(null)

  const POKEMON_PER_PAGE = 20

  // Filtrer les Pokémon selon le terme de recherche
  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Charger tous les Pokémon une seule fois
  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const data = await response.json()

        // Récupérer les détails de chaque Pokémon
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailResponse = await fetch(pokemon.url)
            const details = await detailResponse.json()
            
            // Récupérer les informations de l'espèce pour les noms traduits
            const speciesResponse = await fetch(details.species.url)
            const speciesData = await speciesResponse.json()
            
            // Trouver le nom dans la langue sélectionnée
            const languageCode = languageMap[language]
            const translatedName = speciesData.names.find(
              nameObj => nameObj.language.name === languageCode
            )
            
            // Récupérer les noms de types traduits
            const translatedTypes = await Promise.all(
              details.types.map(async (typeInfo) => {
                const typeResponse = await fetch(typeInfo.type.url)
                const typeData = await typeResponse.json()
                
                // Trouver le nom du type dans la langue sélectionnée
                const translatedTypeName = typeData.names.find(
                  nameObj => nameObj.language.name === languageCode
                )
                
                return {
                  name: translatedTypeName ? translatedTypeName.name : typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1),
                  englishName: typeInfo.type.name
                }
              })
            )
            
            return {
              id: details.id,
              name: translatedName ? translatedName.name : details.name.charAt(0).toUpperCase() + details.name.slice(1),
              image: details.sprites.other['official-artwork'].front_default,
              types: translatedTypes
            }
          })
        )

        setPokemons(pokemonDetails)
        setDisplayedPokemons(pokemonDetails.slice(0, POKEMON_PER_PAGE))
        setPage(1)
        setHasMore(pokemonDetails.length > POKEMON_PER_PAGE)
        setError(null)
      } catch (err) {
        setError('Erreur lors du chargement des Pokémon')
        console.error('Erreur:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchAllPokemons()
  }, [language])

  // Charger plus de Pokémon quand on scroll
  const loadMorePokemons = React.useCallback(() => {
    if (loadingMore || !hasMore) return

    setLoadingMore(true)
    setTimeout(() => {
      const nextPage = page + 1
      const startIndex = page * POKEMON_PER_PAGE
      const endIndex = startIndex + POKEMON_PER_PAGE
      const newPokemons = pokemons.slice(startIndex, endIndex)
      
      setDisplayedPokemons(prev => [...prev, ...newPokemons])
      setPage(nextPage)
      setHasMore(endIndex < pokemons.length)
      setLoadingMore(false)
    }, 500)
  }, [page, pokemons, loadingMore, hasMore])

  // Intersection Observer pour le scroll infini
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          loadMorePokemons()
        }
      },
      { threshold: 0.1 }
    )

    const currentTarget = observerTarget.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [loadMorePokemons, hasMore, loadingMore])
  // Appliquer le filtre de recherche sur les Pokémon affichés
  const pokemonsToShow = searchTerm 
    ? filteredPokemons 
    : displayedPokemons

  if (loading) {
    return (
      <div className="pokemon-list-loading">
        <div className="pokeball-loader"></div>
        <p>Chargement des Pokémon...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="pokemon-list-error">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <>
      <div className="pokemon-list">
        {pokemonsToShow.length > 0 ? (
          pokemonsToShow.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types}
            />
          ))
        ) : (
          <div className="no-results">
            <p>No Pokémon found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
      
      {/* Élément observé pour le scroll infini */}
      {!searchTerm && hasMore && (
        <div ref={observerTarget} className="load-more-trigger">
          {loadingMore && (
            <div className="loading-more">
              <div className="pokeball-loader-small"></div>
              <p>Chargement...</p>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default PokemonList
