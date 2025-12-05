import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Header from './components/Header'
import PokemonList from './components/PokemonList'
import theme from './theme'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [language, setLanguage] = useState('en')

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Header 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm}
          language={language}
          onLanguageChange={setLanguage}
        />
        <Box component="main" sx={{ p: 3 }}>
          <PokemonList searchTerm={searchTerm} language={language} />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
