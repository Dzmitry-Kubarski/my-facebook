// core
import { FC } from 'react'

// libs
import styled, { css } from 'styled-components'

// icons
import { CloseIcon, SearchIcon } from '../../../icons'

// utils
import { white, typeScale, weight, primaryFont, gray } from './../../../utils'

// ts
export interface SearchProps {
    placeholder: string
}

// styles
const StyledSearchWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 52px;

    input {
        width: 100%;
        height: 100%;
        border: none;
        font-family: ${primaryFont};
        font-size: ${typeScale.fs16};
        font-weight: ${weight.bold};
        background-color: ${({ theme }) => theme.secondaryColorDark};
        color: ${white.normal};
        border-radius: 12px;
        padding: 0 18px;
        padding-right: 45px;
        transition: border-color .3s ease-in-out;   
        
        &::placeholder {
            color: ${gray.normal};
            font-size: ${typeScale.fs14};
            font-weight: ${weight.medium};            
        }
    }

    svg {
        position: absolute;
        right: 18px;
        top: 50%;
        width: 20px;
        height: 20px;
        fill: ${gray.normal};
        opacity: .6;
        pointer-events: none;
        transition: fill .3s ease-in-out, opacity .3s ease-in-out;
        transform: translateY(-50%);
    }
`

const StyledCloseWrapper = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;   
    background-color: transparent; 
    cursor: pointer;

    svg {
        width: 20px;
        height: 20px;
        opacity: .6;
        pointer-events: none;
        transition: fill .3s ease-in, opacity .3s ease-in;       
    }

    &:hover {
        svg {
            fill: ${white.normal};
            opacity: 1;
        }
    }
`

// component
const Search: FC<SearchProps> = ({ placeholder }) => {
    return (
        <StyledSearchWrapper>
            <input type='text' placeholder={placeholder} />
            {/* <SearchIcon /> */}

            <StyledCloseWrapper type='button'>
                <CloseIcon />
            </StyledCloseWrapper>

        </StyledSearchWrapper>
    )
}

export default Search