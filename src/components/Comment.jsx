import { Stack, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'; 

import { Likes } from './';
import { demoChannelUrl, demoChannelTitle, demoProfilePicture } from '../utils/constants';


const Comment = ({ comment }) => {

  const { snippet: { topLevelComment: { snippet: { authorChannelId, authorDisplayName, authorProfileImageUrl, textDisplay, likeCount }}}} = comment;

  return (
    <Stack direction='row' alignItems='left' px={1} py={2.5} > 
      <Link to={`/channel/${authorChannelId.value}`}>
        <img src={authorProfileImageUrl} alt='#' style={{ borderRadius: '50%', height: '45px' }} referrerPolicy="no-referrer" />
      </Link>
      <Stack alignItems='left' mx={1}>
        <Link to={`/channel/${authorChannelId.value}`}>
          <Typography fontWeight='bold'>
            @{authorDisplayName}
          </Typography>
        </Link>
        <Typography py={.5}>
          { textDisplay }
        </Typography>
        <Likes likeCount={likeCount} />
      </Stack>
    </Stack>
  )
}

export default Comment