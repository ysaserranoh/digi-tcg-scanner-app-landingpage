import { Box, Dialog, DialogContent, Typography, IconButton, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/material/styles'

interface BetaAnnouncementModalProps {
  open: boolean
  onClose: () => void
}

const StyledDialog = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#1C1B1F',
    borderRadius: '16px',
    padding: '8px',
    minWidth: '900px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
  },
}))

const DiscordButton = styled(Button)({
  backgroundColor: '#36205C',
  color: 'white',
  borderRadius: '12px',
  padding: '12px 32px',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 600,
  width: '300px',
  fontFamily: 'Montserrat',
  '&:hover': {
    backgroundColor: '#2a1846',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(54, 32, 92, 0.4)',
  },
  transition: 'all 0.2s ease',
})

function BetaAnnouncementModal({ open, onClose }: BetaAnnouncementModalProps) {
  const handleDiscordClick = () => {
    window.open('https://discord.gg/p3XYsvm8ty', '_blank')
    onClose()
  }

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="sm">
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 16,
          top: 16,
          color: 'rgba(255, 255, 255, 0.7)',
          '&:hover': {
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent sx={{ padding: '48px 32px', textAlign: 'center' }}>
        <Box
          sx={{
            mb: 3,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src="/assets/brand-web.svg"
            alt="Digi Logo"
            sx={{
              width: '290px',
              height: 'auto',
              marginBottom: '30px',
            }}
          />
        </Box>

        <Typography
          variant="h4"
          sx={{
            color: '#E8DEF8',
            fontWeight: 700,
            fontFamily: 'Montserrat',
            mb: 2,
            fontSize: { xs: '1.75rem', sm: '2rem' },
          }}
        >
          Private Beta Available!
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
          We've launched a private beta version for testing.
          <br />
          Be among the first to try the app and help us improve it.
        </Typography>

        <DiscordButton
          onClick={handleDiscordClick}
          fullWidth
          startIcon={
            <Box
              component="span"
              sx={{
                fontSize: '1.25rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              💬
            </Box>
          }
        >
          Join Discord
        </DiscordButton>

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
          Get early access and share your feedback
        </Typography>
      </DialogContent>
    </StyledDialog>
  )
}

export default BetaAnnouncementModal
