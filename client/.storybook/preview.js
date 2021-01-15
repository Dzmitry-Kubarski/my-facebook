import { addDecorator } from '@storybook/react'
import { withContexts } from '@storybook/addon-contexts/react'

// import { MemoryRouter } from 'react-router-dom';

import { contexts } from './contexts'
import './reset.css'

addDecorator(withContexts(contexts))

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

