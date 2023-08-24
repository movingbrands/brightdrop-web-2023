import { midblue } from '@/style/colors'
import { breakpoints } from '@/style/sizes'
import { style } from '@vanilla-extract/css'

export const newsGrid = style({
  width: '100%',
  height: '100vh',
  display: 'grid',
  maxWidth: breakpoints.large,
  margin: '0 auto',
  gridTemplateColumns: `repeat(1, 1fr)`,
  padding: 24,
  paddingTop: 0,
  gridColumnGap: 24,
  gridRowGap: 24,
  '@media': {
    [`(min-width: ${breakpoints.large}px)`]: {
      gridTemplateColumns: `repeat(5, 1fr)`,
      gridTemplateRows: `repeat(6, 1fr)`,
      gridColumnGap: 96,
      gridRowGap: 32
    }
  }
})

export const baseNewsCard = style({
  borderRadius: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 32,
  width: '100%',
  height: '100%',
  background: midblue,
  selectors: {
    '&:nth-child(1)': {
      // boxShadow: `0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 14px 30px 0px rgba(0, 0, 0, 0.10), 0px 55px 55px 0px rgba(0, 0, 0, 0.09), 0px 124px 74px 0px rgba(0, 0, 0, 0.05), 0px 221px 88px 0px rgba(0, 0, 0, 0.01), 0px 345px 96px 0px rgba(0, 0, 0, 0.00)`
    }
  },
  '@media': {
    [`(min-width: ${breakpoints.large}px)`]: {
      selectors: {
        '&:nth-child(1)': {
          gridArea: `1 / 1 / 7 / 4`
        },
        '&:nth-child(2)': {
          gridArea: `1 / 4 / 4 / 6`
        },
        '&:nth-child(3)': {
          gridArea: `4 / 4 / 7 / 6`
        }
      }
    }
  }
})
