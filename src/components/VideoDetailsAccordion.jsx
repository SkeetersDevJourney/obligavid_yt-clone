import { Typography, Box, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { CommentsFeed } from './'

const VideoDetailsAccordion = ({ videoDetails, comments }) => {
  const { 
    snippet: { description, publishedAt },
    statistics: { viewCount } 
  } = videoDetails

  return (
    <Stack py={1} >
      <Box sx={{ borderRadius: '20px', overflow: 'hidden'}} mb={1}>
        <Accordion sx={{ color: '#fff', backgroundColor: 'rgba(255,255,255,.10)', borderRadius: '20px' }} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }}/>}
          >
            <Typography>
              Description
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
              <Typography variant='body1' sx={{ opacity: 0.5 }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant='body1' sx={{ opacity: 0.5 }}>
                Published: {(publishedAt).slice(0, 10).toLocaleString()}
              </Typography>
            </Stack>
            <Typography>
              {description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box sx={{ borderRadius: '20px', overflow: 'hidden'}} mb={3}>
        <Accordion sx={{ color: '#fff', backgroundColor: 'rgba(255,255,255,.10)' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }}/>}
          >
            <Typography>
              Comments
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CommentsFeed comments={comments} />
          </AccordionDetails>
        </Accordion>
      </Box>

    </Stack>
  )
}

export default VideoDetailsAccordion