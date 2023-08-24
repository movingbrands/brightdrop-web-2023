import {style} from '@vanilla-extract/css'

export const animatedHeader = style({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const backgroundImage = style({
  opacity: 0.0,
  zIndex: -1,
  transition: 'opacity 0.5 ease-in-out'
})

export const visible = style({
  opacity: 1.0
})
