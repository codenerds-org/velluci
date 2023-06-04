import './globals.css'
import NavBar from './components/Navbar'
import { Bebas_Neue } from 'next/font/google'
import { CartProvider } from 'use-shopping-cart'
import Footer from './components/Footer'

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
        <CartProvider
          mode="payment"
          cartMode="client-only"
          stripe={process.env.DEBUG ? process.env.STRIPE_TEST_API_KEY! : process.env.STRIPE_LIVE_API_KEY! }
          successUrl={`${process.env.NEXT_PUBLIC_URL}/success`}
          cancelUrl={`${process.env.NEXT_PUBLIC_URL}/?success=false`}
          currency={process.env.CURRENCY!}
          allowedCountries={['US', 'GB']}
          billingAddressCollection={true}
          shouldPersist={true}
        >
          <NavBar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}