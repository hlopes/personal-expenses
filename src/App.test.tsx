import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import App from './App'

it.skip('renders message', () => {
  render(<App />)
  expect(screen.getByText('Vite + React')).toBeInTheDocument()
})
