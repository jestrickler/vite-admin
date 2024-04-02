import { useState } from 'react'
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Avatar, Box, IconButton, Typography, useTheme } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Item = ({ title, to, icon, selected, setSelected }) => (
  <MenuItem
    active={selected === title}
    onClick={() => {
      document.getElementById('root').focus()
      setSelected(title)
    }}
    icon={icon}
    component={<Link to={to} />}
  >
    <Typography variant='h4' component='div'>
      {title}
    </Typography>
  </MenuItem>
)

const Sidebar = () => {
  const theme = useTheme()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  return (
    <ProSidebar
      collapsed={isCollapsed}
      backgroundColor={theme.palette.background.accent}
      rootStyles={{ border: 'none', height: '100%' }}
    >
      <Box
        display='flex'
        justifyContent={isCollapsed ? 'center' : 'space-between'}
        alignItems='center'
        mt={2}
        mx={3}
      >
        {!isCollapsed && (
          <Typography variant='h3' component='div'>
            ADMINIS
          </Typography>
        )}
        <IconButton
          aria-label='collapse'
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <MenuOutlinedIcon />
        </IconButton>
      </Box>
      {!isCollapsed && (
        <Box>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            mt={3}
          >
            <Avatar
              sx={{ height: 80, width: 80 }}
              alt='John Doe'
              src='/user.png'
            />
          </Box>
          <Box textAlign='center'>
            <Typography variant='h3' component='div' fontWeight='bold'>
              John Doe
            </Typography>
            <Typography variant='h6' component='div' color='primary.main'>
              VP Fancy Admin
            </Typography>
          </Box>
        </Box>
      )}
      <Box
        mt={2}
        sx={{
          '& .ps-menu-button:hover': {
            backgroundColor: `${theme.palette.background.default} !important`
          },
          '& .ps-active': {
            color: `${theme.palette.primary.main} !important`
          }
        }}
      >
        <Menu>
          <Item
            title='Dashboard'
            to='/'
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography variant='h6' component='div' ml={3}>
            Data
          </Typography>
          <Item
            title='Team'
            to='/team'
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='Contacts'
            to='/contacts'
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='Invoices'
            to='/invoices'
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography variant='h6' component='div' ml={3}>
            Pages
          </Typography>
          <Item
            title='Profile'
            to='/profile'
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='Calendar'
            to='/calendar'
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='FAQ'
            to='/faq'
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography variant='h6' component='div' ml={3}>
            Charts
          </Typography>
          <Item
            title='Bar Chart'
            to='/bar'
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='Pie Chart'
            to='/pie'
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='Line Chart'
            to='/line'
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='Geography Chart'
            to='/geography'
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>
      </Box>
    </ProSidebar>
  )
}
export default Sidebar
