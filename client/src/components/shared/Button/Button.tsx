// core
import { FC } from 'react'

// libs
import styled, { css } from 'styled-components'
import { lighten } from 'polished'

// utils
import { defaultTheme, typeScale, white, weight, primaryFont, gray } from '../../../utils'

// ts
interface ButtonProps {
    secondary?: boolean
    text: string
    full?: boolean
    noShadow?: boolean
    disabled?: boolean
    children?: React.ReactNode
}

/*----------------------------------------
        styles 
----------------------------------------*/
const ButtonWrapper = styled.button<ButtonProps>`
    display: inline-block;
    min-height: 54px;
    font-family: ${primaryFont};
    font-size: ${typeScale.fs14};
    font-weight: ${weight.bold};
    color: ${white.normal};
    background-color: ${defaultTheme.primaryColor};
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    box-shadow: 3px 5px 10px 0 rgba(62, 63, 94, .2);
    transition: background-color .2s ease-in-out, color .2s ease-in-out, border-color .2s ease-in-out, box-shadow .2s ease-in-out;
    border: none;
    padding: 14px 28px;  

    &:hover {
        background-color: ${defaultTheme.primaryColorHover}
    } 

    &:focus {
        background-color: ${defaultTheme.primaryColorHover};
        border-color: ${defaultTheme.primaryColorDark};
        box-shadow: 0 0 0 0.2rem ${lighten(0.2, defaultTheme.primaryColor)};
    } 

    &:active {
        background-color: ${defaultTheme.primaryColorHover};
        border-color: ${defaultTheme.primaryColorDark};
        box-shadow: 0 0 0 0.2rem ${lighten(0.2, defaultTheme.primaryColor)};
    } 

    &:disabled {
        background-color: ${gray.normal};
        cursor: not-allowed;
    }   

/*----------------------------------------
    styles secondary variant
----------------------------------------*/
${props => props.secondary && css`
    background-color: ${defaultTheme.secondaryColor};
    box-shadow: ${defaultTheme.secondaryColorShadow};

    &:hover {
        background-color: ${defaultTheme.secondaryColorHover};
    }

    &:focus {
    background-color: ${defaultTheme.secondaryColorHover};
    border-color: ${defaultTheme.secondaryColorDark};
    box-shadow: 0 0 0 0.2rem ${lighten(0.2, defaultTheme.secondaryColor)};
    } 

    &:active {
        background-color: ${defaultTheme.secondaryColorHover};
        border-color: ${defaultTheme.secondaryColorDark};
        box-shadow: 0 0 0 0.2rem ${lighten(0.2, defaultTheme.secondaryColor)};
    }        
`}

/*----------------------------------------
    styles modifiers
----------------------------------------*/
${props => props.noShadow && css`
        box-shadow: none;  
`}

${props => props.full && css`
        width: 100%;  
`}
`

/*--------------------------
    component
--------------------------*/
const Button: FC<ButtonProps> = ({ text, children, ...props }) => {
    return (
        <ButtonWrapper text={text}  {...props}>
            {text}
            {children}
        </ButtonWrapper>
    )
}

export default Button
