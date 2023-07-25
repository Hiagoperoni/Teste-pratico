'use client'
import '@/styles/searchHeroes.css';
import Header from "@/components/Header"
import Footer from "@/components/Footer";
import SearchBar from '@/components/SearchBar';
import { useContext, useEffect } from 'react';
import { CharacContext, Character } from '@/utils/CharacContext';
import HeroCard from '@/components/HeroCard';

export default function Home() {
  const { characters } = useContext(CharacContext);

  useEffect(() => {
    console.log('Lista de personagens:', characters);
  }, [characters]);

  return (
    <main>
      <Header />
      <section className="searchContainer">
        <section className="searchTitleContent">
          <h1>Pesquisa de Super-Heróis:</h1>
          <SearchBar/>
        </section>
        <section className="searchResult">
          {characters.length > 0 ? characters.map((eachCarac: Character) => (
              <HeroCard key={ eachCarac.id } id={ eachCarac.id } name={ eachCarac.name } thumbnail={ eachCarac.thumbnail } />
            )) : (<p>Pesquise pelo nome do Herói ou clique em Pesquisar Todos para verificar todos os Heróis do Catálogo</p>)
          }
        </section>
      </section>
      <Footer />
    </main>
  )
}
