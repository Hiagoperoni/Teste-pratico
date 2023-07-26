'use client'
import styles from '@/styles/searchHeroes.module.scss';
import Header from "@/components/Header"
import Footer from "@/components/Footer";
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import { useContext, useEffect } from 'react';
import { useCharacContext, Character } from '@/utils/CharacContext';
import HeroCard from '@/components/HeroCard';

export default function Home() {
  const { characters } = useContext(useCharacContext);

  useEffect(() => {
  }, [characters]);

  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.searchContainer}>
        <section className={styles.searchContainerTitleContent}>
          <h1>Pesquisa de Personagens:</h1>
          <SearchBar/>
        </section>
        <section className={ characters.length > 0 ? styles.searchResults : styles.searchOneResult }>
          {characters.length > 0 ? characters.map((eachCarac: Character) => (
              <HeroCard key={ eachCarac.id } id={ eachCarac.id } name={ eachCarac.name } thumbnail={ eachCarac.thumbnail } />
            )) : (<p>Pesquise pelo nome do Herói ou clique em Pesquisar Todos para verificar todos os Heróis do Catálogo</p>)
          }
        </section>
        {characters.length > 9 && <Pagination />}
      </section>
      <Footer />
    </main>
  )
}
