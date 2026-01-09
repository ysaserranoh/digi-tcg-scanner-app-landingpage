import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import BetaAnnouncementModal from '../components/BetaAnnouncementModal'

function Home() {
  const [showBetaModal, setShowBetaModal] = useState(true)

  const handleCloseBetaModal = () => {
    setShowBetaModal(false)
  }

  return (
    <Box>
      <Box className="hero-background">
        <img src="/assets/background.png" alt="Background" className="background-pattern" />
      </Box>

      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Mobile Layout */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            px: 3,
            py: { xs: 0, sm: 8 },
            mt: { xs: '-10vh', sm: 0 },
            zIndex: 2
          }}
        >
          {/* Mobile Content */}
          <Box sx={{ textAlign: 'center', mb: 0 }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: 'white',
                mb: 2,
                fontSize: { xs: '2.2rem', sm: '2.5rem' },
                fontWeight: 700,
                textAlign: 'center',
                lineHeight: 1.2,
                fontFamily: 'Montserrat'
              }}
            >
              Stop searching,<br />
              Start <span style={{ color: '#E8DEF8' }}>SCANNING</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 4,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                textAlign: 'center',
                lineHeight: 1.4,
                maxWidth: '300px',
                mx: 'auto',
                fontFamily: 'Montserrat'
              }}
            >
              Instant card identification with set, market value, and every version
            </Typography>
          </Box>

          {/* Mobile Download Buttons */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              mb: 4,
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Box
                component="img"
                src="/assets/android-badge.svg"
                alt="Get it on Google Play"
                sx={{
                  height: 45,
                  cursor: 'not-allowed',
                  opacity: 0.6,
                  filter: 'grayscale(50%)',
                  transition: 'opacity 0.2s ease',
                  '&:hover': { opacity: 0.8 },
                  imageRendering: 'auto',
                  WebkitImageRendering: 'auto'
                }}
              />
              <Box
                component="img"
                src="/assets/apple-badge.svg"
                alt="Download on App Store"
                sx={{
                  height: 45,
                  cursor: 'not-allowed',
                  opacity: 0.6,
                  filter: 'grayscale(50%)',
                  transition: 'opacity 0.2s ease',
                  '&:hover': { opacity: 0.8 },
                  imageRendering: 'auto',
                  WebkitImageRendering: 'auto'
                }}
              />
            </Box>
            <Typography
              variant="h2"
              sx={{
                color: '#E8DEF8',
                fontSize: { xs: '2.5rem', sm: '3rem' },
                fontWeight: '900',
                textAlign: 'center',
                fontFamily: 'Montserrat',
                lineHeight: 1,
                mb: 4
              }}
            >
              COMING SOON!
            </Typography>
          </Box>

          {/* Mobile Mockup */}
          {/* <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box
              component="img"
              src="/assets/image-mobile.svg"
              alt="Mobile App Preview"
              sx={{
                maxWidth: { xs: '280px', sm: '320px' },
                width: '100%',
                height: 'auto',
                filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
                imageRendering: 'crisp-edges',
                WebkitImageRendering: 'crisp-edges',
                MsInterpolationMode: 'nearest-neighbor'
              }}
            />
          </Box> */}
        </Box>

        {/* Desktop Layout - Left Container */}
        <Box
          sx={{
            flex: { xs: 0, md: 0.5 },
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'flex-end',
            pr: { md: 6, lg: 0 },
            pl: { md: 20, lg: 10 },
            zIndex: 2
          }}
        >
          <Box sx={{
            textAlign: 'center',
            maxWidth: { md: '600px', lg: '900px' }
          }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: 'white',
                mb: { md: 3 },
                fontSize: { md: '2.5rem', lg: '2rem', xl: '3rem' },
                fontWeight: 700,
                textAlign: 'center',
                lineHeight: { md: 0.5 }
              }}
            >
              Stop searching, Start scanning
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                mb: { md: 3 },
                fontSize: { md: '1.1rem', lg: '.9rem', xl: '1.3rem' },
                textAlign: 'center',
                lineHeight: 1.5
              }}
            >
             Instant card identification with set, market value, and every version.
            </Typography>
            <Box sx={{
              display: 'flex',
              gap: { md: 2 },
              mt: { md: 4 },
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Box
                component="img"
                src="/assets/apple-badge.svg"
                alt="Download on App Store"
                sx={{
                  height: { md: 45, lg: 50 },
                  cursor: 'not-allowed',
                  opacity: 0.6,
                  filter: 'grayscale(50%)',
                  transition: 'opacity 0.2s ease',
                  '&:hover': { opacity: 0.8 }
                }}
              />
              <Box
                component="img"
                src="/assets/android-badge.svg"
                alt="Get it on Google Play"
                sx={{
                  height: { md: 45, lg: 50 },
                  cursor: 'not-allowed',
                  opacity: 0.6,
                  filter: 'grayscale(50%)',
                  transition: 'opacity 0.2s ease',
                  '&:hover': { opacity: 0.8 }
                }}
              />
            </Box>
            <Typography
              variant="h2"
              sx={{
                color: '#E8DEF8',
                fontSize: { md: '3.5rem', lg: '3.5rem', xl: '4.8rem' },
                fontWeight: '900',
                textAlign: 'center',
                mt: { md: 4 },
                fontFamily: 'Montserrat',
                lineHeight: 1
              }}
            >
              COMING SOON!
            </Typography>
          </Box>
        </Box>

        {/* Desktop Layout - Right Container */}
        <Box
          sx={{
            flex: { xs: 0, md: 0.5 },
            position: 'relative',
            display: { xs: 'none', md: 'block' },
            overflow: 'hidden'
          }}
        >
          <Box
            component="img"
            src="/assets/mobile-capture.svg"
            alt="Mobile App Preview"
            sx={{
              position: 'absolute',
              bottom: 0,
              right: { md: '40%', lg: '50%', xl: '60%' },
              transform: 'translateX(50%)',
              height: { md: '85vh', lg: '80vh', xl: '85vh' },
              width: 'auto',
              maxWidth: 'none',
              filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
              zIndex: 1
            }}
          />
        </Box>
      </Box>

      <BetaAnnouncementModal open={showBetaModal} onClose={handleCloseBetaModal} />
    </Box>
  )
}

export default Home