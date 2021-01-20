// core
import { FC } from 'react'

// libs
import styled from 'styled-components'

// images
import sunImg from '../../../images/landing/sun-3.png'
import nightImg from '../../../images/landing/night.png'

// ts
export interface ToggleThemeProps {
    toggleTheme: () => void
}

// styles
const StyledWrapper = styled.div`
    position: fixed;
    z-index: 99;
    top: 30px;
    left: 223px;  
    
    input {       
        display: none;
        
        &:checked {
            + label {
                background: transparent;
                background: linear-gradient(90deg, rgba(59,53,62,1) 0%, rgba(223,156,75,1) 100%);
                
                span {
                    background-image: url(${nightImg});
                    transform: translate3d(40px, 0, 0) rotate(0);
                }
            }            
        }
    }

    label { 
        display: flex;
        align-items: center;
        width: 90px;
        height: 45px;
        background: transparent;
        background: linear-gradient(90deg, #ffffff 0%, rgba(255,253,205,1) 0%);
        border-radius: 85px;
        border: 1px solid white;
        transition: background .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        cursor: pointer;
        padding: 7px;
    }

    span {
        display: inline-block;
        z-index: 1;
        width: 35px;
        height: 35px;
        border-radius: 50px;
        transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
        background-image: url(${sunImg});
        background-position: center;
        background-size: cover;       
    }
`

// component
const ToggleTheme: FC<ToggleThemeProps> = ({ toggleTheme }) => {
    return (
        <StyledWrapper>
            <input type="checkbox" id="day" onChange={toggleTheme} />

            <label htmlFor="day">
                <span></span>
            </label>
        </StyledWrapper>
    )
}

export default ToggleTheme