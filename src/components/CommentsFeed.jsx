import { Stack } from '@mui/material';

import { Comment } from './'

const CommentsFeed = ({ comments }) => {
  return (
    <Stack alignItems='left'>
      {
        comments?.map(comment => (
          <Comment comment={comment} key={comment.id}/>
        ))
      }
    </Stack>
  )
}

export default CommentsFeed