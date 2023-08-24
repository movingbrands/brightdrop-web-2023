import {midblue, white} from '@/style/colors'
import {breakpoints, navHeight} from '@/style/sizes'
import {keyframes, style} from '@vanilla-extract/css'

export const navButton = style({
  position: 'absolute',
  top: (navHeight.small - 40) / 2,
  right: (navHeight.small - 40) / 2,
  zIndex: 500,
  opacity: 0.0,
  '@media': {
    [`(min-width: ${breakpoints.large}px)`]: {
      display: 'none',
      visibility: 'hidden',
      opacity: 0.0
    }
  }
})

export const path = style({
  strokeWidth: 2,
  stroke: midblue,
  strokeDasharray: 100,
  strokeDashoffset: 84
})

export const animation = keyframes({
  from: {
    strokeDasharray: 100,
    strokeDashoffset: 84
  },
  to: {
    strokeDasharray: 32,
    strokeDashoffset: 35
  }
})

export const closed = style({
  strokeDasharray: 32,
  strokeDashoffset: 35
  // animation: `${animation} 0.4s ease forwards`
})
