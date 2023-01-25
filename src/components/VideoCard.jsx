import { Link } from 'react-router-dom';
import { Stack, Box, Grid, Skeleton, Card, CardMedia, CardContent, Typography } from '@mui/material';

import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle
} from '../utils/constants'

const VideoCard = ({ video }) => (
  <Card sx={{ background: 'transparent', width: '100%', borderRadius: '20px'}}>
    {
      video 
      ? 
      <>
        <Link to={video ? `/video/${video.id.videoId}` : `/video/cV2gBU6hKfY`}>
          <CardMedia 
            image={video?.snippet?.thumbnails?.medium?.url} 
            alt={video?.snippet?.title}
            sx={{ height: '180px'}}
          /> 
        </Link>
        <CardContent sx={{ backgroundColor: 'transparent', height: '100px' }}>

          <Link to={ video ? `/video/${video?.id?.videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {video?.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>

          <Link to={ video ? `/video/${video?.id?.videoId}` : demoVideoUrl}>
            <Typography variant="subtitle2" color="gray">
              {video?.snippet?.channelTitle || demoChannelTitle}
            </Typography>
          </Link>
        </CardContent>
      </>
      : <Skeleton sx={{ height: '150px'}}/>
    }
  </Card>
)

export default VideoCard

// video 
//     ? 
//     return (
//       <Card variant='outlined'>  
//         <Link>
//           <CardMedia image={"#"}/>  
//         </Link>
//         <CardContent></CardContent>
//         <h1>Title</h1>
  
//       </Card>
//     ) : 
//     return (
//       <Skeleton variant='rectangular' width={200} height={100} />
//     );
    
//   )

// <>
//         <Skeleton 
//           variant='rectangular'
//           height='150px'
//           sx={{backgroundColor: 'rgba(255,255,255,.1)'}}
//         /> 
//         <Stack>
//           <Skeleton variant='circular' sx={{ display: 'inline', backgroundColor: 'rgba(255,255,255,.1)'}}/>
//           <Box>
//             <Skeleton height={20} sx={{backgroundColor: 'rgba(255,255,255,.1)'}}/>
//             <Skeleton height={10} sx={{backgroundColor: 'rgba(255,255,255,.1)'}}/>
            
//           </Box>
//         </Stack>
//       </>