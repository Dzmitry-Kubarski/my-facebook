import { createGlobalStyle } from 'styled-components'

import { normalize } from 'polished'

import { primaryFont, weight } from '../utils'

export const GlobalStyle = createGlobalStyle`
    ${normalize()}

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
    }

    *::before,
    *::after {
        display: block;
    }       

    body {
        font-size: 16px;
        font-family: ${primaryFont};
        background-color: ${({ theme }) => theme.colorBody};
        overflow-x: hidden;
    }
 

    h1, h2, h3, h4, h5, h6, p {
        line-height: 1em;
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: ${weight.bold};
    }  

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    ul, li, ol {
    list-style: none;    
}

`
