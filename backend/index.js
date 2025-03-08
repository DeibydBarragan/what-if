const { NaryTree, NaryTreeNode } = require('./classes/NaryTreeNode')
const HashTable = require('./classes/HashTable')
const Stack = require('./classes/Stack')
const Story = require('./classes/Story')
const Card = require('./classes/Card')
const express = require('express');
const WhatIf = require('./classes/WhatIf')
const app = express()
const cors = require("cors");
const { Graph } = require('./classes/Graph')
const port = 3001

// Habilita CORS para todos los dominios
app.use(cors());

// Middleware para procesar JSON en el body
app.use(express.json());

const stories = new HashTable()

const history = new Stack()

const storyGraph = new Graph(); 

// Obtiene todas las historias
app.get('/api/stories', (req, res) => {
  const storiesArray = stories.entries(); // O(N) - Obtiene todas las historias como pares [key, value]
  
  // Convertimos cada historia a JSON llamando a `toJSON()`
  const serializedStories = Object.fromEntries(
    storiesArray.map(([key, story]) => [key, story.root.toJSON()])
  );

  res.status(200).json(serializedStories);
});

// Obtiene una
app.get('/api/story', (req, res) => {
  const direction = req.query.dir.split('/').map(Number);

  const story = stories.get(direction[0]);
  if (!story) {
    res.status(404).json({ error: "Historia no encontrada" });
    return;
  }

  let node = story.root;
  if (direction.length > 1) {
    node = node.getNodeByPath(direction.slice(1));
  }

  res.status(200).json(node.toJSON());
});

// Guarda una historia
app.post('/api/stories', (req, res) => {
  
  const newStory = new Story(req.body.title, req.body.description)

  const story = new NaryTree(newStory)
  stories.set(stories.values().length+1, story)

  storyGraph.addVertex(stories.values().length);

  res.status(200).json({ message: 'Historia guardada' })
})

// Guarda una carta o what if en una historia
app.post('/api/stories/child', (req, res) => {
  let newObject

  if(req.body.isWhatIf){
    newObject = new WhatIf(req.body.title, req.body.description) 
  } else {
    newObject = new Card(req.body.content)
  }
  const object = new NaryTreeNode(newObject)
  
  const direction = req.query.dir.split('/')
  const story = stories.get(parseInt(direction[0]))
  let node = story.root
  if (direction.length > 1) {
    node = node.getNodeByPath(direction.slice(1)); // Buscar el nodo usando la nueva función
  }
  node.addChild(object)
  res.status(200).json({ message: 'Carta guardada' })
})

// Guarda una historia en el historial
app.post('/api/history', (req, res) => {
  const id = req.query.id
  const story = stories.get(parseInt(id))
  history.push(story.root.value.title)
  res.status(200).json({ message: 'Historia guardada en el historial' })
})

// Obtiene el historial
app.get('/api/history', (req, res) => {
  res.status(200).json(history.traverse())
})

// Conectar dos historias manualmente (en un endpoint o cuando se crea una nueva historia)
app.get('/api/relations', (req, res) => {
  res.status(200).json({ graph: storyGraph.adjacencyList });
});


// Conectar dos historias manualmente (en un endpoint o cuando se crea una nueva historia)
app.post('/api/relations/connect', (req, res) => {
  const { id1, id2 } = req.body;
  storyGraph.addEdge(id1, id2);
  res.status(200).json({ message: `Historias ${id1} y ${id2} conectadas` });
});

// Obtener historias relacionadas
app.get('/api/relations/related', (req, res) => {
  const { id } = req.query;
  const relatedStories = storyGraph.adjacencyList[id] || [];
  res.status(200).json({ related: relatedStories });
});
 
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})