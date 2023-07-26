import { Pagination } from "@/DTOS/api.dto";
import { useCharacContext } from "@/utils/CharacContext";
import { useContext } from "react";
import { getCharacters } from "@/api/routes";
import styles from "@/styles/pagination.module.scss";

export default function Pagination() {
  const { currentPage, totalPages, setCurrentPage, setCharacters } =
    useContext(useCharacContext);

  const advanceOne = async () => {
    const nextOnePage = currentPage + 1;
    setCurrentPage(nextOnePage);
    const result = await getCharacters(nextOnePage);
    return setCharacters(result);
  };

  const advanceTwo = async () => {
    const nextTwoPage = currentPage + 2;
    setCurrentPage(nextTwoPage);
    const result = await getCharacters(nextTwoPage);
    return setCharacters(result);
  };

  const backOne = async () => {
    if (currentPage === 1) {
      return null;
    }
    const backOnePage = currentPage - 1;
    setCurrentPage(backOnePage);
    const result = await getCharacters(backOnePage);
    return setCharacters(result);
  };

  const backTwo = async () => {
    if (currentPage < 3) {
      return null;
    }
    const backTwoPage = currentPage - 2;
    setCurrentPage(backTwoPage);
    const result = await getCharacters(backTwoPage);
    return setCharacters(result);
  };

  return (
    <section className={styles.pagination}>
      <button type="button" onClick={backOne} className={styles.paginationButton}>
        Anterior
      </button>
      <button
        type="button"
        onClick={backOne}
        style={currentPage - 2 < 1 ? { display: "none" } : undefined}
        className={styles.paginationNumber}
      >
        {currentPage - 2}
      </button>
      <button
        type="button"
        onClick={backTwo}
        style={currentPage - 1 < 1 ? { display: "none" } : undefined}
        className={styles.paginationNumber}
      >
        {currentPage - 1}
      </button>
      <button type="button" className={styles.paginationSelected}>
        {currentPage}
      </button>
      <button
        type="button"
        onClick={advanceOne}
        className={styles.paginationNumber}
        style={currentPage + 1 > totalPages ? { display: "none" } : undefined}
      >
        {currentPage + 1}
      </button>
      <button
        type="button"
        onClick={advanceTwo}
        className={styles.paginationNumber}
        style={currentPage + 2 > totalPages ? { display: "none" } : undefined}
      >
        {currentPage + 2}
      </button>
      <button
        type="button"
        onClick={advanceOne}
        className={styles.paginationButton}
      >
        Próximo
      </button>
    </section>
  );
}
