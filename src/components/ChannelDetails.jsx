import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { VideoFeed, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetails = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then(data => setChannelDetail(data?.items[0]))
      .catch(err => new Error(err))
      
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => setVideos(data?.items))
      .catch(err => new Error(err))
  }, [id])
  
  return (
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{
            backgroundImage: "url('https://picsum.photos/1080/300')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 10,
            height: '200px'
          }}
        />
        <Box sx={{marginTop: '-125px'}}>
          <ChannelCard channelDetail={channelDetail} />

        </Box>
      </Box>
      <Box display='flex' justifyContent='center'>
        <VideoFeed videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetails