import {Variant, motion} from 'framer-motion'
import {line, svg} from './Background.css'
import {useMemo} from 'react'

export type NavigationAnimationState = 'initial' | 'resting' | 'expanded'

const draw: Record<NavigationAnimationState, Variant> = {
  initial: ([_width, height]: [number, number]) => ({
    height,
    width: height,
    transition: {
      ease: [0.45, 0, 0.55, 1],
      duration: 1
    }
  }),
  resting: ([width, height]: [number, number]) => ({
    width,
    height,
    transition: {
      ease: [0.45, 0, 0.55, 1],
      duration: 0.4
    }
  }),
  expanded: ([width, _, height]: [number, number, number]) => ({
    width,
    height,
    transition: {
      ease: [0.45, 0, 0.55, 1],
      duration: 0.4
    }
  })
}

interface NavigationBackground {
  width: number
  height: number
  expandedHeight: number
  state: NavigationAnimationState
  initial?: NavigationAnimationState
}

const shadowSize = 40

export const NavigationBackground = ({
  width,
  height,
  expandedHeight,
  state = 'initial',
  initial = 'initial'
}: NavigationBackground) => {
  const [s, r] = useMemo(
    () => [
      {
        width: width + shadowSize,
        height: expandedHeight + shadowSize,
        viewBox: `0 0 ${width + shadowSize} ${expandedHeight + shadowSize}`,
        style: {
          top: -shadowSize / 2
        }
      },
      {
        rx: height / 2,
        x: shadowSize / 2,
        y: shadowSize / 2
      }
    ],
    [width, height, expandedHeight]
  )
  return (
    <svg className={svg} preserveAspectRatio="none" {...s}>
      <motion.rect
        className={line}
        initial={initial}
        variants={draw}
        animate={state}
        custom={[width, height, expandedHeight]}
        {...r}
      />
    </svg>
  )
}
