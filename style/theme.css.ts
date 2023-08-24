import {
  ComplexStyleRule,
  createTheme,
  styleVariants
} from '@vanilla-extract/css'
import * as colors from './colors'

export const [themeClass, vars] = createTheme({
  color: colors
})

export const bg = styleVariants({
  black: {
    color: colors.white,
    backgroundColor: colors.black
  },
  navy: {
    color: colors.white,
    backgroundColor: colors.navy
  },
  midblue: {
    color: colors.white,
    backgroundColor: colors.midblue
  },
  cyan: {
    color: colors.black,
    backgroundColor: colors.cyan
  },
  offwhite: {
    color: colors.black,
    backgroundColor: colors.offwhite
  },
  white: {
    color: colors.black,
    backgroundColor: colors.white
  },
  lightblue: {
    color: colors.black,
    backgroundColor: colors.lightblue
  }
})

export const col = styleVariants({
  black: {
    color: colors.black
  },
  navy: {
    color: colors.navy
  },
  midblue: {
    color: colors.midblue
  },
  cyan: {
    color: colors.cyan
  },
  offwhite: {
    color: colors.offwhite
  },
  white: {
    color: colors.white
  },
  lightblue: {
    color: colors.lightblue
  }
})
