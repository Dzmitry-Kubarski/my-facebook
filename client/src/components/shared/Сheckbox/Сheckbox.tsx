// core
import React, { FC } from 'react'
import SvgCrossIcon from '../../../icons/CrossIcon'

// libs
import styled from 'styled-components'

// utils
import { typeScale, weight, primaryFont, black } from '../../../utils'

// ts
export interface СheckboxProps {
    label: string
    id: string
    name: string
    children?: React.ReactNode
}

/*----------------------------------------
        styles 
----------------------------------------*/
const StyledHiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px; 
`
const StyledСheckboxWrapper = styled.div`
    position: relative;    

    label {
        font-family: ${primaryFont};
        font-size: ${typeScale.fs14};
        font-weight: ${weight.bold};
        color: ${black.normal};
        line-height: 22px;
        cursor: pointer;
        padding-left: 34px;
    }
`
const StyledСheckboxImagesBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 22px;
    height: 22px;
    border: 1px solid ${({ theme }) => theme.colorBorder};
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colorBoxBackground};    
    pointer-events: none;    
    transition: border-color .3s ease-in-out, background-color .3s ease-in-out;

    svg {
        width: 12px;
        height: 12px;
        fill: transparent;
        transition: fill .2s ease-in-out;
    }

    ${StyledHiddenCheckbox}:checked + && {
        background-color: ${({ theme }) => theme.primaryColor};

        svg {
           fill: ${({ theme }) => theme.colorBoxBackground};
        }
  }

`

/*--------------------------
    component
--------------------------*/
const Сheckbox: FC<СheckboxProps> = ({ label, name, id }) => {

    return (
        <StyledСheckboxWrapper>
            <StyledHiddenCheckbox id={id} name={name} />

            <StyledСheckboxImagesBox>
                <SvgCrossIcon />
            </StyledСheckboxImagesBox>

            <label htmlFor={id}>{label}</label>
        </StyledСheckboxWrapper>
    )
}

export default Сheckbox
