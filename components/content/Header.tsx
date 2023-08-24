'use client'

import classNames from 'clsx'
import { motion } from 'framer-motion'
import { animatedHeader, backgroundImage, visible } from './Header.css'
import NextImage from 'next/legacy/image'
import { bg } from '@/style/theme.css'
import { Color } from '@/style/colors'
import clsx from 'clsx'
import { useState } from 'react'

export type ViewportEventHandler = (
  entry: IntersectionObserverEntry | null
) => void

interface Header {
  children: React.ReactNode
  className?: string
  image?: string
}
interface AnimatedHeader extends Header {
  viewport?: {
    once?: boolean
    margin?: string
    amount?: 'some' | 'all' | number
  }
  onViewportEnter?: ViewportEventHandler
  onViewportLeave?: ViewportEventHandler
  background?: Color
}

const defaultViewport = {
  once: true,
  amount: 0.4
}

export const AnimatedHeader = ({
  children,
  className,
  viewport = defaultViewport,
  onViewportEnter,
  onViewportLeave,
  image,
  background = 'navy'
}: AnimatedHeader) => (
  <motion.header
    initial={{
      clipPath: 'circle(500vh at 50% -420vh)'
    }}
    animate={{
      clipPath: 'circle(500vh at 50% -405vh)',
      transition: {
        ease: 'easeOut',
        duration: 1,
        delay: 0.25
      }
    }}
    exit={{
      clipPath: 'circle(100vh at -50vw 0%)'
    }}
    transition={{ ease: [0.33, 1, 0.68, 1], duration: 1 }}
    viewport={viewport}
    className={classNames(animatedHeader, className, bg[background])}
    onViewportLeave={onViewportLeave}
    onViewportEnter={onViewportEnter}
  >
    {image && <HeaderImage src={image} />}
    {children}
  </motion.header>
)

interface HeaderImage {
  src: string
}

const HeaderImage = ({ src }: HeaderImage) => {
  const [ready, setReady] = useState(false)
  return (
    <NextImage
      className={clsx(backgroundImage, ready && visible)}
      src={src}
      layout="fill"
      objectFit="cover"
      alt="Header image"
      onLoad={() => setReady(true)}
      // placeholder="blur"
      priority
      sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
    />
  )
}
export const Header = ({ children, className }: Header) => (
  <header className={classNames(animatedHeader, className)}>{children}</header>
)
