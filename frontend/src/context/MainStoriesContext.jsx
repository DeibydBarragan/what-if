"use client"
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { findNode } from '@/lib/functions/findNode'

const MainStoriesContext = createContext();

export const MainStoriesProvider = ({ children }) => {
  const [mainStories, setMainStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dir, setDir] = useState([])
  const [actualNode, setActualNode] = useState(null)

  useEffect(() => {
    fetchStories();
  }, []);

  useEffect(() => {
    console.log("mainStories", mainStories)
    setActualNode(findNode(mainStories, dir));
    console.log("actualNode", actualNode)
  }, [mainStories]);

  useEffect(() => {
    console.log(dir)
    if (dir.length === 0) {
      setActualNode(null);
    } else {
      setActualNode(findNode(mainStories, dir))
    }
  }, [dir]);

  useEffect(() => {
    console.log(actualNode)
  }
  , [actualNode])
  
  
  const fetchStories = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/stories");
      // Convertir el objeto en un array de historias
      const storiesArray = Object.entries(response.data).map(([id, story]) => ({
        id, // Usar el ID como clave
        ...story, // Extraer title y description
      }));
      setMainStories(storiesArray);
    } catch (error) {
      console.error("Error fetching stories:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainStoriesContext.Provider 
      value={{ mainStories, setMainStories, fetchStories, loading, dir, setDir, actualNode, setActualNode }}>
      {children}
    </MainStoriesContext.Provider>
  );
};

export const useMainStoriesContext = () => useContext(MainStoriesContext);
