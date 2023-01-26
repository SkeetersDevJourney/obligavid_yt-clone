import { useState, useEffect } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { VideoFeed } from './';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
    <Stack>
      <Box>
        <Typography variant="h4" fontWeight="bold" my={2} ml={2} sx={{ color: "#fff" }}>
            {searchTerm} 
        </Typography>
      </Box>

      <VideoFeed videos={videos} />
    </Stack>
  )
}

export default SearchFeed