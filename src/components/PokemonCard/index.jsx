import React from 'react'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'

const typeColors = {
  grass: '#78c850',
  poison: '#a040a0',
  fire: '#f08030',
  water: '#6890f0',
  electric: '#f8d030',
  normal: '#a8a878',
  fairy: '#ee99ac',
  fighting: '#c03028',
  flying: '#a890f0',
  bug: '#a8b820',
  ground: '#e0c068',
  rock: '#b8a038',
  ghost: '#705898',
  steel: '#b8b8d0',
  psychic: '#f85888',
  ice: '#98d8d8',
  dragon: '#7038f8',
  dark: '#705848',
}

function PokemonCard({ id, name, types, image }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea sx={{ flexGrow: 1 }}>
        <Box sx={{ position: 'relative', pt: 1, px: 1 }}>
          <Typography 
            variant="caption" 
            sx={{ 
              position: 'absolute', 
              top: 8, 
              left: 12,
              fontWeight: 600,
              color: 'text.secondary'
            }}
          >
            No.{id.toString().padStart(3, '0')}
          </Typography>
        </Box>

        <Typography 
          variant="h6" 
          component="h2" 
          align="center"
          sx={{ fontWeight: 600, mt: 2, mb: 1 }}
        >
          {name}
        </Typography>

        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{ 
            height: 120, 
            objectFit: 'contain',
            p: 1
          }}
        />

        <CardContent sx={{ pt: 1 }}>
          <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'center', flexWrap: 'wrap' }}>
            {types.map((type, index) => {
              const typeName = typeof type === 'string' ? type : type.name
              const typeClass = typeof type === 'string' ? type.toLowerCase() : type.englishName?.toLowerCase() || 'normal'
              
              return (
                <Chip
                  key={index}
                  label={typeName}
                  size="small"
                  sx={{
                    bgcolor: typeColors[typeClass] || typeColors.normal,
                    color: typeClass === 'electric' ? '#333' : '#fff',
                    fontWeight: 600,
                    fontSize: '0.7rem'
                  }}
                />
              )
            })}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PokemonCard
