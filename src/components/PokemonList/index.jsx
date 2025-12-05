import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PokemonCard from '../PokemonCard'

// Mapping des codes de langue pour l'API PokeAPI
const languageMap = {
  'en': 'en',
  'fr': 'fr',
  'es': 'es',
  'ja': 'ja-Hrkt' 
}

function PokemonList({ searchTerm = '', language = 'en' }) {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Filtrer les Pokémon selon le terme de recherche
  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const data = await response.json()

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailResponse = await fetch(pokemon.url)
            const details = await detailResponse.json()
            
            const speciesResponse = await fetch(details.species.url)
            const speciesData = await speciesResponse.json()
            
            const languageCode = languageMap[language]
            const translatedName = speciesData.names.find(
              nameObj => nameObj.language.name === languageCode
            )
            
            const translatedTypes = await Promise.all(
              details.types.map(async (typeInfo) => {
                const typeResponse = await fetch(typeInfo.type.url)
                const typeData = await typeResponse.json()
                
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

  if (loading) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 400, gap: 2 }}>
        <CircularProgress size={60} />
        <Typography variant="h6">Chargement des Pokémon...</Typography>
      </Box>
    )
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    )
  }

  return (
    <Grid 
      container 
      spacing={3}
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(5, 1fr)',
        },
        gap: 3,
      }}
    >
      {filteredPokemons.length > 0 ? (
        filteredPokemons.map((pokemon) => (
          <Box key={pokemon.id}>
            <PokemonCard
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types}
            />
          </Box>
        ))
      ) : (
        <Box sx={{ gridColumn: '1 / -1' }}>
          <Typography variant="h6" align="center" sx={{ py: 5 }}>
            No Pokémon found matching "{searchTerm}"
          </Typography>
        </Box>
      )}
    </Grid>
  )
}

export default PokemonList
