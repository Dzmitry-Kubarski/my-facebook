// core
import { FC } from 'react'

// libs
import styled from 'styled-components'

// ts
export interface DemoStorybookWrapperProps {
    children?: React.ReactNode
}

const Wrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colorBody};   
    padding: 50px;
    box-sizing: border-box;
`

const DemoStorybookWrapper: FC<DemoStorybookWrapperProps> = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default DemoStorybookWrapper