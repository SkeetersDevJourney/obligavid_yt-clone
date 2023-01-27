import { useState, useEffect } from 'react';
import { Link, useActionData, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack, IconButton } from '@mui/material';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import { VideoFeed, VideoDetailsAccordion } from './';
import { fetchFromAPI, fetchFromApi } from '../utils/fetchFromAPI';

const VideoDetails = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { id } = useParams();
  
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  
  console.log(videoDetails, relatedVideos);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data => setVideoDetails(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then(data => setRelatedVideos(data.items));
  }, [id]);

  if (!videoDetails) return 'Loading...';

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails;

  const likeHandler = () => {
    if (liked) {
      setLiked(false)
      
    } else {
      setLiked(true)
      setDisliked(false)
    }
  }
  const dislikeHandler = () => {
    if (disliked) {
      setDisliked(false)
    } else {
      setDisliked(true)
      setLiked(false)
    }
  }

  return (
    <Box minHeight='95vh' pt={2}>
      <Stack direction={{ xs: 'column', md: 'row' }}>
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

            <Stack direction='row' alignItems='center' >
              <IconButton 
                sx={{ 
                  borderRadius: '10px 0 0 10px', 
                  height: '45px',
                  color: 'white',
                  backgroundColor: liked ? '#a71d31' : 'rgba(255,255,255,.15)',
                  ':hover': { backgroundColor: liked ? 'red' : 'rgba(255,255,255,.3)' },
                  transition: 'all .3s ease'
                  
                }}
                onClick={likeHandler}
              >
                {
                  liked 
                  ? <ThumbUpIcon />
                  : <ThumbUpOffAltIcon />  
                }
                {
                  liked 
                  ? parseInt(likeCount) + 1
                  : parseInt(likeCount)
                }
              </IconButton>
              <IconButton 
                sx={{ 
                  borderRadius: '0 10px 10px 0', 
                  color: 'white',
                  height: '45px',
                  backgroundColor: disliked ? '#a71d31' : 'rgba(255,255,255,.15)',
                  ':hover': { backgroundColor: disliked ? 'red' : 'rgba(255,255,255,.3)' },
                  transition: 'all .3s ease'
                  
                }}
                onClick={dislikeHandler}
              >
                {
                  disliked 
                  ? <ThumbDownIcon />
                  : <ThumbDownOffAltIcon />  
                }
                </IconButton>
            </Stack>
          </Stack>

          <VideoDetailsAccordion videoDetails={videoDetails} />
        </Box>

        <Box justifyContent='center' alignItems='center'>
          <VideoFeed videos={relatedVideos} showSide={true}/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails