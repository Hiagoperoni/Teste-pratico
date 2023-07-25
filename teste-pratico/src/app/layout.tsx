import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CharacterProvider } from '@/utils/CharacContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Teste Técnico',
  description: 'Teste Técnco Hiago Peroni',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CharacterProvider>
        <body className={inter.className}>{children}</body>
      </CharacterProvider>
    </html>
  )
}
