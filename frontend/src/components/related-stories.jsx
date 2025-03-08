import { useMainStoriesContext } from '@/context/MainStoriesContext';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const RelatedStories = ({ dir, setDir }) => {
  const { mainStories } = useMainStoriesContext()
  const [relatedStories, setRelatedStories] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchRelatedStories = async () => {
    const response = await axios.get(`http://localhost:3001/api/relations/related?id=${dir[0]}`)
    console.log(response.data)
    const stories = response.data.related.map(id => mainStories.find(story => story.id === id))
    setRelatedStories(stories)
    setLoading(false)
  }

  useEffect(() => {
    fetchRelatedStories()
  }, [])

  return (
    <div className="flex flex-col gap-4">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        relatedStories.map((story) => (
          <div key={story.id} className="flex items-center justify-between gap-4">
            <p>{story.value.title}</p>
            <Button onClick={() => setDir([story.id])}>Ir</Button>
          </div>
        ))
      )}
    </div>
  );
}

export default RelatedStories;
