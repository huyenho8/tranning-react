import React from 'react'
import { RenderOptions, render } from '@testing-library/react'

const AllTheProviders: React.FC = ({ children }) => {
  return <>{children}</>
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
