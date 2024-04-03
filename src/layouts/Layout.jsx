import { Box, Button, CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from '../theme.js'
import { Outlet } from 'react-router-dom'
import { Toolbar } from './Toolbar.jsx'
import { Sidebar } from './Sidebar.jsx'

const Layout = () => {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Button
          href='#main-content'
          sx={{
            position: 'absolute',
            left: -9999,
            'z-index': 999,
            '&:focus': {
              left: '50%',
              transform: 'translateX(-50%)'
            }
          }}
        >
          Skip to main content
        </Button>
        <Box display='flex' height='100%'>
          <Sidebar />
          <Box width='100%' p={2}>
            <Toolbar />
            <Box component='main' id='main-content' width='100%' pt={2}>
              <Outlet />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export { Layout }
