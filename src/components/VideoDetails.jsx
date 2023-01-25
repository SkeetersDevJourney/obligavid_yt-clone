import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';

import { VideoFeed } from './';
import { fetchFromAPI, fetchFromApi } from '../utils/fetchFromAPI';

const VideoDetails = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { id } = useParams();
  
  console.log(videoDetails, relatedVideos);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data => setVideoDetails(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then(data => setRelatedVideos(data.items));
  }, [id]);

  if (!videoDetails) return 'Loading...';

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flexGrow={1}>
          <Box sx={{ minWidth: '100%' }}>
            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls  
              flexGrow={1}
            />
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack 
              direction='row' 
              justifyContent='space-between'
              sx={{ color: '#fff' }}
              py={1}
              pr={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6'}} color='#fff'>
                  {channelTitle}
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, sx: 5}} justifyContent='center' alignItems='center'>
          <VideoFeed videos={relatedVideos} columns={{xs: 1, sm: 4, md: 1, lg: 1}} />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails