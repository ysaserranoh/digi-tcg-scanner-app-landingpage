import { Box, Typography, Container, Paper, Button } from '@mui/material'
import { useEffect } from 'react'

function DataDeletion() {
  useEffect(() => {
    document.documentElement.style.overflow = 'auto'
    document.body.style.overflow = 'auto'
    const root = document.getElementById('root')
    if (root) root.style.overflow = 'auto'
    const app = document.querySelector('.App') as HTMLElement
    if (app) app.style.overflow = 'auto'

    return () => {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      if (root) root.style.overflow = 'hidden'
      if (app) app.style.overflow = 'hidden'
    }
  }, [])

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#0D022B',
        py: 8,
        position: 'relative'
      }}
    >
      <Box className="hero-background">
        <img src="/assets/background.png" alt="Background" className="background-pattern" />
      </Box>

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 5 },
            bgcolor: '#0D022B',
            backdropFilter: 'blur(10px)',
            borderRadius: 2
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: '#E8DEF8',
              mb: 2,
              fontWeight: 700,
              fontFamily: 'Montserrat'
            }}
          >
            Data Deletion Request
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 4,
              fontFamily: 'Montserrat'
            }}
          >
            Request deletion of your personal data from Digi TCG Scan
          </Typography>

          <Box sx={{ color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'Montserrat' }}>
            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              Your Right to Delete Your Data
            </Typography>
            <Typography paragraph>
              At Digi TCG Scan, we respect your privacy and your right to control your personal data. You can request the deletion of all your personal data at any time.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              What Data Will Be Deleted?
            </Typography>
            <Typography paragraph>
              When you request data deletion, we will permanently delete:
            </Typography>
            <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
              <li>Your name and email address</li>
              <li>Your user ID and authentication tokens</li>
              <li>Your app preferences and settings</li>
              <li>Any app interaction history</li>
              <li>All other personal information associated with your account</li>
            </Typography>
            <Typography paragraph sx={{ fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.7)' }}>
              Note: Photos used for card scanning are processed ephemerally and are not stored on our servers, so there is no photo data to delete.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              How to Request Data Deletion
            </Typography>
            <Typography paragraph>
              You have two options to request data deletion:
            </Typography>

            <Typography variant="h6" sx={{ color: '#B8A9D3', mt: 3, mb: 1, fontWeight: 500 }}>
              Option 1: Delete from the App (Recommended)
            </Typography>
            <Typography component="ol" sx={{ pl: 3, mb: 3 }}>
              <li>Open the Digi TCG Scan app on your device</li>
              <li>Go to your Profile (tap your profile icon in the bottom navigation)</li>
              <li>Scroll down and tap "Delete Account"</li>
              <li>Confirm your decision when prompted</li>
              <li>Your account and all associated data will be deleted immediately</li>
            </Typography>

            <Typography variant="h6" sx={{ color: '#B8A9D3', mt: 3, mb: 1, fontWeight: 500 }}>
              Option 2: Email Request
            </Typography>
            <Typography paragraph>
              If you cannot access the app or prefer to email us, send your deletion request to:
            </Typography>
            <Box
              sx={{
                bgcolor: 'rgba(232, 222, 248, 0.1)',
                p: 3,
                borderRadius: 2,
                mb: 3,
                textAlign: 'center'
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#E8DEF8',
                  fontWeight: 600,
                  fontFamily: 'Montserrat',
                  mb: 1
                }}
              >
                contact@digitcgscan.app
              </Typography>
              <Button
                variant="contained"
                href="mailto:contact@digitcgscan.app?subject=Data Deletion Request&body=I would like to request the deletion of all my personal data from Digi TCG Scan.%0D%0A%0D%0AEmail associated with my account: [Your Email]%0D%0AReason (optional): "
                sx={{
                  mt: 2,
                  bgcolor: '#5B4B8A',
                  color: 'white',
                  textTransform: 'none',
                  fontFamily: 'Montserrat',
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    bgcolor: '#6B5B9A'
                  }
                }}
              >
                Send Data Deletion Request Email
              </Button>
            </Box>

            <Typography paragraph>
              Please include in your email:
            </Typography>
            <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
              <li>The email address associated with your Digi TCG Scan account</li>
              <li>Subject line: "Data Deletion Request"</li>
              <li>Optional: Reason for deletion (helps us improve our service)</li>
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              Processing Time
            </Typography>
            <Typography paragraph>
              - <strong>In-app deletion:</strong> Immediate (all data deleted instantly)
            </Typography>
            <Typography paragraph>
              - <strong>Email requests:</strong> Within 30 days of receiving your request
            </Typography>
            <Typography paragraph sx={{ fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.7)' }}>
              We may contact you to verify your identity before processing email deletion requests to ensure account security.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              What Happens After Deletion?
            </Typography>
            <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
              <li>All your personal data will be permanently removed from our systems</li>
              <li>Your account will be permanently deleted and cannot be recovered</li>
              <li>You will no longer be able to sign in with your deleted account</li>
              <li>You can create a new account at any time if you wish to use the app again</li>
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              Data Retention Exceptions
            </Typography>
            <Typography paragraph>
              We may retain certain data if required by law or for legitimate business purposes, such as:
            </Typography>
            <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
              <li>Transaction records for tax or accounting purposes</li>
              <li>Data necessary to resolve disputes or enforce our Terms of Service</li>
              <li>Aggregated, anonymized data that cannot identify you personally</li>
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              Questions?
            </Typography>
            <Typography paragraph>
              If you have any questions about the data deletion process or data retention, please contact us at:
            </Typography>
            <Typography paragraph>
              Email: contact@digitcgscan.app
            </Typography>
            <Typography paragraph>
              We're here to help and will respond to your inquiry within 48 hours.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default DataDeletion
