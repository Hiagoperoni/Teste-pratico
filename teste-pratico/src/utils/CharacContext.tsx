'use client'
import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

export interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

export interface CharacterContextType {
  characters: Character[];
  setCharacters: Dispatch<SetStateAction<Character[]>>;
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const useCharacContext = createContext<CharacterContextType>({
  characters: [],
  setCharacters: () => {},
  currentPage: 1,
  totalPages: 157,
  setCurrentPage: () => {},
});

const CharacterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 157;

  return (
    <useCharacContext.Provider value={{ characters, setCharacters, currentPage, totalPages, setCurrentPage }}>
      {children}
    </useCharacContext.Provider>
  );
};

export { useCharacContext, CharacterProvider };
