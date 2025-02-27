"use client"
import { createContext, useContext, useState } from "react";

const MainStoriesContext = createContext();

export const MainStoriesProvider = ({ children }) => {
  const [mainStories, setMainStories] = useState([]);

  return (
    <MainStoriesContext.Provider value={{ mainStories, setMainStories }}>
      {children}
    </MainStoriesContext.Provider>
  );
};

export const useMainStoriesContext = () => useContext(MainStoriesContext);
