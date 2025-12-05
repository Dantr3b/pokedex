import React, { useState } from 'react'
import Header from './components/Header'
import PokemonList from './components/PokemonList'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [language, setLanguage] = useState('en')

  return (
    <div className="App">
      <Header 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm}
        language={language}
        onLanguageChange={setLanguage}
      />
      <main>
        <PokemonList searchTerm={searchTerm} language={language} />
      </main>
    </div>
  )
}

export default App

