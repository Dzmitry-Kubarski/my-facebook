// core
import styled, { css } from 'styled-components'

// ts
export interface ContainerProps {
    big?: boolean
}

// component current
const Container = styled.div<ContainerProps>`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 30px;

    ${props => props.big && css`
        max-width: 1420px;
    `}
`

export default Container