import { useState } from 'react';
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const searchTerm = useParams();

  return (
    <div>SearchFeed</div>
  )
}

export default SearchFeed