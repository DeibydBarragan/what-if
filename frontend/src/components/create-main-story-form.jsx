
import React from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import MainStory from '@/lib/classes/MainStory';
import { useRouter } from 'next/navigation';

const CreateMainStoryForm = ({mainStories, setMainStories}) => {
  const router = useRouter();

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const id = mainStories.length + 1
    const userId = 1
    const title = formData.get('title')
    const description = formData.get('description')
    const cards = []
    const newStory = new MainStory(id, title, description, userId, cards)
    setMainStories([...mainStories, newStory])
    router.push(`/story/${id}`)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="grid gap-4">
        {/* TITULO */}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title">Titulo</Label>
          <Input type="text" id="title" name="title" required/>
        </div>

        {/* DESCRIPCION */}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="description">Descripcion</Label>
          <Textarea id="description" name="description" required/>
        </div>
        {/* SUBMIT */}
        <Button type="submit" className="w-full">
          Crear historia
        </Button>
      </div>
    </form>
  );
}

export default CreateMainStoryForm;
