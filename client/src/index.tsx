import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

// import GlobalStyle from './utils/global'

// import { ThemeProvider } from 'styled-components'

// import { darkTheme, defaultTheme } from './utils'


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


