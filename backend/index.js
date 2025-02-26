const { NaryTree, NaryTreeNode } = require('./classes/NaryTreeNode');
const HashTable = require('./classes/HashTable')
const Story = require('./classes/Story')
const Card = require('./classes/Card')
const express = require('express');
const WhatIf = require('./classes/WhatIf');
const app = express()
const port = 3000

// Middleware para procesar JSON en el body
app.use(express.json());

const stories = new HashTable()
//stories.set('a', new NaryTree(new Story('root', 'root')))

// Obtiene todas las historias
app.get('/api/stories', (req, res) => {
  const storiesArray = stories.entries()  // O(N)
  const storiesObject = Object.fromEntries(storiesArray) // O(N)
  console.log(stories.values())
  res.status(200).json(storiesObject)
});

// Guarda una historia
app.post('/api/stories', (req, res) => {
  console.log(req.body)
  
  const newStory = new Story(req.body.title, req.body.description)

  const story = new NaryTree(newStory)
  stories.set(stories.values().length+1, story)

  res.status(200).json({ message: 'Historia guardada' })
})

// Guarda una carta en historia
app.post('/api/stories/child', (req, res) => {
  let newObject

  if(req.body.isWhatIf){
    newObject = new WhatIf(req.body.title, req.body.description) 
  } else {
    newObject = new Card(req.body.content)
  }
  const object = new NaryTreeNode(newObject)
  
  const direction = req.query.dir.split('/')
  console.log(direction[0])
  const story = stories.get(parseInt(direction[0]))
  console.log(story)
  let node = story.root
  if (direction.length === 1) {
    node.addChild(object)
    res.status(200).json({ message: 'Carta guardada' })
    return
  }
  for (let i = 1; i < direction.length; i++) {
    node = node.children[direction[i]]
  }
  console.log("Node")
  console.log(node)
  node.addChild(object)
  res.status(200).json({ message: 'Carta guardada' })
})
 
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})