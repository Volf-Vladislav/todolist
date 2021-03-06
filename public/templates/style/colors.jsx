let theme = 'light'

export function initTheme(color) {
    theme = color
}

const darkTheme = {
    title: 'rgba(255, 255, 255, 0.78)',
    disabledText: '#575767',
    defaultText: 'rgba(255, 255, 255, 0.7)',

    background: '#141419',
    button: '#242432',

    checkBox: 'black'
}

const lightTheme = {
    title: '#4b4b4b',
    disabledText: '#b3b3b4',
    defaultText: '#575767',

    background: '#fbfbfb',
    button: '#3a3a3a',

    checkBox: 'black'
}

export function COLORS() {
    console.log(theme)
    if (theme == 'dark') {
        return darkTheme
    }

    else return lightTheme
}