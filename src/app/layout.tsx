import './globals.css'
import { Inter } from 'next/font/google'
import ScrollWatcher from './components/ScrollWatcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adam, Ironclad, Wells',
  description: 'Digital Portfolio with info on my professional experience and previous work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='text-sm | md:text-base'>
      <ScrollWatcher />
      <body className={`bg-[#040816] text-[#cadae0] leading-[1.75] pb-40 ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
