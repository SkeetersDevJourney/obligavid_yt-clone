import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack, IconButton } from '@mui/material';


import { Likes } from './';
import { VideoFeed, VideoDetailsAccordion } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetails = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const [comments, setComments] = useState(null)
  const { id } = useParams();
  
  console.log(videoDetails, comments, relatedVideos);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data => setVideoDetails(data.items[0]));

    fetchFromAPI(`commentThreads?part=snippet&videoId=${id}&maxResults=5`)
      // .then(data => setComments(data.items));
      .then(data => setComments(data.items));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then(data => setRelatedVideos(data.items));

    
  }, [id]);

  if (!videoDetails) return 'Loading...';

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails;

  return (
    <Box minHeight='95vh' pt={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} px={2}>
        <Box sx={{ width: '100%' }}>
          <ReactPlayer 
            url={`https://www.youtube.com/watch?v=${id}`}
            controls  
            width='100%'
            height='55vh'
          />
          <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
            {title}
          </Typography>
          <Stack 
            direction='row' 
            alignItems='center'
            justifyContent='space-between'
            sx={{ color: '#fff' }}
            px={2}
          >
            <Link to={`${process.env.PUBLIC_URL}/channel/${channelId}`}>
              <Typography variant={{ sm: 'subtitle1', md: 'h6'}} color='#fff'>
                {channelTitle}
              </Typography>
            </Link>

            <Likes likeCount={likeCount} />
          </Stack>

          <VideoDetailsAccordion videoDetails={videoDetails} comments={comments} />
        </Box>

        <Box justifyContent='center' alignItems='center'>
          <VideoFeed videos={relatedVideos} showSide={true}/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails