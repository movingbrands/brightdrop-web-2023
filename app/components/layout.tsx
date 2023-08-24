import { Metadata } from 'next'
import { layout } from './layout.css'

export const metadata: Metadata = {
  title: 'BrightDrop',
  description: 'Description'
}

interface Layout {
  children: React.ReactNode
}

const Layout = ({ children }: Layout) => {
  return (
    <main className={layout}>{children}</main>
  )
}

export default Layout
