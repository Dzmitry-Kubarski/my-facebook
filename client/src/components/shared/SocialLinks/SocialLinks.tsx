// core
import { FC } from 'react'

// libs
import styled, { css } from 'styled-components'

// ts
export interface SocialLinksProps {
    children?: React.ReactNode
    small?: boolean
}

// styles
const LinksWrapper = styled.ul<SocialLinksProps>`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    ${props => props.small && css`

        li {
            margin-right: 8px;

            a { 
                width: 32px;
                height: 32px;
                border-radius: 8px;

                svg, img {
                    width: 10px;
                    height: 10px;
                }
            }
        }
    `}
`
// components
const SocialLinks: FC<SocialLinksProps> = ({ children, small }) => {
    return (
        <LinksWrapper small={small}>
            {children}
        </LinksWrapper>
    )
}

export default SocialLinks