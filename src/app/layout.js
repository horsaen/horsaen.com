import './globals.css'
import { Inter } from 'next/font/google'
import Cursor from '@/lib/cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'horsaën',
  description: 'my personal website :D',
  themeColor: '#e6edf3'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        {children}
      </body>
    </html>
  )
}
