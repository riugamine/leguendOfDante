'use client'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Montserrat } from 'next/font/google'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { useEffect } from 'react'
const mont = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'League Of Dante',
  description: 'Tienda de nfts',
}

export default function RootLayout({ children }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])
  
  return (
    <html lang="en">
      <body className={mont.className}>
        <section>
          <Header/>
          {children}
          <Footer/>
        </section>
      </body>
    </html>
  )
}
