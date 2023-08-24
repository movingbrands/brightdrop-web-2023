import { midblue } from '@/style/colors'
import { breakpoints, padding } from '@/style/sizes'
import { globalStyle, style } from '@vanilla-extract/css'

const height = `40vh`

export const banner = style({
    width: '100%',
    height,
})

export const inner = style({
    background: midblue,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
})

export const insetBanner = style({
    maxWidth: breakpoints.large,
    margin: '0 auto',
    padding: padding.large
})

globalStyle(`${insetBanner} > ${inner}`, {
    borderRadius: 30
})