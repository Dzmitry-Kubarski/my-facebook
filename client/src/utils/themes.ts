import { cyan, white, black, violet, gray } from './colors'

// defaultTheme
export const defaultTheme = {
    primaryColor: cyan.normal,
    primaryColorLight: cyan.light,
    primaryColorDark: cyan.dark,
    primaryColorHover: cyan.hover,
    primaryColorShadow: '4px 7px 12px 0 rgba(35, 210, 226, .2)',

    secondaryColor: violet.normal,
    secondaryColorDark: violet.dark,
    secondaryColorDarker: violet.darker,
    secondaryColorShadow: '4px 7px 12px 0 rgba(97, 93, 250, .2)',
    secondaryColorHover: violet.hover,

    colorBody: '#f8f8fb',
    colorBodyUnderlay: white.normal,

    colorText: black.normal,
    colorTextSecond: gray.normal,

    colorTextLink: cyan.dark,

    colorBoxBackground: white.normal,

    colorBorder: gray.light,
}

// darkTheme
export const darkTheme = {
    primaryColor: '#7750f8',
    primaryColorDark: '#5538b5',
    primaryColorDarker: '#7750f8',
    primaryColorHover: '#9668ff',
    primaryColorShadow: '4px 7px 12px 0 rgba(119, 80, 248, .2)',
}
