import '@/styles/searchHeroes.css';
import Header from "@/components/Header"
import CharactersGenerator from "@/components/Button";
import Footer from "@/components/Footer";
import SearchBar from '@/components/SerachBar';

export default function Home() {
  return (
    <main>
      <Header />
      <section className="searchContainer">
        <section className="searchTitleContent">
          <h1>Pesquisa de Super-Heróis:</h1>
          <SearchBar/>
        </section>
        <section className="searchResult">
          <h1>teste</h1>
        </section>
      </section>
      <CharactersGenerator />
      <Footer />
    </main>
  )
}
