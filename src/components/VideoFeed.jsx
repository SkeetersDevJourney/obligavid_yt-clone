import { Box, Typography } from '@mui/material';

import { VideoCard, ChannelCard } from './';

const VideoFeed = ({ videos, showSide = false }) => {

  return (
    <Box className='feed-scroll' pb={5} sx={{  height: "90vh", overflowY: 'auto' }} px={3}>
      <Box
        sx={{ 
          display: 'grid',
          gap: '20px',
          marginX: 'auto',
          maxWidth: '1360px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
        }}
        className={ showSide && 'show-side' }
      >
        { videos?.length ? (
        
          videos.map((item, index) => (
            <Box key={index}>
              { item?.id?.videoId && <VideoCard video={item}/> }
              { item?.id?.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          )) 
          ) : (
            <Typography variant='h3' px={2} mt={5} sx={{ color: '#fff' }} textAlign='center'>
              Loading...
            </Typography>
          )
        }
      </Box>
    </Box>
  )
}

export default VideoFeed