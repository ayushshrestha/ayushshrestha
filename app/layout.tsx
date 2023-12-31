import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from './modules/header'
import Footer from './modules/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal Portfolio',
  description: 'Generated by create next app',
  keywords: 'UI/UX Designer, Frontend Engineer'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
