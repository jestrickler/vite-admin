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
              main: '#70d8bd'
            },
            secondary: {
              main: '#ffa726'
            },
            background: {
              default: '#141b2d',
              accent: '#37474f',
              contrast: '#e0e0e0'
            }
          }
        : {
            // palette values for light mode
            primary: {
              main: '#1e5245'
            },
            secondary: {
              main: '#ef6c00'
            },
            background: {
              default: '#fcfcfc',
              accent: '#eeeeee',
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
