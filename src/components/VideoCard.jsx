import { Link } from 'react-router-dom';
import { Grid, Skeleton, Card, CardMedia, CardContent, Typography } from '@mui/material';

const VideoCard = ({ video }) => (
  <Grid item xs={1} sm={2} md={2} lg={3}>
    {
      <Skeleton 
        variant='rectangular'
        sx={{backgroundColor: 'rgba(255,255,255,.1)'}}
      /> 
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