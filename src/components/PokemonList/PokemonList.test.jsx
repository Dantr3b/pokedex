import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import PokemonList from './index'

// Mock fetch globally
globalThis.fetch = vi.fn()

describe('PokemonList', () => {



  beforeEach(() => {
    fetch.mockClear()
  })

  it('shows loading state initially', () => {
    fetch.mockImplementation(() => new Promise(() => {}))
    render(<PokemonList searchTerm="" language="en" />)
    expect(screen.getByText(/chargement des pokémon/i)).toBeInTheDocument()
  })

  it('shows CircularProgress during loading', () => {
    fetch.mockImplementation(() => new Promise(() => {}))
    const { container } = render(<PokemonList searchTerm="" language="en" />)
    expect(container.querySelector('.MuiCircularProgress-root')).toBeInTheDocument()
  })

  it('shows error message on fetch failure', async () => {
    fetch.mockRejectedValueOnce(new Error('API Error'))

    render(<PokemonList searchTerm="" language="en" />)

    await waitFor(() => {
      expect(screen.getByText(/erreur lors du chargement/i)).toBeInTheDocument()
    })
  })

  it('renders Grid container', async () => {
    fetch.mockResolvedValueOnce({ json: async () => ({ results: [] }) })

    const { container } = render(<PokemonList searchTerm="" language="en" />)

    await waitFor(() => {
      expect(container.querySelector('.MuiGrid-root')).toBeInTheDocument()
    })
  })
})
