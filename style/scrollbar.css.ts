import {style} from '@vanilla-extract/css'
import {midblue, white} from './colors'

export const scrollbar = style({
  selectors: {
    '&::-webkit-scrollbar': {
      width: 9
    },
    '&::-webkit-scrollbar-track': {
      background: `rgba(255,255,255,0.0)`
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: midblue,
      borderRadius: 20,
      border: `3px solid ${white}`
    }
  }
})
