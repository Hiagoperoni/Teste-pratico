'use client'
import { useState } from 'react';
import { getCharacters, getCharacterByName } from "@/api/routes";

export default function CharactersGenerator() {
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    getCharacters();
    setGenerated(true);
  };

  return (
    <>
      <button onClick={handleGenerate} disabled={generated}>
        {generated ? 'Gerado!' : 'Gerar'}
      </button>
      <button onClick={ () => getCharacterByName('Hulk') }>
        By Name
      </button>
    </>
  );
}