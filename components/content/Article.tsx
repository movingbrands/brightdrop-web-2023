'use client'

import classNames from 'clsx'
import {motion} from 'framer-motion'
import {animatedArticle} from './Article.css'

export type ViewportEventHandler = (
  entry: IntersectionObserverEntry | null
) => void

interface Article {
  children: React.ReactNode
  className?: string
}
interface AnimatedArticle extends Article {
  viewport?: {
    once?: boolean
    margin?: string
    amount?: 'some' | 'all' | number
  }
  onViewportEnter?: ViewportEventHandler
  onViewportLeave?: ViewportEventHandler
}

const defaultViewport = {
  once: false,
  amount: 0.4
}

export const AnimatedArticle = ({
  children,
  className,
  viewport = defaultViewport,
  onViewportEnter,
  onViewportLeave
}: AnimatedArticle) => (
  <motion.article
    initial={{opacity: 0, y: 200}}
    whileInView={{opacity: 1, y: 0}}
    transition={{ease: 'easeInOut', duration: 0.4}}
    viewport={viewport}
    className={classNames(animatedArticle, className)}
    onViewportLeave={onViewportLeave}
    onViewportEnter={onViewportEnter}
  >
    {children}
  </motion.article>
)

export const Article = ({children, className}: Article) => (
  <article className={classNames(animatedArticle, className)}>
    {children}
  </article>
)
