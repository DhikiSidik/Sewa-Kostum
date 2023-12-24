import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ALI-COSTRENT',
  description: 'website resmi Ali-Rentcos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='navbar'>
            <h1>ALI-RENTCOS</h1>
        </div>
        {children}
      </body>
    </html>
  )
}
