import { Box, Typography } from '@mui/material'

function Footer() {
  return (
    <Box sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#2C184F',
      padding: '14px',
      textAlign: 'center',
      zIndex: 5
    }}>
      <Typography variant="body2" sx={{
        color: 'white',
        fontSize: '12px',
        lineHeight: 1.4,
        fontFamily: 'Montserrat'
      }}>
        All content related to Digimon, including card images and text, is the property of © Bandai Namco Entertainment Inc. and Toei Animation.
        <br />
        This application is an independent fan project and is not produced, endorsed, sponsored, or affiliated in any way with Bandai Namco Entertainment Inc. or Toei Animation.
        <br />
        All remaining original content is <span style={{ fontWeight: 500 }}>© 2025-2026 DIGI•TCG•scan.</span>
      </Typography>
    </Box>
  )
}

export default Footer