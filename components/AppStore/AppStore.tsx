'use client'

import {useAppStore} from '@/utils/app-store'
import {useMotionValueEvent, useScroll} from 'framer-motion'
import {useEffect} from 'react'
import {DevPanel} from './AppStore.css'

export const AppStore = () => {
  const [setScroll, setWindowSize] = useAppStore((state) => [
    state.setScroll,
    state.setWindowSize
  ])
  const {scrollY, scrollYProgress} = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) =>
    setScroll(v, scrollYProgress.get())
  )

  const handleResize = () => {
    setWindowSize(window.innerWidth, window.innerHeight)
  }
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return null
  // <aside className={DevPanel}>
  //     <pre>
  //         {JSON.stringify(store, null, 2)}
  //     </pre>
  // </aside>
}
