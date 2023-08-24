'use client'

import clsx from 'clsx'
import { useInView } from 'framer-motion'
import { card, smallCard, tray, trayLayout } from './Tray.css'
import { Children, useMemo, useRef } from 'react'

interface Tray {
  once?: boolean
  amount?: number
  children: React.ReactNode
  centered?: boolean
  behavior: 'scroll' | 'centered' | 'grid'
}


export const Tray = ({ children, once = true, amount = 0.8, behavior }: Tray) => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once, amount })

  const count = useMemo(() => Children.count(children), [children])

  return (
    <section
      ref={ref}
      className={clsx(tray, trayLayout[behavior])}
      data-visible={isInView}
      data-count={count}>
      {children}
    </section>
  )
}

interface TrayCard {
  children?: React.ReactNode
  small?: boolean
}

export const TrayCard = ({ children, small = false }: TrayCard) => (
  <article className={clsx(card, small && smallCard)}>
    {children}
  </article>
)