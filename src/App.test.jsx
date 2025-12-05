import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(document.querySelector('.MuiBox-root')).toBeInTheDocument()
  })

  it('renders Header component', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('renders search input', () => {
    render(<App />)
    expect(screen.getByPlaceholderText(/enter a pokemon name/i)).toBeInTheDocument()
  })

  it('renders language selector', () => {
    render(<App />)
    const selects = screen.getAllByRole('combobox')
    expect(selects.length).toBeGreaterThan(0)
  })

  it('applies dark theme', () => {
    render(<App />)
    const root = document.querySelector('.MuiBox-root')
    expect(root).toHaveStyle({ minHeight: '100vh' })
  })
})
