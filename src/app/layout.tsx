import './globals.css'
import NavBar from './components/Navbar'
import { Bebas_Neue } from 'next/font/google'
import Footer from './components/Footer'
import Cart from './components/CartProvider'

const bebasNeue = Bebas_Neue({ weight: ["400"], subsets: ["latin"], display: "swap" })

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
        <Cart>
          <NavBar />
          {children}
          <Footer />
        </Cart>
      </body>
    </html>
  )
}