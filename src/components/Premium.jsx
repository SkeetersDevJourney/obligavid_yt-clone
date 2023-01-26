import { Stack, Box, Typography, Button } from '@mui/material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import DownloadIcon from '@mui/icons-material/Download';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import Patterns from '../assets/patterns.png';
import PremiumLogo from '../assets/logo-premium.png';
import { ContentCard } from './'

const Premium = () => {
  return (
    <Box className='feed-scroll' height='95vh' sx={{overflowY: 'auto'}}>
      <Stack 
        justifyContent='center' 
        alignItems='center'
        textAlign='center'
        color='#fff'
        px={2}
        sx={{
          backgroundImage: `url(${Patterns})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          height: '70vh',
        }}
      >
        <img 
          src={PremiumLogo} 
          alt='premium logo'
          className='page-logo'
        />

        <Typography variant='h4' maxWidth='500px' py={5}>
          Obligavids and ObliaTunes ad-free, offline, and in the background
        </Typography>

        <Button sx={{ 
          backgroundColor: '#1e1e1e', 
          color: '#a71d31', 
          borderRadius: '20px',
          ':hover': { backgroundColor: '#fff'}
        }}> Try Now </Button>

        <Typography variant='h5' maxWidth='500px' py={3}>
          2-month free trial &#x2022; Then $199.99/week
        </Typography>
        <Typography variant='subtitle1' maxWidth='500px' >
          We'll remind you 10 minutes before your trial ends
        </Typography>
        <Typography variant='subtitle1' maxWidth='500px' pb={3}>
          Recurring billing &#x2022; <span style={{ color: '#a71d31'}}>No cancellations ever</span>
        </Typography>
        <Typography variant='subtitle2' maxWidth='500px'>
          Or save by financing your entertainment with our annual, family, or student plans
        </Typography>
      </Stack>

      <Stack 
        justifyContent='center'
        alignItems='center'
        direction={{ xs: 'column', md: 'row' }}
        backgroundColor='#a71d31'
        py={4}
      > 

        <ContentCard 
          media={<PlayCircleOutlineIcon sx={{ fontSize: '100px'}} />} 
          text1={'Ad-free & background play'} 
          text2={'Watch videos uninterrupted by ads, while using other apps, or when the screen is locked'} 
        />
        <ContentCard 
          media={<DownloadIcon sx={{ fontSize: '100px'}}/>} 
          text1={'Downloads'} 
          text2={'Save videos for when you really need them – like when you’re on a plane or commuting.'} 
        />
        <ContentCard 
          media={<AccessAlarmIcon sx={{ fontSize: '100px'}}/>} 
          text1={'More Watch Time'} 
          text2={'Never waste another second of your life NOT consuming our entertainment!'} 
        />
      </Stack>

      <Box
        sx={{
          backgroundImage: `url(${Patterns})`,
          backgroundSize: 'cover',
          height: '30vh',
        }}
      >

      </Box>
    </Box>
  )
}

export default Premium