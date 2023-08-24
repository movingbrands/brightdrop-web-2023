'use client'

import clsx from 'clsx'
import { useInView } from 'framer-motion'
import { baseCard, cardVisible, grid } from './CardLayout.css'
import { Children, useRef } from 'react'

interface CardLayout {
  once?: boolean
  amount?: number
  children: React.ReactNode
}

export const CardLayout = ({ children }: CardLayout) => (
  <section
    className={clsx(grid)}
    data-count={Children.count(children)}>
    {children}
  </section>
)

export const Card = ({ children, once = true, amount = 0.75 }: CardLayout) => {
  const ref = useRef(null)
  const isView = useInView(ref, {
    once,
    amount
  })

  return (
    <article
      ref={ref}
      className={clsx(baseCard, isView && cardVisible)}>
      {children}
    </article>
  )
}