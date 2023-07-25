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
}

const CharacContext = createContext<CharacterContextType>({
  characters: [],
  setCharacters: () => {}
});

const CharacterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  return (
    <CharacContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharacContext.Provider>
  );
};

export { CharacContext, CharacterProvider };
