import '@/styles/commonComponents.css';
import marvelLogo from '@/images/Marvel_Logo.svg.png';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <Image src={marvelLogo} alt="Logo da Marvel" className='marvelLogo' />
    </header>
  )
}