'use client'

import {AnimatePresence, MotionConfig} from 'framer-motion'

interface AnimatedPageContainer {
  children: React.ReactNode
}

export const AnimatedPageContainer = ({children}: AnimatedPageContainer) => (
  <MotionConfig reducedMotion="user">
    <AnimatePresence>{children}</AnimatePresence>
  </MotionConfig>
)
