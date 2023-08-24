import {globalStyle} from '@vanilla-extract/css'
import {navy, white} from './colors'

globalStyle('html, body', {
  minHeight: '200vh'
})

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  WebkitTapHighlightColor: 'transparent'
})

globalStyle('body', {
  margin: 0,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  background: navy,
  color: '#000000',
  padding: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat'
})

globalStyle('h1, h2, h3, h4, p', {
  fontSize: '1em',
  marginBlockStart: 'initial',
  marginBlockEnd: 'initial',
  margin: 0
})

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit'
})

globalStyle('button, input, textarea', {
  all: 'unset',
  font: 'inherit'
})

globalStyle('ul', {
  marginBlockStart: 'initial',
  marginBlockEnd: 'initial',
  paddingInlineStart: '0'
})
