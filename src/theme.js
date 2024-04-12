import { createContext, useState, useMemo } from 'react'
import { createTheme } from '@mui/material/styles'

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              main: '#90CAF9'
            },
            secondary: {
              main: '#ff6e40'
            },
            background: {
              default: '#141b2d',
              accent: '#1F2A40',
              contrast: '#e0e0e0'
            }
          }
        : {
            // palette values for light mode
            primary: {
              main: '#1870C9'
            },
            secondary: {
              main: '#ff6e40'
            },
            background: {
              default: '#fcfcfc',
              accent: '#F5F5F5',
              contrast: '#141414'
            }
          })
    },
    typography: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      // fontSize: 12,
      h1: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 40
      },
      h2: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 32
      },
      h3: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 24
      },
      h4: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 20
      },
      h5: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 18
      },
      h6: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 16
      }
    }
  }
}

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {}
})

export const useMode = () => {
  const [mode, setMode] = useState('dark')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }),
    []
  )

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return [theme, colorMode]
}
