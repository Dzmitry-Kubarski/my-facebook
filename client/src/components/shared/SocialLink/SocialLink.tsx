// core
import { FC } from 'react'

// libs
import styled, { css } from 'styled-components'

// utils
import { social, white } from '../../../utils'

// ts
export interface SocialLinkProps {
    href: string
    children?: React.ReactNode
    social: 'facebook' | 'twitter' | 'youtube' | 'instagram' | 'patreon' | 'discord' | 'google' | 'dribbble'
}

/*----------------------------------------
        styles 
----------------------------------------*/
const StyledLinkWrapper = styled.li<Pick<SocialLinkProps, | 'social'>>`

    margin-right: 12px;

    &:last-child {
        margin-right: 0;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        transition: transform .2s ease-in-out;        

        svg, img {
            fill: ${white.normal};
            width: 12px;
            height: 12px;
        }
        
        &:hover {
            transform: translate(0, -4px);
        } 

        /*----------------------------------------
            styles modifiers
        ----------------------------------------*/        
        ${props => props.social === 'facebook' && css`
            background-color: ${social.facebook};
        `}

        ${props => props.social === 'twitter' && css`
            background-color: ${social.twitter};
        `}

        ${props => props.social === 'youtube' && css`
            background-color: ${social.youtube};
        `}

        ${props => props.social === 'instagram' && css`
            background-color: ${social.instagram};
        `}

        ${props => props.social === 'patreon' && css`
            background-color: ${social.patreon};
        `}

        ${props => props.social === 'discord' && css`
            background-color: ${social.discord};
        `}

        ${props => props.social === 'google' && css`
            background-color: ${social.google};
        `}       

        ${props => props.social === 'dribbble' && css`
            background-color: ${social.dribbble};
        `}
    } 
`
/*--------------------------
    component
--------------------------*/
const SocialLink: FC<SocialLinkProps> = ({ href, children, social }) => {
    return (
        <StyledLinkWrapper social={social}>
            <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        </StyledLinkWrapper>
    )
}

export default SocialLink