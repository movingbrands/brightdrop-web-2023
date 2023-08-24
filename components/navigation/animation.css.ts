import {keyframes} from '@vanilla-extract/css'

export const enterFromRight = keyframes({
  from: {
    opacity: 0,
    transform: `translateX(50px)`
  },
  to: {
    opacity: 1,
    transform: `translateX(0)`
  }
})

export const enterFromLeft = keyframes({
  from: {
    // opacity: 0,
    transform: `translateY(50px)`,
    pointerEvents: 'none'
  },
  to: {
    // opacity: 1,
    pointerEvents: 'auto',
    transform: `translateY(0px)`
    // transform: `translateX(0)`
  }
})

export const exitToRight = keyframes({
  from: {
    opacity: 1,
    transform: `translateX(0)`
  },
  to: {
    opacity: 0,
    transform: `translateX(50px)`
  }
})

export const exitToLeft = keyframes({
  from: {
    opacity: 1,
    transform: `translateX(0)`
  },
  to: {
    opacity: 0,
    transform: `translateX(-50px)`
  }
})

export const scaleIn = keyframes({
  from: {
    opacity: 0,
    transform: `translateY(20px) scale(1.0)`
  },
  to: {
    opacity: 1,
    transform: `translateY(0) scale(1)`
  }
})

export const scaleOut = keyframes({
  from: {
    opacity: 1,
    transform: `translateY(0) scale(1)`
  },
  to: {
    opacity: 0,
    transform: `translateY(20px) scale(1.0)`
  }
})

export const fadeOut = keyframes({
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
})
export const fadeIn = keyframes({
  '0%': {
    opacity: 0
  },
  '50%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
})
