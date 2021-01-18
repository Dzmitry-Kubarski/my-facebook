// core
import { FC } from 'react'
import styled from 'styled-components'

// utils
import { shadow, typeScale } from '../../../utils'

// ts
export interface FormProps {
    children?: React.ReactNode
    title?: string
}

// styles
const FormWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 485px;    
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colorBoxBackground};
    box-shadow: ${shadow.normal};
    padding: 64px;
`

const FormTitle = styled.h2`
    font-size: ${typeScale.fs26};
    text-align: center;
    color: ${({ theme }) => theme.colorText};
    margin-bottom: 75px;
`

// component
const Form: FC<FormProps> = ({ title, children }) => {
    return (
        <FormWrapper>

            {title && <FormTitle>{title}</FormTitle>}

            <form>
                {children}
            </form>

        </FormWrapper>
    )
}

export default Form