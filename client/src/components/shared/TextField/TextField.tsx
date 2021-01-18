// core
import { FC, useState } from 'react'

// libs
import styled from 'styled-components'

// utils
import { typeScale, weight, primaryFont } from '../../../utils'

// ts
export interface TextFieldProps {
    label: string
    type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'number'
    required?: boolean
    children?: React.ReactNode
}

/*----------------------------------------
        styles 
----------------------------------------*/
const Wrapper = styled.div`
    position: relative;
    min-height: 54px;

    input {
        width: 100%;
        min-height: 54px;
        font-family: ${primaryFont};
        border-radius: 12px;
        font-size: ${typeScale.fs16};
        font-weight: ${weight.bold};
        background-color: ${({ theme }) => theme.colorBoxBackground};
        border: 1px solid ${({ theme }) => theme.colorBorder};
        color: ${({ theme }) => theme.colorText};
        outline: none;
        padding: 0 18px;
        transition: border-color .2s ease-in-out;

        &:focus {
            border-color: ${({ theme }) => theme.secondaryColor};

            + label {
                top: -6px;
                left: 12px; 
                font-size: ${typeScale.fs12};  
                background-color: ${({ theme }) => theme.colorBoxBackground};            
            }
        }      
    }   
`
const Label = styled.label`
    position: absolute;
    top: 20px;
    left: 20px;
    font-family: ${primaryFont};
    font-size: ${typeScale.fs16};
    font-weight: ${weight.semibold};
    color: ${({ theme }) => theme.colorTextSecond};
    pointer-events: none;
    padding: 0 6px;
    transition: all .3s ease-in-out;
`
const LabelActive = styled(Label)`
    top: -6px;
    left: 12px;
    font-size: ${typeScale.fs12};
    background-color: ${({ theme }) => theme.colorBoxBackground};
`

/*----------------------------------------
    component 
----------------------------------------*/
const TextField: FC<TextFieldProps> = ({ label, type, required }) => {
    const [isValue, setIsValue] = useState('')

    return (
        <Wrapper>
            <input type={type} value={isValue} onChange={(e) => setIsValue(e.target.value)} required={required} />

            {!isValue
                ? <Label>{label}</Label>
                : <LabelActive>{label}</LabelActive>
            }

        </Wrapper>
    );
};

export default TextField

TextField.defaultProps = {
    type: 'text',
}