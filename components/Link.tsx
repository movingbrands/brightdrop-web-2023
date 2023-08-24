import {motion} from 'framer-motion'
import NextLink from 'next/link'

interface Link {
  href: string
  children: React.ReactNode
  className?: string
}

export const Link = NextLink

export const MotionLink = motion(NextLink)
