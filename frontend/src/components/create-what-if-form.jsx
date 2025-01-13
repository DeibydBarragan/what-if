import WhatIf from '@/lib/classes/WhatIf';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const CreateWhatIfForm = () => {
  const router = useRouter()
  const pathName = usePathname()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const id = 1
    const userId = 1
    const title = formData.get('title')
    const description = formData.get('description')
    const cards = []
    const newWhatIf = new WhatIf(id, title, description, userId, cards)
    console.log(pathName)
    router.push(`${pathName}/${id}`)
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
        <Button type="submit" className="w-full">
          Crear What If
        </Button>
      </div>
    </form>
  );
}

export default CreateWhatIfForm;
