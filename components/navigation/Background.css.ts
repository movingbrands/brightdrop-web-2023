import {style} from '@vanilla-extract/css'

export const svg = style({
  pointerEvents: 'none',
  userSelect: 'none',
  position: 'absolute'
  // outline: '1px solid red'
})

export const line = style({
  fill: 'white',
  // filter: 'drop-shadow(0px 5px 10px rgb(0 190 255 / 0.4))'
  filter: 'drop-shadow(0px 4px 10px rgb(0 0 0 / 0.2))'
})
