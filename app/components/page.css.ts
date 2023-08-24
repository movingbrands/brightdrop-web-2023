import {padding} from '@/style/sizes'
import {globalStyle, style} from '@vanilla-extract/css'

export const section = style({
  padding: padding.large,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
})

export const wrapper = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  background: 'rgba(0,0,0,0.05)',
  padding: `10px 0`,
  margin: 10,
  borderRadius: 8,
  cursor: 'pointer'
})

globalStyle(`${wrapper} > h1`, {
  textAlign: 'center',
  opacity: 0.5
})
