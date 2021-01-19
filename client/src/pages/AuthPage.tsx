// core
import { FC, useState } from 'react'

// libs
import styled, { css } from 'styled-components'

// utils
import { secondaryFont, typeScale, weight, white } from '../utils'

// componnets
import { Container } from '../components/shared'
import { Login, Register } from '../components'

// icons
import { LogoIcon } from '../icons'

// images
import pageBg from '../images/landing/bg-5.jpg'
import pageBgNight from '../images/landing/bg-8.jpg'
import dotTextureImg from '../images/dot-texture.png'
import dotTextureNightImg from '../images/dot-texture-night.png'

// styles
const Page = styled.section`
    position: relative;
    width: 100%; 
    background: ${({ theme }) => theme.title === 'light' ? `url(${pageBg})` : `url(${pageBgNight})`}};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    overflow: hidden;
    transition: background .3s linear;
`

const PageInner = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 960px) {
        flex-wrap: wrap;
        justify-content: center;
        padding: 15px 0;
    }   
`

const PageDecoration = styled.div`
    width: 64%;
    height: 140%;
    border-radius: 50%;
    background: ${({ theme }) => theme.title === 'light' ? `url(${dotTextureImg})` : `url(${dotTextureNightImg})`}};

    background-repeat: repeat;
    background-position: left top;
    background-color: ${({ theme }) => theme.colorBoxBackground};
    position: absolute;
    top: -20%;
    right: -32%;
    pointer-events: none;
    transition: background .3s linear;

    @media (max-width: 960px) {
        display: none;   
    }
`

const Content = styled.div`
    width: 100%;
    max-width: 585px;
    text-align: center;

    h2 {
        font-size: ${typeScale.fs24};
        font-weight: ${weight.medium};
        color: ${white.normal};
        text-transform: uppercase;
    }

    h1 {
        position: relative;        
        font-family: ${secondaryFont};
        font-size: ${typeScale.fs104};
        font-weight: ${weight.black};
        color: ${white.normal};
        text-transform: uppercase;
        margin-bottom: 30px;
    }    
`

const PageText = styled.p`
    font-size: 1.125rem;
    line-height: 1.3em;
    font-weight: 500;
    color: ${white.normal};
    margin: 0 auto;
    margin-bottom: 40px;
`

const LogoWrapper = styled.div`
    margin-bottom: 35px;

    svg {
        width: 200px;
        height: 200px;
    }
`

const Tabs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;      
    
    input {
        display: none;

        &:checked  {
          +  label { 
                color: ${({ theme }) => theme.colorTabTextActive};
                background-color: ${({ theme }) => theme.colorTabTextActiveBackground};
                cursor: auto; 
            }      
        }
    } 
`

const TabItem = styled.label`
     width: 180px;
    height: 55px;
    border: 1px solid ${({ theme }) => theme.colorTabBorder};
    color: ${({ theme }) => theme.colorTabText};
    font-size: ${typeScale.fs16};
    font-weight: ${weight.bold};
    line-height: 54px;
    text-align: center;
    cursor: pointer;
    background-color: transparent;
    transition: background-color .3s ease-in-out, color .3s ease-in-out, border-color .3s ease-in-out;
`

const LeftTabItem = styled(TabItem)`
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;   
`

const RightTabItem = styled(TabItem)`
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
`

// component current
const AuthPage: FC = () => {
    const [activeForm, setActiveForm] = useState('loginFormTab')

    const toogleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActiveForm(event.currentTarget.id)
    }

    return (
        <Page>
            <Container big>
                <PageInner>
                    <PageDecoration />

                    <Content>
                        <LogoWrapper>
                            <LogoIcon />
                        </LogoWrapper>

                        <h2 className="auth__subtitle">Welcome to</h2>
                        <h1 className="auth__title">ВМЕСТЕ</h1>

                        <PageText>
                            Сообщество нового поколения! <br /> Развивайтесь в компании единомышленников! <br /> Ищите друзей по интересам!
                        </PageText>

                        <Tabs>
                            <input type='radio' name='tabs' id='loginFormTab' onChange={(e) => toogleForm(e)} defaultChecked />
                            <LeftTabItem htmlFor="loginFormTab">Login</LeftTabItem>

                            <input type='radio' name='tabs' id='registerFormTab' onChange={(e) => toogleForm(e)} />
                            <RightTabItem htmlFor="registerFormTab">Register</RightTabItem>
                        </Tabs>
                    </Content>

                    {activeForm === 'loginFormTab' && (<Login />)}

                    {activeForm === 'registerFormTab' && (<Register />)}
                </PageInner>
            </Container>
        </Page>
    )
}

export default AuthPage