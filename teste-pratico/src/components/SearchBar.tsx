"use client";
import styles from "@/styles/searchBar.module.scss";
import React, { ChangeEvent, useContext, useState } from 'react';
import { useCharacContext, Character } from '@/utils/CharacContext';
import { getCharacters, getCharacterByName } from "@/api/routes";

export default function SearchBar() {
  const { setCharacters, currentPage } = useContext(useCharacContext);
  const [nameToSearch, setNameToSearch] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNameToSearch(event.target.value);
  }

  const handleSearchByName = async () => {
    const characSearched: Character[] | string = await getCharacterByName(nameToSearch);
    if (Array.isArray(characSearched)) {
      setCharacters(characSearched);
    } else {
      console.log("Herói não Encontrado");
    }
  };

  const handleSearchAll = async () => {
    console.log(currentPage);
    
    const allCharacs = await getCharacters(currentPage);
    setCharacters(allCharacs);
  };

  return (
    <section>
      <input type="text" placeholder="Digite o nome do Herói" className={styles.searchBar} onChange={handleInputChange}/>
      <button
        type="button"
        className={styles.searchBarButton}
        onClick={handleSearchByName}
      >
        Pesquisar Herói
      </button>
      <button 
        type="button" 
        className={styles.searchBarButton} 
        onClick={handleSearchAll}
      >
        Pesquisar Todos
      </button>
    </section>
  );
}
