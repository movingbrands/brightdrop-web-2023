'use client'

import classNames from 'clsx'
import {motion} from 'framer-motion'
import {main} from './Main.css'
import {Color} from '@/style/colors'
import {bg} from '@/style/theme.css'

interface Main {
  children: React.ReactNode
  className?: string
  background?: Color
}

export const AnimatedMain = ({
  children,
  className,
  background = 'white'
}: Main) => (
  <motion.main
    initial={{
      opacity: 0.0
      // clipPath: "circle(500vh at 50% -500vh)",
    }}
    animate={{
      opacity: 1
      // clipPath: "circle(500vh at 50% -410vh)",
    }}
    exit={{
      opacity: 0.0
      // clipPath: "circle(100vh at -50vw 0%)",
    }}
    transition={{ease: 'easeInOut', duration: 0.3}}
    className={classNames(main, className, bg[background])}
  >
    {children}
  </motion.main>
)

export const Main = ({children, className, background = 'white'}: Main) => (
  <main className={classNames(main, className, bg[background])}>
    {children}
  </main>
)

// export const AnimatedMain = Main
