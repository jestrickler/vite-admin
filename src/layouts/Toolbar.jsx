import { Box, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext } from '../theme'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'

const Toolbar = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      {/* SEARCH BAR */}
      <Box display='flex' backgroundColor='background.accent' borderRadius={1}>
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          placeholder='Search'
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton aria-label='submit search' type='button' sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display='flex'>
        <IconButton aria-label='color mode' onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton aria-label='notifications'>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton aria-label='settings'>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton aria-label='user'>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Toolbar
