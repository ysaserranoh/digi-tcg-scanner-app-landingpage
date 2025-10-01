import { Box, Typography, Container, Paper } from '@mui/material'
import { useEffect } from 'react'

function TermsOfService() {
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
            Terms of Service
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
              1. Acceptance of Terms
            </Typography>
            <Typography paragraph>
              By accessing or using the Digi TCG Scan mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              2. Description of Service
            </Typography>
            <Typography paragraph>
              Digi TCG Scan is a mobile application that allows users to scan Digimon Trading Card Game (TCG) cards and retrieve information including card details, market prices from third-party sources (CardMarket and TCGPlayer), and card variations.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              3. User Accounts
            </Typography>
            <Typography variant="h6" sx={{ color: '#B8A9D3', mt: 3, mb: 1, fontWeight: 500 }}>
              3.1 Account Creation
            </Typography>
            <Typography paragraph>
              To use certain features of the App, you must create an account using OAuth authentication (Google Sign-In). You are responsible for maintaining the confidentiality of your account credentials.
            </Typography>
            <Typography variant="h6" sx={{ color: '#B8A9D3', mt: 3, mb: 1, fontWeight: 500 }}>
              3.2 Account Responsibilities
            </Typography>
            <Typography paragraph>
              You are responsible for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              4. Acceptable Use
            </Typography>
            <Typography paragraph>
              You agree to use the App only for lawful purposes and in accordance with these Terms. You agree not to:
            </Typography>
            <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
              <li>Use the App in any way that violates any applicable law or regulation</li>
              <li>Attempt to gain unauthorized access to any portion of the App</li>
              <li>Interfere with or disrupt the App or servers or networks connected to the App</li>
              <li>Use any automated system to access the App without our permission</li>
              <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
              <li>Use the App for any commercial purposes without our written consent</li>
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              5. Intellectual Property Rights
            </Typography>
            <Typography variant="h6" sx={{ color: '#B8A9D3', mt: 3, mb: 1, fontWeight: 500 }}>
              5.1 App Ownership
            </Typography>
            <Typography paragraph>
              The App and its entire contents, features, and functionality are owned by Digi TCG Scan and are protected by international copyright, trademark, and other intellectual property laws.
            </Typography>
            <Typography variant="h6" sx={{ color: '#B8A9D3', mt: 3, mb: 1, fontWeight: 500 }}>
              5.2 Third-Party Content
            </Typography>
            <Typography paragraph>
              Digimon and Digimon Trading Card Game are trademarks of Bandai. All card images, names, and related content are property of their respective owners. This app is not affiliated with, endorsed, or sponsored by Bandai.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              6. Price Information Disclaimer
            </Typography>
            <Typography paragraph>
              Card prices displayed in the App are provided by third-party sources (CardMarket and TCGPlayer) and are for informational purposes only. We do not guarantee the accuracy, completeness, or timeliness of price information. Actual prices may vary. We are not responsible for any transactions made based on the information provided in the App.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              7. Privacy and Data Collection
            </Typography>
            <Typography paragraph>
              Your use of the App is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your personal information.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              8. Disclaimer of Warranties
            </Typography>
            <Typography paragraph>
              THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:
            </Typography>
            <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
              <li>The App will function uninterrupted, secure, or available at any particular time or location</li>
              <li>Any errors or defects will be corrected</li>
              <li>The App is free of viruses or other harmful components</li>
              <li>The results of using the App will meet your requirements</li>
              <li>Card recognition will be 100% accurate at all times</li>
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              9. Limitation of Liability
            </Typography>
            <Typography paragraph>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL DIGI TCG SCAN, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
            </Typography>
            <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
              <li>Your use or inability to use the App</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content</li>
              <li>Transactions made based on price information provided in the App</li>
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              10. Indemnification
            </Typography>
            <Typography paragraph>
              You agree to indemnify, defend, and hold harmless Digi TCG Scan and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of the App or your violation of these Terms.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              11. Modifications to the Service
            </Typography>
            <Typography paragraph>
              We reserve the right to modify or discontinue, temporarily or permanently, the App (or any part thereof) with or without notice. You agree that we shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the App.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              12. Changes to Terms
            </Typography>
            <Typography paragraph>
              We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when we post them and apply to all access to and use of the App thereafter. Your continued use of the App following the posting of revised Terms means that you accept and agree to the changes.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              13. Termination
            </Typography>
            <Typography paragraph>
              We may terminate or suspend your account and access to the App immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the App will immediately cease.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              14. Governing Law
            </Typography>
            <Typography paragraph>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              15. Dispute Resolution
            </Typography>
            <Typography paragraph>
              Any disputes arising out of or relating to these Terms or the App shall be resolved through binding arbitration in accordance with the rules of the applicable arbitration association, except where prohibited by law.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              16. Severability
            </Typography>
            <Typography paragraph>
              If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              17. Entire Agreement
            </Typography>
            <Typography paragraph>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Digi TCG Scan regarding the use of the App and supersede all prior agreements and understandings.
            </Typography>

            <Typography variant="h5" sx={{ color: '#E8DEF8', mt: 4, mb: 2, fontWeight: 600 }}>
              18. Contact Information
            </Typography>
            <Typography paragraph>
              If you have any questions about these Terms, please contact us at:
            </Typography>
            <Typography paragraph>
              Email: contact@digitcgscan.app
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default TermsOfService
