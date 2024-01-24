/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header', () => {
  test('renders header with correct text', () => {
    render(<Header />)
    const headerElement = screen.getByText(/inicio/i)
    expect(headerElement).toBeInTheDocument()
  })
})
