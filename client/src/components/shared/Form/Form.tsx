// core
import { FC } from 'react'
import styled, { css } from 'styled-components'

// utils
import { shadow, typeScale } from '../../../utils'

// ts
export interface FormProps {
    children?: React.ReactNode
    title?: string
    decoration?: string
}

// styles
export const FormWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 485px;    
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colorBoxBackground};
    box-shadow: ${shadow.normal};
    padding: 64px;
    transition: background-color .3s ease-in-out;
`

const FormTitle = styled.h2`
    font-size: ${typeScale.fs26};
    text-align: center;
    color: ${({ theme }) => theme.colorText};
    margin-bottom: 75px;
    transition: color .3s ease-in-out;
`

const Decoration = styled.img`
    position: absolute;
    top: -14px;
    left: -80px;
`

// component
const Form: FC<FormProps> = ({ title, decoration, children }) => {
    return (
        <FormWrapper>
            <Decoration src={decoration} />

            {title && <FormTitle>{title}</FormTitle>}

            <form>
                {children}
            </form>
        </FormWrapper>
    )
}

export default Form