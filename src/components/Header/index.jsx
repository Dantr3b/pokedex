import React from 'react'
import './style.css'

const Header = ({ searchTerm, onSearchChange, language, onLanguageChange }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <div className="pokeball-icon"></div>
        <h1 className="logo-text">
          Pokedex<span className="id-text">ID</span>
        </h1>
      </div>
      
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter a pokemon name"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="language-selector">
        <button 
          className={`lang-btn ${language === 'en' ? 'active' : ''}`}
          onClick={() => onLanguageChange('en')}
        >
          EN
        </button>
        <button 
          className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
          onClick={() => onLanguageChange('fr')}
        >
          FR
        </button>
        <button 
          className={`lang-btn ${language === 'es' ? 'active' : ''}`}
          onClick={() => onLanguageChange('es')}
        >
          ES
        </button>
        <button 
          className={`lang-btn ${language === 'ja' ? 'active' : ''}`}
          onClick={() => onLanguageChange('ja')}
        >
          JA
        </button>
      </div>
    </header>
  )
}

export default Header

