import NavBar from './components/navbar'
import './globals.css'
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({ weight: ["400"], subsets: ["latin"] })

export const metadata = {
  title: 'Velluci - Clothing Brand',
  description: 'E-commerce website for Velluci - a clothing brand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bebasNeue.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
