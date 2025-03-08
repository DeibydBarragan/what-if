
import React from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import MainStory from '@/lib/classes/MainStory';
import { useState } from 'react';
import axios from "axios";
import { Loader2 } from "lucide-react"

const CreateMainStoryForm = ({fetchStories}) => {
  const [buttonLoading, setButtonLoading] = useState(false)

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setButtonLoading(true)
    const formData = new FormData(e.target)
    const title = formData.get('title')
    const description = formData.get('description')
    const newStory = new MainStory(title, description)
    try {
      const response = await axios.post("http://localhost:3001/api/stories", newStory);

      await fetchStories()
  
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error en la petición:", error);
    }
    setButtonLoading(false)
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
        {buttonLoading ? (
            <Button disabled>
              <Loader2 className="animate-spin" />
            </Button>
          ) : (
            
            <Button type="submit" className="w-full">
              Crear historia
            </Button>
          )
        }
      </div>
    </form>
  );
}

export default CreateMainStoryForm;
