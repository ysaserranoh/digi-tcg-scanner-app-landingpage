import { Box, Typography, Container, Card, CardContent, SvgIcon } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'

// Custom TikTok Icon Component
function TikTokIcon(props: any) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.93a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04.64z"/>
    </SvgIcon>
  )
}

function Contact() {
  return (
    <Box>
      {/* Same background as Home */}
      <Box className="hero-background">
        <img src="/assets/background.png" alt="Background" className="background-pattern" />
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: { xs: 10, md: 8 },
          position: 'relative',
          zIndex: 2
        }}
      >
        <Box sx={{ textAlign: 'center', width: '100%' }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: 'white',
              mb: 2,
              mt: 4,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              fontFamily: 'Montserrat'
            }}
          >
            Get in Touch
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 6,
              fontSize: { xs: '1rem', md: '1.2rem' },
              maxWidth: '600px',
              margin: '0 auto 48px auto'
            }}
          >
            Have questions, feedback, or business inquiries? I'd love to hear from you!
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {/* Email Contact */}
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 45%' }, maxWidth: { xs: '100%', md: '45%' } }}>
              <Card sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardContent sx={{ p: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  {/* <EmailIcon sx={{ fontSize: 48, color: '#E8DEF8', mb: 2 }} /> */}
                  <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
                    Email Me
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 3 }}>
                    For general inquiries, support, or business opportunities
                  </Typography>
                  <Typography
                    component="a"
                    href="mailto:contact@digitcgscan.app"
                    sx={{
                      color: '#E8DEF8',
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    contact@digitcgscan.app
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Social Media */}
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 45%' }, maxWidth: { xs: '100%', md: '45%' } }}>
              <Card sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardContent sx={{ p: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
                    Follow Me
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 3 }}>
                    Stay updated with the latest news and updates
                  </Typography>

                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                    <Box
                      component="a"
                      href="https://www.instagram.com/ysayisa/"
                      target="_blank"
                      sx={{
                        color: 'white',
                        transition: 'color 0.2s ease',
                        '&:hover': { color: 'rgba(255, 255, 255, 0.7)' },
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <InstagramIcon sx={{ fontSize: 32 }} />
                    </Box>

                    <Box
                      component="a"
                      href="https://www.tiktok.com/@ysayisa_"
                      target="_blank"
                      sx={{
                        color: 'white',
                        transition: 'color 0.2s ease',
                        '&:hover': { color: 'rgba(255, 255, 255, 0.7)' },
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <TikTokIcon sx={{ fontSize: 32 }} />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              mt: 6,
              fontSize: '0.9rem'
            }}
          >
            I typically respond within 24-48 hours
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact