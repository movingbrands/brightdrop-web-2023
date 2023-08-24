import {Metadata} from 'next'
import {overpass} from '@/style/fonts'
import {layout} from './layout.css'

export const metadata: Metadata = {
  title: 'BrightDrop',
  description: 'Description'
}

interface Layout {
  children: React.ReactNode
}

const Layout = ({children}: Layout) => {
  return (
    <html lang="en">
      <head />
      <body className={overpass.className}>
        <main className={layout}>{children}</main>
      </body>
    </html>
  )
}

export default Layout
