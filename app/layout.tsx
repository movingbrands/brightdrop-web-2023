import { Metadata } from 'next'
import { Overpass } from 'next/font/google'

export const overpass = Overpass({ subsets: ['latin'] })

import '../style/global.css'

export const metadata: Metadata = {
  title: 'BrightDrop',
  description: 'Description'
}

interface Layout {
  children: React.ReactNode
}

const Layout = ({ children }: Layout) => {
  return (
    <html lang="en">
      <head />
      <body className={overpass.className}>{children}</body>
    </html>
  )
}

export default Layout
