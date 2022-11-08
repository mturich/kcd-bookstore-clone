/**
 * @vitest-environment jsdom
 */

import React from 'react'
//import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

describe('check if page renders', () => {
   it('should display the heading', async () => {
      render(<App />)
      //screen.debug()
      expect(
         screen.getByRole('heading', { name: /book list/i })
      ).toBeInTheDocument()
   })
})
