import {black, midblue, offwhite, white} from '@/style/colors'
import {globalStyle, keyframes, style} from '@vanilla-extract/css'
import {fadeIn, fadeOut} from './animation.css'
import {
  breakpoints,
  buttonHeight,
  navHeight,
  padding,
  submenuExpanded
} from '@/style/sizes'
import {caret} from './Navigation.css'

// Main container for Submenu

export const submenuContainer = style({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  top: navHeight.small,
  left: 0,
  zIndex: 13,
  transformOrigin: '50% 0%',
  height: submenuExpanded.small,
  paddingBottom: 200,
  borderRadius: `0px 0px ${navHeight.small / 2}px ${navHeight.small / 2}px`,
  selectors: {
    '&[data-state="open"]': {
      animation: `${fadeIn} 0.4s ease-in-out`,
    },
    '&[data-state="closed"]': {
      animation: `${fadeOut} 0.2s ease`
    }
  },
  '@media': {
    [`(max-width: ${breakpoints.large}px)`]: {
      borderTop: '1px solid rgba(0,0,0,0.1)',
      overflowY: 'scroll',
      WebkitOverflowScrolling: 'touch',
      background: white
    },
    [`(min-width: ${breakpoints.large}px)`]: {
      borderRadius: `0px 0px ${navHeight.large / 2}px ${navHeight.large / 2}px`,
      top: navHeight.large,
      height: submenuExpanded.large
    }
  }
})

// Container for each Submenu

export const contentAnimationX = keyframes({
  from: {
    opacity: 0,
    transform: `translateX(20px)`,
    pointerEvents: 'none'
  },
  to: {
    opacity: 1,
    pointerEvents: 'auto',
    transform: `translateX(0px)`
  }
})

export const contentAnimationY = keyframes({
  from: {
    opacity: 0,
    transform: `translateY(-10px)`,
    pointerEvents: 'none'
  },
  to: {
    opacity: 1,
    pointerEvents: 'auto',
    transform: `translateY(0px)`
  }
})

export const submenuContent = style({
  height: '100%',
  width: '100%',
  animation: `${contentAnimationX} 0.4s ease-in-out`,
  zIndex: 50,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  '@media': {
    [`(min-width: ${breakpoints.large}px)`]: {
      animation: `${contentAnimationY} 0.4s ease-in-out`,
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }
})

export const backButton = style({
  position: 'absolute',
  top: `calc(${navHeight.small / 2}px - ${buttonHeight.small / 2}px)`,
  left: `calc(${navHeight.small / 2}px - ${buttonHeight.small / 2}px)`,
  height: buttonHeight.small,
  borderRadius: buttonHeight.small / 2,
  padding: `0 24px 0 16px`,
  outline: 'none',
  userSelect: 'none',
  fontWeight: 300,
  fontSize: 20,
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  overflow: 'hidden',
  selectors: {
    '&:before': {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      content: '',
      background: `rgba(0,0,0,0.075)`,
      zIndex: -1,
      transition: 'all 0.25s ease-in-out',
      opacity: 0.0
    },
    '&:hover:before': {
      transform: 'translateX(0%)',
      opacity: 1.0
    }
  },
  '@media': {
    [`(min-width: ${breakpoints.large}px)`]: {
      display: 'none',
      visibility: 'hidden'
    }
  }
})

globalStyle(`${backButton} > ${caret}`, {
  transform: 'rotate(90deg)'
})

// Section within Submenu

export const submenuSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media': {
    [`(max-width: ${breakpoints.large}px)`]: {
      width: '100%'
    }
  }
  // borderLeft: '1px solid rgba(0,0,0,0.1)'
})

export const fullSection = style({
  width: '100%',
  padding: `16px 0 0 0`,
  flexGrow: 2,
  // flexDirection: 'row',
  // justifyContent: 'space-between'
})

export const submenuSectionHeader = style({
  textTransform: 'uppercase',
  letterSpacing: 1.5,
  color: black,
  opacity: 0.5,
  fontSize: 14,
  padding: 24,
  width: '100%',
  textAlign: 'center'
})

// export const subme
// Unordered list within Submenu or Section

export const submenuList = style({
  margin: '0',
  listStyle: 'none',
  width: '100%',
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  flexDirection: 'column',
  padding: `0 ${padding.small}px`,
  '@media': {
    [`(min-width: ${breakpoints.large}px)`]: {
      padding: 0,
      flexDirection: 'row'
    }
  }
})

// Specific styles for Products list
export const productsList = style({})

// Specific styles for Solutions list
export const solutionsList = style({})

// List item within Submenu or Section

export const listItem = style({
  marginBottom: 16,
  '@media': {
    [`(min-width: ${breakpoints.large}px)`]: {
      margin: `0 8px`
    }
  }
})

// Specific styles for Products list item
export const submenuItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '100%',
  width: '100%',
  borderRadius: 12,
  outline: 'none',
  userSelect: 'none',
  fontWeight: 500,
  fontSize: 15,
  color: 'black',
  background: offwhite,
  // background: `rgba(0,0,0,0.05)`,
  transition: `background 0.2s ease-in-out`,
  selectors: {
    '&:hover': {
      background: midblue,
      color: white
    }
  },
  '@media': {
    [`(min-width: ${breakpoints.large}px)`]: {
      maxWidth: 240,
      minHeight: 300,
      height: '100%',
      flexDirection: 'column',
      textAlign: 'center'
    }
  }
})

globalStyle(`${submenuItem} p`, {
  marginTop: 8,
  maxWidth: 240
})

globalStyle(`${submenuItem} img`, {
  // width: 50,
  // height: 50
})
globalStyle(`${submenuItem} header`, {
  padding: 16
  // border: '1px solid red'
})
