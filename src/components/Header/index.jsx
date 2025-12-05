import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

const Header = ({ searchTerm, onSearchChange, language, onLanguageChange }) => {
  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' }
  ]

  return (
    <AppBar position="static" sx={{ bgcolor: 'background.paper' }}>
      <Toolbar 
        sx={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          py: 1
        }}
      >
        {/* Logo à gauche */}
        <Box sx={{ flexShrink: 0 }}>
          <img 
            src="/logo.svg" 
            alt="Pokedex Logo" 
            style={{ width: '150px', height: 'auto', display: 'block' }}
          />
        </Box>
        
        {/* Barre de recherche au centre */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', px: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Enter a pokemon name"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            size="small"
            sx={{ 
              width: '100%',
              maxWidth: 500,
              '& .MuiOutlinedInput-root': {
                bgcolor: 'background.default',
              }
            }}
          />
        </Box>
        
        {/* Sélecteur de langue à droite */}
        <Box sx={{ flexShrink: 0 }}>
          <FormControl size="small" sx={{ minWidth: 140 }}>
            <Select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value)}
              sx={{ bgcolor: 'background.default' }}
            >
              {languages.map(lang => (
                <MenuItem key={lang.code} value={lang.code}>
                  {lang.flag} {lang.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
