import CardContent from '@/lib/classes/CardContent';
import React from 'react';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const CreateCardForm = ({ cards, setCards }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const id = cards.length + 1
    const content = formData.get('content')
    const whatIfs = []
    const newCard = new CardContent(id, content, whatIfs)
    setCards([...cards, newCard])
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
        <Button type="submit" className="w-full">
          Crear carta
        </Button>
      </div>
    </form>
  );
}

export default CreateCardForm;
