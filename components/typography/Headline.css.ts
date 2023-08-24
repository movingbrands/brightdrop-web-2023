import {cyan} from '@/style/colors'
import {breakpoints, padding} from '@/style/sizes'
import {globalStyle, style} from '@vanilla-extract/css'

export const headline = style({
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  padding: padding.small,
  '@media': {
    [`(min-width: ${breakpoints.large}px)`]: {
      maxWidth: breakpoints.large - padding.large * 2,
      padding: 0
    }
  }
})

globalStyle(`${headline} > p`, {
  margin: `20px 0`,
  maxWidth: 390
})

globalStyle(`${headline} > a`, {
  margin: `20px 0`
})

export const line = style({
  display: 'block',
  lineHeight: 1.2
})

export const lineHighlight = style({
  color: cyan
})
