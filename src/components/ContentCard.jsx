import React from 'react'
import { Card, CardContent, Typography  } from '@mui/material'

const ContentCard = ({ media, text1, text2 }) => {
  return (
    <Card
      sx={{ 
        backgroundColor: 'transparent',
        maxWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '15px',
        boxShadow: 'none'
      }}
    > 
      {media}
      <Typography variant='h5' my={1} >
        {text1}
      </Typography>
      <Typography variant='subtitle1'>
        {text2}
      </Typography>
    </Card>
  )
}

export default ContentCard