'use client'

import { Variant, motion } from 'framer-motion'
import { h1, h4, p } from '@/style/typography.css'
import clsx from 'clsx'
import { line, lineHighlight, headline } from './Headline.css'
import { useEffect, useState } from 'react'
import { button, large } from './Button.css'
import { interactable } from '@/style/interactable.css'
import { MotionLink } from './Link'
import { routes } from '@/sitemap'

const variants: Record<'initial' | 'visible', Variant> = {
  initial: (delay) => ({
    y: 10,
    opacity: 0.0,
    transition: {
      ease: 'easeOut',
      duration: 0.3,
      delay: 0.5 + delay
    }
  }),
  visible: (delay) => ({
    y: 0,
    opacity: 1.0,
    transition: {
      ease: 'easeOut',
      duration: 0.3,
      delay: 0.5 + delay
    }
  })
}

interface Line {
  highlight?: boolean
  content: string
}
interface Headline {
  lines: Line[]
  paragraph: string
  cta?: string
}

export const Headline = ({ lines, cta, paragraph }: Headline) => {
  const [animationState, setAnimationState] = useState<'initial' | 'visible'>(
    'initial'
  )

  useEffect(() => {
    setAnimationState('visible')
  }, [])
  return (
    <div className={clsx(headline)}>
      <h1 className={clsx(h1)}>
        {lines.map(({ content, highlight }, index) => (
          <motion.span
            key={`headline-${index}`}
            className={clsx(line, highlight && lineHighlight)}
            initial={'initial'}
            animate={animationState}
            custom={index * 0.2}
            variants={variants}
          >
            {content}
          </motion.span>
        ))}
      </h1>
      <motion.p
        initial={'initial'}
        animate={animationState}
        custom={2 * 0.2}
        variants={variants}
        className={h4}
      >
        {paragraph}
      </motion.p>
      {cta && (
        <MotionLink
          href={routes.contact.path}
          initial={'initial'}
          animate={animationState}
          custom={3 * 0.2}
          variants={variants}
          className={clsx(button.primary, large, interactable)}
        >
          {cta}
        </MotionLink>
      )}
    </div>
  )
}
