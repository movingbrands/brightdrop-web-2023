import { midblue, navy, offwhite, white } from '@/style/colors'
import { easeOutQuart } from '@/style/easings'
import { breakpoints } from '@/style/sizes'
import { globalStyle, style, styleVariants } from '@vanilla-extract/css'

export const tray = style({
  width: '100%',
  color: navy,
  display: 'flex',
})

export const trayLayout = styleVariants({
  'centered': {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 120
  },
  'scroll': {
    overflow: 'auto',
    overflowY: 'hidden',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    paddingLeft: 120,
    padding: `0 30px 120px 120px`,
  },
  'grid': {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: breakpoints.large,
    margin: '0 auto'
  }
})

const animationDuration = 0.5
const delay = 0.2
const move = `80px`

export const card = style({
  marginRight: 30,
  marginBottom: 30,
  width: 300,
  height: 400,
  borderRadius: 30,
  background: midblue,
  color: 'white',
  transform: `translateY(${move})`,
  transition: `transform ${animationDuration}s ${easeOutQuart}, opacity ${animationDuration}s ${easeOutQuart}`,
  opacity: 0.0,
  selectors: {
    '&:nth-child(1)': {
      transitionDelay: `${0}s`,
    },
    '&:nth-child(2)': {
      transitionDelay: `${delay}s`,
    },
    '&:nth-child(3)': {
      transitionDelay: `${delay * 2}s`,
    },
    '&:nth-child(4)': {
      transitionDelay: `${delay * 3}s`,
    },
    '&:nth-child(5)': {
      transitionDelay: `${delay * 4}s`,
    },
  }
})

export const smallCard = style({
  width: 200,
  height: 300,
})

globalStyle(`${trayLayout.scroll} > ${card}`, {
  flex: '10 0 auto',
})

globalStyle(`${tray}[data-visible="true"] > ${card}`, {
  opacity: 1.0,
  transform: `translateY(0)`
})