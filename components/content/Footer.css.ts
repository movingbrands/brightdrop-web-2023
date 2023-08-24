import { navy, white } from '@/style/colors'
import { footerHeight } from '@/style/sizes'
import { style } from '@vanilla-extract/css'

export const footer = style({
  background: navy,
  height: footerHeight.large,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: 80,
  justifyContent: 'center',
  color: white,
  position: 'fixed',
  bottom: 0,
  left: 0,
  zIndex: -1,
  opacity: 0.0
})

export const section = style({
  width: '100%'
})

export const ul = style({
  listStyle: 'none',
  padding: 0,
  margin: 0
})

export const visible = style({
  opacity: 1.0
})
