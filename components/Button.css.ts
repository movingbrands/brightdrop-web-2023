import {midblue, white} from '@/style/colors'
import {buttonHeight} from '@/style/sizes'
import {style, styleVariants} from '@vanilla-extract/css'

const base = style({
  height: buttonHeight.small,
  lineHeight: `${buttonHeight.small - 1}px`,
  borderRadius: buttonHeight.small / 2,
  padding: '2px 20px 0 20px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 600,
  fontSize: 14,
  letterSpacing: 0.5,
  textTransform: 'uppercase',
  overflow: 'hidden',
  position: 'relative',
  display: 'inline-block',
  zIndex: 0,
  cursor: 'pointer'
})

export const button = styleVariants({
  primary: [
    base,
    {
      backgroundColor: midblue,
      color: white,
      selectors: {
        '&:before': {
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '130%',
          height: '100%',
          borderRadius: 'inherit',
          content: '',
          background: `linear-gradient(270deg, #38E8FF 0%, rgba(56, 232, 255, 0.00) 100%)`,
          zIndex: -1,
          transition: 'all 0.25s ease-in-out',
          transform: 'translateX(-100%)',
          opacity: 0.0
        },
        '&:hover:before': {
          transform: 'translateX(0%)',
          opacity: 1.0
        }
      }
    }
  ],
  outline: [
    base,
    {
      height: buttonHeight.small - 2,
      lineHeight: `${buttonHeight.small - 3}px`,
      boxShadow: `0px 0px 0px 1px ${midblue}`,
      color: midblue,
      background: 'initial',
      selectors: {
        '&:before': {
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '130%',
          height: '100%',
          borderRadius: 'inherit',
          content: '',
          background: `linear-gradient(270deg, ${midblue} 0%, ${midblue} 100%)`,
          zIndex: -1,
          transition: 'all 0.25s ease-out',
          transform: 'translateX(-100%)',
          opacity: 0.5
        },
        '&:hover': {
          color: 'white'
        },
        '&:hover:before': {
          transform: 'translateX(0%)',
          opacity: 1.0
        }
      }
    }
  ]
})

export const large = style({
  border: `initial`,
  height: 48,
  borderRadius: 30,
  fontSize: 14,
  padding: '2px 24px 0 24px'
})

export const actionButton = style({
  background: white,
  width: 40,
  height: 40,
  borderRadius: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})
