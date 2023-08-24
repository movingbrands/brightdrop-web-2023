'use client'

import classNames from 'clsx'
import { main } from './Main.css'
import { Color } from '@/style/colors'
import { bg } from '@/style/theme.css'

interface Main {
  children: React.ReactNode
  className?: string
  background?: Color
}

export const Main = ({ children, className, background = 'white' }: Main) => (
  <main className={classNames(main, className, bg[background])}>
    {children}
  </main>
)
