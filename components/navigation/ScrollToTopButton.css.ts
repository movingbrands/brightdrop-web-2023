import {breakpoints, padding} from '@/style/sizes'
import {style} from '@vanilla-extract/css'

export const scrollButton = style({
  position: 'fixed',
  bottom: padding.small,
  right: padding.small,
  opacity: 0.0,
  transform: 'translateY(100%) scale(0.8)',
  transition: `transform 0.3s ease-in-out, opacity 0.3s ease-in-out`,
  '@media': {
    [`(min-width: ${breakpoints.large}px)`]: {
      bottom: padding.large,
      right: padding.large
    }
  }
})

export const visible = style({
  opacity: 1.0,
  transform: 'translateY(0px) scale(1.0)'
})
