import React, { useState, useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Header from './components/Header'
import PokemonList from './components/PokemonList'
import { getTheme } from './theme'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [language, setLanguage] = useState('en')
  const [themeMode, setThemeMode] = useState('dark')

  const theme = useMemo(() => getTheme(themeMode), [themeMode])

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Header 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm}
          language={language}
          onLanguageChange={setLanguage}
          themeMode={themeMode}
          onThemeToggle={toggleTheme}
        />
        <Box component="main" sx={{ p: 3 }}>
          <PokemonList searchTerm={searchTerm} language={language} />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
