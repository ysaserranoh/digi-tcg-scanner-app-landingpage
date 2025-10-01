import { Box, Typography, Container, Paper } from '@mui/material'
import { useEffect } from 'react'

function PrivacyPolicy() {
  useEffect(() => {
    // Enable scroll for this page
    document.documentElement.style.overflow = 'auto'
    document.body.style.overflow = 'auto'
    const root = document.getElementById('root')
    if (root) root.style.overflow = 'auto'
    const app = document.querySelector('.App') as HTMLElement
    if (app) app.style.overflow = 'auto'

    // Cleanup: restore original overflow on unmount
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
            Privacy Policy
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 4,
              fontFamily: 'Montserrat'
            }}
          >
            Last updated: October 1, 2025
          </Typography>

          <Box sx={{ color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'Montserrat' }}>
            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              1. Introduction
            </Typography>
            <Typography paragraph>
              Welcome to Digi TCG Scan ("we", "our", or "us"). We are committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              2. Information We Collect
            </Typography>
            <Typography variant="h6" sx={{ color: '#B8A9D3', mt: 3, mb: 1, fontWeight: 500 }}>
              2.1 Personal Information
            </Typography>
            <Typography paragraph>
              When you create an account using OAuth (Google Sign-In), we collect:
            </Typography>
            <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
              <li>Name</li>
              <li>Email address</li>
              <li>User ID (provided by OAuth provider)</li>
            </Typography>

            <Typography variant="h6" sx={{ color: '#B8A9D3', mt: 3, mb: 1, fontWeight: 500 }}>
              2.2 Photos and Camera Access
            </Typography>
            <Typography paragraph>
              We collect photos when you scan Digimon TCG cards. This data is:
            </Typography>
            <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
              <li>Processed ephemerally (temporarily) for card recognition</li>
              <li>Not stored permanently on our servers</li>
              <li>Used solely for app functionality (card identification)</li>
            </Typography>

            <Typography variant="h6" sx={{ color: '#B8A9D3', mt: 3, mb: 1, fontWeight: 500 }}>
              2.3 App Interactions
            </Typography>
            <Typography paragraph>
              We collect information about how you interact with the app to improve functionality and user experience.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              3. How We Use Your Information
            </Typography>
            <Typography paragraph>
              We use the collected information for:
            </Typography>
            <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
              <li>Account management and authentication</li>
              <li>App functionality (card scanning and price checking)</li>
              <li>Improving user experience</li>
              <li>Providing customer support</li>
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              4. Data Sharing
            </Typography>
            <Typography paragraph>
              We do not share your personal data with third parties. Your information is used exclusively within our app for the purposes described in this policy.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              5. Data Security
            </Typography>
            <Typography paragraph>
              We implement industry-standard security measures to protect your data:
            </Typography>
            <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
              <li>All data is encrypted in transit using HTTPS/SSL</li>
              <li>Secure authentication via OAuth providers</li>
              <li>Regular security updates and monitoring</li>
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              6. Your Rights
            </Typography>
            <Typography paragraph>
              You have the right to:
            </Typography>
            <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing</li>
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              7. Data Retention
            </Typography>
            <Typography paragraph>
              We retain your personal data only as long as necessary to provide our services and comply with legal obligations. Photos captured for scanning are processed ephemerally and not retained.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              8. Children's Privacy
            </Typography>
            <Typography paragraph>
              Our app is suitable for all ages. We do not knowingly collect personal information from children without parental consent.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              9. Changes to This Policy
            </Typography>
            <Typography paragraph>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              10. Contact Us
            </Typography>
            <Typography paragraph>
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
            </Typography>
            <Typography paragraph>
              Email: contact@digitcgscan.app
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              11. Data Deletion Request
            </Typography>
            <Typography paragraph>
              To request deletion of your personal data or account, please visit our Data Deletion page or contact us at the email address above. We will process your request within 30 days.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default PrivacyPolicy
