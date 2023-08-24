import { midblue, offwhite } from '@/style/colors'
import { breakpoints, padding } from '@/style/sizes'
import { globalStyle, style } from '@vanilla-extract/css'

export const grid = style({
  width: '100%',
  display: 'grid',
  paddingTop: 200,
  maxWidth: breakpoints.large,
  margin: '0 auto',
  gridTemplateColumns: `repeat(1, 1fr)`,
  padding: 24,
  gridColumnGap: 24,
  gridRowGap: 24,
  selectors: {
    '&[data-count="4"]': {
      height: '120vh',
      gridTemplateRows: `repeat(6, 1fr)`,
    },
    '&[data-count="5"]': {
      height: '150vh',
      gridTemplateRows: `repeat(6, 1fr)`,
    },
    '&[data-count="6"]': {
      height: '150vh',
      gridTemplateRows: `repeat(6, 1fr)`,
    },
    '&[data-count="7"]': {
      height: '240vh',
      gridTemplateRows: `repeat(12, 1fr)`,
    }
  },
  '@media': {
    [`(min-width: ${breakpoints.large}px)`]: {
      gridTemplateColumns: `repeat(5, 1fr)`,
      gridColumnGap: 32,
      gridRowGap: 32
    }
  }
})

const animationDuration = 0.5
const move = '20px'

export const baseCard = style({
  borderRadius: 16,
  background: midblue,
  // boxShadow: `0px 4px 8px 0px rgba(0, 0, 0, 0.15)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 32,
  width: '100%',
  height: '100%',
  transition: `transform ${animationDuration}s ease-in-out, opacity ${animationDuration}s ease-in-out`,
  opacity: 0.0,
  '@media': {
    [`(min-width: ${breakpoints.large}px)`]: {
      selectors: {
        '&:nth-child(1)': {
          gridArea: `1 / 1 / 4 / 3`
        },
        '&:nth-child(2)': {
          gridArea: `1 / 3 / 3 / 6`
        },
        '&:nth-child(3)': {
          gridArea: `4 / 1 / 7 / 3`
        },
        '&:nth-child(4)': {
          gridArea: `3 / 3 / 7 / 6`
        },
        '&:nth-child(5)': {
          gridArea: `7 / 1 / 10 / 6`
        },
        '&:nth-child(6)': {
          gridArea: `10 / 1 / 13 / 3`
        },
        '&:nth-child(7)': {
          gridArea: `10 / 3 / 13 / 6`
        }
      }
    }
  },
  selectors: {
    '&:nth-child(1)': {
      transform: `translateX(-${move})`,
    },
    '&:nth-child(2)': {
      transitionDelay: `${animationDuration / 3}s`,
      transform: `translateX(${move})`,
    },
    '&:nth-child(3)': {
      transform: `translateX(-${move})`,
    },
    '&:nth-child(4)': {
      transform: `translateX(${move})`,
      transitionDelay: `${animationDuration / 3}s`,
    },
    '&:nth-child(5)': {
      transform: `translateX(-${move})`,
    },
    '&:nth-child(6)': {
      transform: `translateX(-${move})`,
    },
    '&:nth-child(7)': {
      transitionDelay: `${animationDuration / 3}s`,
      transform: `translateX(${move})`,
    }
  }
})

export const cardVisible = style({
  opacity: 1.0,
  selectors: {
    '&:nth-child(1)': {
      transform: `translateX(0%)`,
    },
    '&:nth-child(2)': {
      transform: `translateX(0%)`,
    },
    '&:nth-child(3)': {
      transform: `translateX(0%)`,
    },
    '&:nth-child(4)': {
      transform: `translateX(0%)`,
    },
    '&:nth-child(5)': {
      transform: `translateX(0%)`,
    },
    '&:nth-child(6)': {
      transform: `translateX(0%)`,
    },
    '&:nth-child(7)': {
      transform: `translateX(0%)`,
    }
  }
})
