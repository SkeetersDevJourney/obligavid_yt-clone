import { useState } from 'react';
import { Stack, IconButton } from '@mui/material';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Likes = ({ likeCount }) => {

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

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
    <Stack direction='row' alignItems='center' >
        <IconButton 
          sx={{ 
            borderRadius: '10px 0 0 10px', 
            height: '45px',
            color: 'white',
            borderRight: '1px solid #0c090a',
            backgroundColor: liked ? '#a71d31' : 'rgba(255,255,255,.10)',
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
            backgroundColor: disliked ? '#a71d31' : 'rgba(255,255,255,.10)',
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
  )
}

export default Likes