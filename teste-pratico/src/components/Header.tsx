import style from '@/styles/commonComponents.module.scss';
import marvelLogo from '@/images/Marvel_Logo.svg.png';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={style.header}>
      <Image src={marvelLogo} alt="Logo da Marvel" className={style.marvelLogo} />
    </header>
  )
}