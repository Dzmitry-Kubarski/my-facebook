// core
import { FC } from 'react'
import { Link } from 'react-router-dom'

// libs
import styled, { css } from 'styled-components'

// utils
import { typeScale, weight, primaryFont, gray } from '../../../utils'

// ts
export interface LinkTextProps {
    text: string
    to: string
    static?: boolean
}

/*----------------------------------------
        styles 
----------------------------------------*/
const StyledLinkTextWrapper = styled.div<Pick<LinkTextProps, | 'static'>>`
    display: inline-block;
    padding-left: 5px;

    a {
        font-family: ${primaryFont};
        color: ${gray.normal};
        font-size: ${typeScale.fs14};
        font-weight: ${weight.bold};
        line-height: 22px;   
        text-decoration: none;
        transition: color .2s ease-in-out;
        
        &:hover {
            color: ${({ theme }) => theme.primaryColor}
        } 

        ${props => props.static && css`
            font-weight: ${weight.semibold};
            color: ${({ theme }) => theme.primaryColor};
        `}
    } 
`

/*--------------------------
    component
--------------------------*/
const LinkText: FC<LinkTextProps> = ({ text, to, ...props }) => {
    return (
        <StyledLinkTextWrapper  {...props}>
            <Link to={`/${to}`}>
                {text}
            </Link>
        </StyledLinkTextWrapper>
    )
}

export default LinkText
