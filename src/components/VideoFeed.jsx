import { Box, Grid } from '@mui/material';

import { VideoCard } from './';

const VideoFeed = ({ videos }) => {
  return (
    <Box className='feed-scroll' pb={5} sx={{ marginX: 'auto', maxWidth: '1500px', height: "90vh", overflowY: 'auto' }} px={3}>
      <Grid
        container
        spacing={3}
        columns={{ xs: 1, sm: 4, md: 6, lg: 12}}
      >
        { videos.map(video => <VideoCard video={video} key={video?.id?.videoId}/>) }
      </Grid>
    </Box>
  )
}

export default VideoFeed