import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import PokemonCard from './index'

describe('PokemonCard', () => {
  const mockPokemon = {
    id: 25,
    name: 'Pikachu',
    image: 'https://example.com/pikachu.png',
    types: [
      { name: 'Electric', englishName: 'electric' }
    ]
  }

  it('renders Pokemon name', () => {
    render(<PokemonCard {...mockPokemon} />)
    expect(screen.getByText('Pikachu')).toBeInTheDocument()
  })

  it('renders Pokemon ID with correct format', () => {
    render(<PokemonCard {...mockPokemon} />)
    expect(screen.getByText('No.025')).toBeInTheDocument()
  })

  it('renders Pokemon image', () => {
    render(<PokemonCard {...mockPokemon} />)
    const image = screen.getByAltText('Pikachu')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', mockPokemon.image)
  })

  it('renders type chips', () => {
    render(<PokemonCard {...mockPokemon} />)
    expect(screen.getByText('Electric')).toBeInTheDocument()
  })

  it('renders multiple types correctly', () => {
    const dualTypePokemon = {
      ...mockPokemon,
      types: [
        { name: 'Grass', englishName: 'grass' },
        { name: 'Poison', englishName: 'poison' }
      ]
    }
    render(<PokemonCard {...dualTypePokemon} />)
    expect(screen.getByText('Grass')).toBeInTheDocument()
    expect(screen.getByText('Poison')).toBeInTheDocument()
  })

  it('renders MUI Card component', () => {
    const { container } = render(<PokemonCard {...mockPokemon} />)
    expect(container.querySelector('.MuiCard-root')).toBeInTheDocument()
  })

  it('handles string type format (backward compatibility)', () => {
    const stringTypePokemon = {
      ...mockPokemon,
      types: ['Electric']
    }
    render(<PokemonCard {...stringTypePokemon} />)
    expect(screen.getByText('Electric')).toBeInTheDocument()
  })
})
