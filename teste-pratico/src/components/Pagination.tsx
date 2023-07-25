import '@/styles/commonComponents.css';
import { Pagination } from '@/DTOS/api.dto';
import { useCharacContext } from '@/utils/CharacContext';
import { useContext } from 'react';

export default function Pagination() {
  const { currentPage, totalPages, setCurrentPage } = useContext(useCharacContext);
  return (
    <section>
      <button type='button'>Anterior</button>
      <button type='button'>Anterior</button>
      <button type='button'>Anterior</button>
      <button type='button'>Anterior</button>
      <button type='button'>Anterior</button>
      <button type='button'>Anterior</button>
      <button type='button'>Próximo</button>
    </section>
  )
}