// core
import styled, { css } from 'styled-components'

// ts
export interface FormRowProps {
    children?: React.ReactNode
    spaceBetween?: boolean
    marginTop?: boolean
}

// component
export const FormRow = styled.div<FormRowProps>`

    & + & {
        margin-top: 28px;
    }

    ${props => props.spaceBetween && css`
        display: flex;
        align-content: center;
        justify-content: space-between; 
    `}

    ${props => props.marginTop && css`
        margin-top: 30px;
    `}

`