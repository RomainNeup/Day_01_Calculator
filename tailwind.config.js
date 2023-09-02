tailwind.config = {
    theme: {
        colors: {
            primary: '#5CA4A9',
            secondary: '#9BC1BC',
            light: '#E6EBE0',
            dark: '#303036',
            transparent: 'transparent',
            white: "#fff"
        }
    },
    darkMode: 'class',
}

if (localStorage.theme === 'dark' || (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}