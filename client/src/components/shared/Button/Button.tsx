// core
import { FC } from 'react'

// libs
import styled, { css } from 'styled-components'

// utils
import { defaultTheme, typeScale, white, weight, primaryFont, gray } from '../../../utils'

// ts
interface ButtonProps {
    color?: 'primary' | 'secondary'
    text: string
    full?: boolean
    noShadow?: boolean
    disabled?: boolean
    children?: React.ReactNode
}

// styles
const ButtonWrapper = styled.button<ButtonProps>`
    display: inline-block;
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

    &:disabled {
        background-color: ${gray.normal};
        cursor: not-allowed;
    }   

    ${props => props.color === 'secondary' && css`
        background-color: ${defaultTheme.secondaryColor};
        box-shadow: ${defaultTheme.secondaryColorShadow};

        &:hover {
            background-color: ${defaultTheme.secondaryColorHover};
        }
    `}

    ${props => props.noShadow && css`
            box-shadow: none;  
    `}

    ${props => props.full && css`
            width: 100%;  
    `}
`;

// component
const Button: FC<ButtonProps> = ({ text, children, ...props }) => {
    return (
        <ButtonWrapper text={text}  {...props}>
            {text}
            {children}
        </ButtonWrapper>
    )
}

export default Button

Button.defaultProps = {
    color: 'primary',
}

