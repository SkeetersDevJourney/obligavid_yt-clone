import { Link } from 'react-router-dom';
import { Stack, Box, Grid, Skeleton, Card, CardMedia, CardContent, Typography } from '@mui/material';

const VideoCard = ({ video }) => (
  <Grid item xs={1} sm={2} md={2} lg={3}>
    {
      <Card sx={{ backgroundColor: 'rgba(255,255,255,.1)', width: '100%'}}>
        {
          video 
          ? <CardMedia 
            image={video?.snippet?.thumbnails?.medium?.url} 
            alt={video?.snippet?.title}
            sx={{ height: '180px'}}
            /> 
          : <Skeleton sx={{ height: '180px'}}/>
        }
      </Card>
    }
  </Grid>
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