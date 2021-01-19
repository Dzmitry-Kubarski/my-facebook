import { cyan, white, black, violet, gray } from './colors'

/*----------------------------------------
    lightTheme
----------------------------------------*/
export const lightTheme = {
    title: 'light',

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

    colorDivider: '#eaeaf5',
    colorBorder: gray.light,

    colorTabBorder: white.normal,
    colorTabText: white.normal,
    colorTabTextActive: black.normal,
    colorTabTextActiveBackground: white.normal,
}

/*----------------------------------------
    darkTheme
----------------------------------------*/
export const darkTheme = {
    title: 'dark',

    primaryColor: '#4ff461',
    primaryColorLight: '#4ff461',
    primaryColorDark: '#4ff461',
    primaryColorHover: '#4ae95b',
    primaryColorShadow: '4px 7px 12px 0 rgba(64, 208, 79, .2)',

    secondaryColor: '#7750f8',
    secondaryColorDark: '#5538b5',
    secondaryColorDarker: '#7750f8',
    secondaryColorShadow: '4px 7px 12px 0 rgba(119, 80, 248, .2)',
    secondaryColorHover: '#9668ff',

    colorBody: '#161b28',
    colorBodyUnderlay: white.normal,

    colorText: white.normal,
    colorTextSecond: gray.normal,

    colorTextLink: cyan.dark,

    colorBoxBackground: '#1d2333',

    colorDivider: '#2f3749',
    colorBorder: black.normal,

    colorTabBorder: '#1d2333',
    colorTabText: '#1d2333',
    colorTabTextActive: white.normal,
    colorTabTextActiveBackground: '#1d2333',
}
