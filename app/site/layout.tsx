import { Metadata } from 'next'

import { AppStore } from '@/components/AppStore'
import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/content/Footer'
import { AnimatedPageContainer } from '@/components/AnimatedPageContainer'

export const metadata: Metadata = {
  title: 'BrightDrop',
  description: 'Description'
}

interface Layout {
  children: React.ReactNode
}

const Layout = ({ children }: Layout) => {
  return (
    <>
      <AppStore />
      <Navigation />
      <AnimatedPageContainer>{children}</AnimatedPageContainer>
      <Footer />
    </>
  )
}

export default Layout
