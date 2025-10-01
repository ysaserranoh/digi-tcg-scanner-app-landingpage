import { AppBar, Toolbar, Container, Box, Button, IconButton, Menu, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { Menu as MenuIcon } from '@mui/icons-material'
import { useState } from 'react'

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        backgroundColor: '#36205C',
        top: 0,
        zIndex: 10,
        width: '100%'
      }}
    >
      <Container maxWidth="xl" sx={{ px: 4 }}>
        <Toolbar sx={{ justifyContent: 'space-between', padding: '0', minHeight: '50px' }}>
          <Box component={Link} to="/" sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              component="img"
              src="/assets/brand-web.svg"
              alt="Digi TCG Scanner"
              sx={{ height: 33, width: 'auto' }}
            />
          </Box>
          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button
              disabled
              sx={{
                color: 'white',
                opacity: 0.5,
                fontWeight: 500,
                textTransform: 'none',
                fontSize: '14px',
                fontFamily: 'Montserrat',
                cursor: 'not-allowed',
                '&:hover': {
                  backgroundColor: 'transparent'
                },
                '&.Mui-disabled': {
                  color: 'white !important'
                }
              }}
            >
              Guides
            </Button>
            <Button
              component={Link}
              to="/contact"
              sx={{
                color: 'white',
                fontWeight: 500,
                textTransform: 'none',
                fontSize: '14px',
                fontFamily: 'Montserrat',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Contact
            </Button>
            <Button
              component={Link}
              to="/privacy-policy"
              sx={{
                color: 'white',
                fontWeight: 500,
                textTransform: 'none',
                fontSize: '14px',
                fontFamily: 'Montserrat',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Privacy Policy
            </Button>
            <Button
              component={Link}
              to="/terms-of-service"
              sx={{
                color: 'white',
                fontWeight: 500,
                textTransform: 'none',
                fontSize: '14px',
                fontFamily: 'Montserrat',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Terms of Service
            </Button>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={handleMenuClick}
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              PaperProps={{
                sx: {
                  backgroundColor: '#36205C',
                  color: 'white',
                  minWidth: '120px'
                }
              }}
            >
              <MenuItem
                disabled
                onClick={handleMenuClose}
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: '14px',
                  color: 'white !important',
                  opacity: 0.5,
                  cursor: 'not-allowed'
                }}
              >
                Guides
              </MenuItem>
              <MenuItem
                component={Link}
                to="/contact"
                onClick={handleMenuClose}
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: '14px',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Contact
              </MenuItem>
              <MenuItem
                component={Link}
                to="/privacy-policy"
                onClick={handleMenuClose}
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: '14px',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Privacy Policy
              </MenuItem>
              <MenuItem
                component={Link}
                to="/terms-of-service"
                onClick={handleMenuClose}
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: '14px',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Terms of Service
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar