'use client'

import { h1, h2 } from '@/style/typography.css'
import clsx from 'clsx'
import { svg, text, wrapper } from './TypeMotion.css'
import {
  Variant,
  motion,
  useInView,
  useScroll,
  useTransform
} from 'framer-motion'
import { useRef } from 'react'

interface PathHeadline {
  title: string
  input?: [number, number]
}

const variants: Record<string, Variant> = {
  initial: {
    startOffset: '-80%',
    transition: {
      duration: 1
    }
  },
  visible: {
    startOffset: '70%',
    transition: {
      duration: 1
    }
  }
}
export const TypeMotion = ({ title, input = [0.0, 1.0] }: PathHeadline) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: 1 })

  return (
    <div className={wrapper} ref={ref}>
      <svg
        className={svg}
        width="800"
        height="400"
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="path"
            d="M0 80H117.705C183.979 80 237.705 133.726 237.705 200V200C237.705 266.274 291.431 320 357.705 320H500H800"
          />
        </defs>
        <text textAnchor="middle">
          <motion.textPath
            className={clsx(h2, text)}
            href="#path"
            variants={variants}
            initial="initial"
            animate={isInView ? 'visible' : 'initial'}
          >
            {title}
          </motion.textPath>
        </text>
      </svg>
    </div>
  )
}