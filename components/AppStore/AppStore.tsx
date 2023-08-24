'use client'

import { useAppStore } from '@/utils/app-store'
import { debounce } from '@/utils/debounce'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect } from 'react'

export const AppStore = () => {
  const [setScroll, setWindowSize] = useAppStore((state) => [
    state.setScroll,
    state.setWindowSize
  ])
  const { scrollY, scrollYProgress } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) =>
    setScroll(v, scrollYProgress.get())
  )

  const handleResize = debounce(() => {
    setWindowSize(window.innerWidth, window.innerHeight)
  }, 32)
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return null
}
