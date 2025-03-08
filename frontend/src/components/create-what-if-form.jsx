import WhatIf from '@/lib/classes/WhatIf';
import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useMainStoriesContext } from '@/context/MainStoriesContext';
import { Loader2 } from 'lucide-react';

const CreateWhatIfForm = ({ id }) => {

  const { dir, setDir, fetchStories } = useMainStoriesContext()
  const [buttonLoading, setButtonLoading] = useState(false)

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const title = formData.get('title')
    const description = formData.get('description')
    const newWhatIf = new WhatIf(title, description)

    setButtonLoading(true)

    try {
      const url = `http://localhost:3001/api/stories/child?dir=${dir.join("/")}/${id}`
      console.log(url)
  
      const response = await axios.post(url, newWhatIf)

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
          <Label htmlFor="title">Título del What If</Label>
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
              Crear What If
            </Button>
          )
        }
      </div>
    </form>
  );
}

export default CreateWhatIfForm;
