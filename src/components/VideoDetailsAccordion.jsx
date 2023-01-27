import { Typography, Box, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const VideoDetailsAccordion = ({ videoDetails }) => {
  const { 
    snippet: { description, publishedAt },
    statistics: { viewCount } 
  } = videoDetails

  return (
    <Stack>
      <Accordion sx={{ color: '#fff', backgroundColor: 'rgba(255,255,255,.15)' }}>
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

      <Accordion sx={{ color: '#fff', backgroundColor: 'rgba(255,255,255,.15)' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }}/>}
        >
          <Typography>
            Comments
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Comments Section
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Stack>
  )
}

export default VideoDetailsAccordion