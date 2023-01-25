import { Box, Grid } from '@mui/material';

import { VideoCard, ChannelCard } from './';

const VideoFeed = ({ videos, columns }) => {
  return (
    <Box className='feed-scroll' pb={5} sx={{ marginX: 'auto', maxWidth: '1500px', height: "90vh", overflowY: 'auto' }} px={3}>
      <Grid
        container
        spacing={3}
        columns={columns}
      >
        { videos?.map((video, index) => (
          <Grid item xs={1} sm={2} md={2} lg={3} key={index}>
            { video?.id?.videoId && <VideoCard video={video}/> }
            { video?.id?.channelId && <ChannelCard video={video} />}
          </Grid>
          )) }
      </Grid>
    </Box>
  )
}

export default VideoFeed