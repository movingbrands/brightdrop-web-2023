import {navy, white} from '@/style/colors'
import {
  breakpoints,
  buttonHeight,
  navHeight,
  padding,
  submenuExpanded
} from '@/style/sizes'
import {ComplexStyleRule, keyframes, style} from '@vanilla-extract/css'
// import { enterFromLeft } from "./animation.css";

// const breakpoints = {
//     m: 600,
//     l: 800,
//     xl: 1200
// }

const activeState: ComplexStyleRule = {
  opacity: 1.0,
  transform: `translateY(0) scale(1.0)`,
  pointerEvents: 'initial'
}

export const background = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  background: navy,
  zIndex: 10,
  pointerEvents: 'none',
  opacity: 0.0,
  transition: 'opacity 0.5s ease-in-out'
})

export const backgroundVisible = style({
  opacity: 0.4
})

const fadeIn = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
})

export const animateIn = style({
  opacity: 0.0
})

export const visible = style({
  animation: `${fadeIn} 0.3s 1.0s ease-in-out forwards`
})

export const navigation = style({
  position: 'fixed',
  width: `calc(100% - ${padding.small * 2}px)`,
  height: navHeight.small,
  left: padding.small,
  top: padding.small,
  borderRadius: navHeight.small / 2,
  zIndex: 11,
  transition: `transform 0.3s ease-in-out`,
  transform: `translateY(-150%) scale(0.95)`,
  '@media': {
    [`(min-width: ${breakpoints.small + padding.small * 2}px)`]: {
      maxWidth: breakpoints.small,
      height: navHeight.large,
      left: `calc(50% - ${breakpoints.small / 2}px)`
    },
    [`(min-width: ${breakpoints.large}px)`]: {
      maxWidth: breakpoints.large,
      width: `calc(100% - ${padding.large * 2}px)`,
      left: padding.large,
      top: padding.large,
      height: navHeight.large,
      borderRadius: navHeight.large / 2
    },
    [`(min-width: ${breakpoints.large + padding.large * 2}px)`]: {
      width: breakpoints.large,
      height: navHeight.large,
      left: `calc(50% - ${breakpoints.large / 2}px)`
      // left: padding.large,
    }
  }
})

export const navigationVisible = style({
  transform: 'translateY(0) scale(1.0)'
})

export const dynamicNavBackground = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: navHeight.small,
  height: navHeight.small,
  background: white,
  zIndex: -1,
  borderRadius: navHeight.small / 2,
  '@media': {
    [`(min-width: ${breakpoints.large}px)`]: {
      width: navHeight.large,
      height: navHeight.large,
      borderRadius: navHeight.large / 2
    }
  },
  boxShadow: `0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 12px 26px 0px rgba(0, 0, 0, 0.10), 0px 47px 47px 0px rgba(0, 0, 0, 0.09), 0px 105px 63px 0px rgba(0, 0, 0, 0.05), 0px 187px 75px 0px rgba(0, 0, 0, 0.01), 0px 292px 82px 0px rgba(0, 0, 0, 0.00)`
})

export const navList = style({
  position: 'absolute',
  top: navHeight.small,
  left: 0,
  width: '100%',
  height: submenuExpanded.small,
  zIndex: 12,
  listStyle: 'none',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: 8,
  paddingBottom: navHeight.small,
  opacity: 0.0,
  transform: `translateY(-20px)`,
  transition: `opacity 0.3s ease-in-out, transform 0.3s ease-in-out`,
  pointerEvents: 'none',
  '@media': {
    [`(min-width: ${breakpoints.large}px)`]: {
      position: 'relative',
      top: 0,
      left: 0,
      height: navHeight.large,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 1.0,
      padding: 8,
      transform: `translateY(0)`,
      transition: `initial`,
      pointerEvents: 'initial'
    }
  }
})

export const active = style(activeState)

export const trigger = style({
  padding: `8px 16px 4px 16px`,
  minHeight: buttonHeight.small,
  borderRadius: buttonHeight.small / 2,
  width: '100%',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 300,
  fontSize: 32,
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
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
      padding: `0 16px`,
      fontSize: 16
    }
  }
})

export const caret = style({
  position: 'relative',
  color: 'currentColor',
  top: 0,
  transition: `transform 250ms ease`,
  transform: `rotate(-90deg)`,
  selectors: {
    [`${trigger}[data-state="open"] &`]: {
      transform: `rotate(90deg)`
    }
  },
  '@media': {
    [`(min-width: ${breakpoints.large}px)`]: {
      transform: `rotate(0deg)`,
      selectors: {
        [`${trigger}[data-state="open"] &`]: {
          transform: `rotate(-180deg)`
        }
      }
    }
  }
})

export const navItem = style({
  cursor: 'pointer',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  fontSize: 24,
  position: 'relative',
  display: 'flex'
  // alignItems: 'center'
})

// fixed items

export const logoContainer = style({
  width: 150,
  position: 'absolute',
  top: (navHeight.small - 48) / 2,
  left: (navHeight.small - 48) / 2,
  zIndex: 13,
  height: 48,
  '@media': {
    [`(min-width: ${breakpoints.large}px)`]: {
      width: 165,
      top: (navHeight.large - 48) / 2,
      left: (navHeight.large - 48) / 2,
      height: 48
    }
  }
})

export const signIn = style({
  position: 'absolute',
  right: (navHeight.large - buttonHeight.large) / 2,
  '@media': {
    [`(max-width: ${breakpoints.large}px)`]: {
      left: (navHeight.large - buttonHeight.large) / 2,
      bottom: (navHeight.large - buttonHeight.large) / 2 + 2
    }
  }
})

export const contact = style({
  position: 'absolute',
  // pointerEvents: 'none',
  // opacity: 0.0,
  // transform: 'translateY(5px)',
  // transition: `transform 0.25s ease-in-out, opacity 0.25s ease-in-out`,
  right: 120,
  '@media': {
    [`(max-width: ${breakpoints.large}px)`]: {
      left: 120,
      bottom: (navHeight.large - buttonHeight.large) / 2
    }
  }
})

export const contactVisible = style({
  pointerEvents: 'all',
  opacity: 1.0,
  transform: 'translateY(0)'
})
