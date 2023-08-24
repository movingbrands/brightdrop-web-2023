import {style} from '@vanilla-extract/css'
import {cyan, midblue} from './colors'

export const interactable = style({
  // boxShadow: `0px 0px 0px 2px rgba(255,255,255,0.0)`,
  selectors: {
    '&:focus-visible': {
      boxShadow: `0px 0px 0px 2px ${cyan}`
    },
    '&:active': {
      boxShadow: `0px 0px 0px 2px ${cyan}`
    },
    '&:hover': {
      // background: `rgba(0,0,0,0.1)`
      // boxShadow: `0px 0px 0px 3px ${midblue}`
    }
  }
})
