"use client"
import CardContent from '@/lib/classes/CardContent';
import React from 'react';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useState } from 'react';
import axios from "axios";
import { Loader2 } from "lucide-react"

const CreateCardForm = ({ fetchStories, dir, actualNode, setActualNode, mainStories }) => {
  const [buttonLoading, setButtonLoading] = useState(false)

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setButtonLoading(true)
    const formData = new FormData(e.target)
    const content = formData.get('content')
    const newCard = new CardContent(content)

    try {
      const url = `http://localhost:3001/api/stories/child?dir=${dir.join("/")}`

      const response = await axios.post(url, newCard)

      await fetchStories()

      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error en la petición:", error);
    }
    setButtonLoading(false)

    e.target.reset()
    //focus en el textarea
    e.target.content.focus()
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="grid gap-4">
        {/* DESCRIPCION */}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="content">Contenido</Label>
          <Textarea id="content" name="content" required focus/>
        </div>
        {/* SUBMIT */}
        {buttonLoading ? (
          <Button disabled>
            <Loader2 className="animate-spin" />
          </Button>
        ) : (
          
          <Button type="submit" className="w-full">
            Crear carta
          </Button>
        )}
      </div>
    </form>
  );
}

export default CreateCardForm;
