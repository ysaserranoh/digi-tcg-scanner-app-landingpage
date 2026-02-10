import { Box, Dialog, DialogContent, Typography, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/material/styles'
import { useEffect } from 'react'
import confetti from 'canvas-confetti'

let confettiFired = false

interface BetaAnnouncementModalProps {
  open: boolean
  onClose: () => void
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#1C1B1F',
    borderRadius: '16px',
    padding: '8px',
    minWidth: '900px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
    [theme.breakpoints.down('md')]: {
      minWidth: '90%',
      margin: '16px',
    },
  },
}))

function BetaAnnouncementModal({ open, onClose }: BetaAnnouncementModalProps) {
  useEffect(() => {
    if (!open || confettiFired) return
    confettiFired = true

    const colors = ['#E8DEF8', '#D0BCFF', '#FFFFFF', '#CCC2DC', '#B69DF8', '#FFD700', '#FF6B6B']

    const canvas = document.createElement('canvas')
    canvas.style.position = 'fixed'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100vw'
    canvas.style.height = '100vh'
    canvas.style.zIndex = '99999'
    canvas.style.pointerEvents = 'none'
    document.body.appendChild(canvas)

    const myConfetti = confetti.create(canvas, { resize: true })

    // Delay before confetti starts (ms)
    const timeout = setTimeout(() => {
      const duration = 1500
      const end = Date.now() + duration

      const interval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(interval)
          setTimeout(() => canvas.remove(), 3000)
          return
        }

        myConfetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.5 },
          colors,
          scalar: 1.2,
          gravity: 0.8,
          ticks: 300,
        })

        myConfetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.5 },
          colors,
          scalar: 1.2,
          gravity: 0.8,
          ticks: 300,
        })
      }, 50)
    }, 500)

    // No cleanup - we want the confetti to finish even if StrictMode re-runs
  }, [open])

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="sm">
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: { xs: 8, sm: 16 },
          top: { xs: 8, sm: 16 },
          color: 'rgba(255, 255, 255, 0.7)',
          zIndex: 10,
          padding: { xs: '12px', sm: '8px' },
          minWidth: { xs: '44px', sm: 'auto' },
          minHeight: { xs: '44px', sm: 'auto' },
          '&:hover': {
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
          '&:active': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
        }}
      >
        <CloseIcon sx={{ fontSize: { xs: '24px', sm: '24px' } }} />
      </IconButton>

      <DialogContent sx={{
        padding: { xs: '32px 24px', sm: '48px 32px' },
        textAlign: 'center'
      }}>
        <Box
          sx={{
            mb: 3,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src="/assets/brand.png"
            alt="Digi Logo"
            sx={{
              width: { xs: '140px', sm: '200px' },
              height: 'auto',
              marginBottom: { xs: '20px', sm: '30px' },
            }}
          />
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontFamily: 'Montserrat',
            mb: 2,
            fontSize: { xs: '1.75rem', sm: '2rem' },
            background: 'linear-gradient(90deg, #E8DEF8, #FFD700, #FF6B6B, #00E5FF, #B69DF8, #FFD700, #E8DEF8)',
            backgroundSize: '300% 100%',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shimmer 3s linear infinite',
            '@keyframes shimmer': {
              '0%': { backgroundPosition: '0% 50%' },
              '100%': { backgroundPosition: '300% 50%' },
            },
          }}
        >
          The App is Live!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontFamily: 'Montserrat',
            mb: 3,
            lineHeight: 1.6,
            fontSize: { xs: '0.95rem', sm: '1rem' },
          }}
        >
          Scan your Digimon cards instantly to identify sets, check market prices, and discover every version.
          <br />
          Download now and start scanning!
        </Typography>

        <Box
          component="a"
          href="https://play.google.com/store/apps/details?id=com.ysayisa.digimontcgscanner.v2"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onClose()}
          sx={{ display: 'inline-block', lineHeight: 0 }}
        >
          <Box
            component="img"
            src="/assets/android-badge.svg"
            alt="Get it on Google Play"
            sx={{
              height: { xs: 50, sm: 60 },
              cursor: 'pointer',
              transition: 'transform 0.2s ease, opacity 0.2s ease',
              '&:hover': { transform: 'scale(1.05)', opacity: 0.9 },
            }}
          />
        </Box>

        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontFamily: 'Montserrat',
            mt: 2,
            display: 'block',
            fontSize: '0.8rem',
          }}
        >
          Available now on Android. iOS coming soon!
        </Typography>
      </DialogContent>
    </StyledDialog>
  )
}

export default BetaAnnouncementModal
