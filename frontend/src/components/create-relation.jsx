import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useMainStoriesContext } from "@/context/MainStoriesContext";
import { Button } from "@/components/ui/button";

const CreateRelation = ({ dir }) => {
  const { mainStories } = useMainStoriesContext()
  const [loading, setLoading] = useState(true)

  const handleOnClickStory = async (id) => {
    setLoading(true)
    const response = await axios.post('http://localhost:3001/api/relations/connect', { id1: dir[0], id2: id })
    console.log(response.data)
    setLoading(false)
  }

  useEffect(() => {
    console.log(mainStories)
  }
  , [])

  return (
    <div className="flex flex-col gap-4">
      {mainStories
        .filter((mainStory) => mainStory.id !== dir[0]) // Filtra la historia con id === dir[0]
        .map((mainStory, index) => (
          <div key={index} className="flex items-center justify-between gap-6">
            <p>{mainStory.value.title}</p>
            <Button onClick={() => handleOnClickStory(mainStory.id)}>Relacionar</Button>
          </div>
        ))}
    </div>
  );
}

export default CreateRelation;
