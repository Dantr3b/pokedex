import './style.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Pokédex</h1>
        <div className="language-selection">
          <button className="lang-btn active">EN</button>
          <button className="lang-btn">FR</button>
          <button className="lang-btn">ES</button>
        </div>
      </div>
    </header>
  )
}

export default Header
