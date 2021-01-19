// core
import styled, { css } from 'styled-components'

// utils
import { typeScale, weight, gray } from '../../../utils'

// ts
export interface LinedTextProps {
    children: string
}

// component
const LinedText = styled.p`

    position: relative;
    font-size: ${typeScale.fs14};
    font-weight: ${weight.bold};
    color: ${({ theme }) => theme.colorText};
    text-align: center;    
    margin-top: 40px;    
    transition: color .3s ease-in-out;

    &:after, &:before {
        position: absolute;
        top: 7px;
        content: "";
        width: 70px;
        height: 1px;
        background-color: ${({ theme }) => theme.colorDivider};  
        transition: background-color .3s ease-in-out;      
    }

    &:after {
        right: 0;
    }

    &:before {
        left: 0;
    }    

`

export default LinedText