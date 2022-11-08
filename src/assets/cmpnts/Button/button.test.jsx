/**
 * @vitest-environment jsdom
 */

import { describe, test, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from './Button'

describe('check if button component is rendered', () => {
   test('if the button is rendered with the proper Name and Label', () => {
      render(<Button>Test</Button>)
      const btn = screen.getByRole('button', { name: /test/i })
      expect(btn).toBeInTheDocument()
      expect(btn).toHaveAttribute('type', 'button')
   })

   test('if the Button has all the props that is given', () => {
      render(<Button className={'btn'}>Test</Button>)

      expect(screen.getByRole('button', { name: /test/i })).toHaveClass('btn')
   })

   test('if the Button calls the handler ', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn(() => 0)

      render(<Button onClick={handleClick}>Test</Button>)
      const btn = screen.getByRole('button', { name: /test/i })
      expect(handleClick).toHaveBeenCalledTimes(0)

      await user.click(btn)
      expect(handleClick).toHaveBeenCalledTimes(1)
      expect(handleClick).toHaveReturnedWith(0)
   })
})
