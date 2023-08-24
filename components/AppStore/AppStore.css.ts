import {black, white} from '@/style/colors'
import {globalStyle, style} from '@vanilla-extract/css'

export const DevPanel = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  padding: `10px 20px`,
  // borderRadius: 5,
  color: white,
  background: 'rgba(0,0,0,0.5)',
  zIndex: 1000,
  fontSize: 13,
  maxWidth: 200,
  pointerEvents: 'none'
})

globalStyle(`${DevPanel} *`, {
  font: 'inherit'
})
